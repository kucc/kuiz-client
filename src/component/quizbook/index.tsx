import * as S from "./styles";
import { useHistory } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DropDown from "@/component/drop-down";
import { RootState } from "@/modules";
import { QuizBookProps } from "./types";
import { STATIC_URL } from "@/asset/constant";
import { showAlertModal } from "@/modules/modal";
import { deleteQuizBookAsync } from "@/modules/user-quizbook";
import { postQuizBookLikeAsync } from "@/modules/quiz-book";

// eslint-disable-next-line react/display-name
const QuizBook = React.forwardRef(
  (
    { quizBook, isUserQuizBook }: QuizBookProps,
    ref: React.Ref<HTMLDivElement>
  ) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { error } = useSelector((state: RootState) => state.quizbook);
    const likeButton = useRef<HTMLImageElement>(null);
    const settingButton = useRef<HTMLImageElement>(null);
    const dropDownContainer = useRef<HTMLDivElement>(null);
    const [dropDown, setDropDown] = useState(false);

    useEffect(() => {
      if (!error) return;
      dispatch(showAlertModal("문제집을 풀어야 좋아요를 누를 수 있습니다!"));
    }, [error]);

    const onClick = async (e) => {
      if (e.target === likeButton.current) {
        dispatch(postQuizBookLikeAsync.request(quizBook.id));

        return;
      }
      if (e.target === settingButton.current) {
        setDropDown(!dropDown);
        return;
      }
      if (e.target.parentNode === dropDownContainer.current) {
        return;
      }
      if (dropDown) {
        setDropDown(!dropDown);
        return;
      }

      history.push(`/quiz-book/${quizBook.id}/quiz`);
      return;
    };

    const editQuizBook = () => {
      history.push(`/quiz-book/${quizBook.id}`);
    };

    const deleteQuizBook = () => {
      const isDelete = confirm(
        "삭제 후 다시 복구할 수 없습니다. 정말 삭제하시겠어요?"
      );
      if (!isDelete) return;

      dispatch(deleteQuizBookAsync.request({ quizBookId: quizBook.id }));
    };
    return (
      <>
        <S.QuizBookWrapper onClick={onClick} ref={ref}>
          <S.QuizBookRow height={4}>
            <S.QuizBookName>
              <S.QuizBoldText>{quizBook.title}</S.QuizBoldText>
            </S.QuizBookName>
            <S.QuizBookLike>
              <S.LikeIconWrapper>
                {quizBook.liked == true ? (
                  <S.LikeIcon
                    liked={quizBook.liked}
                    src={STATIC_URL.LIKE_ICON}
                    alt="LikeIcon"
                    ref={likeButton}
                  />
                ) : (
                  <S.LikeIcon
                    liked={quizBook.liked}
                    src={STATIC_URL.UNLIKE_ICON}
                    alt="UnlikeIcon"
                    ref={likeButton}
                  />
                )}
              </S.LikeIconWrapper>
              <S.QuizText bold>{quizBook.likedCount}</S.QuizText>
            </S.QuizBookLike>
          </S.QuizBookRow>
          <S.QuizBookRow height={3}>
            <S.QuizCount>
              <S.QuizText bold>Q {quizBook.quizCount}</S.QuizText>
            </S.QuizCount>
            <S.SolvedCount>
              <S.QuizText bold={false}>{quizBook.solvedCount} solve</S.QuizText>
            </S.SolvedCount>

            <S.QuizBookOwner>
              {!isUserQuizBook ? (
                <S.QuizText bold={false}>{quizBook.ownerName}</S.QuizText>
              ) : (
                <>
                  <S.QuizBookSetButton
                    src={"/src/asset/setting.png"}
                    ref={settingButton}
                  />
                  <DropDown
                    ref={dropDownContainer}
                    show={dropDown}
                    text1={"수정하기"}
                    text2={"삭제하기"}
                    clickEvent1={editQuizBook}
                    clickEvent2={deleteQuizBook}
                  />
                </>
              )}
            </S.QuizBookOwner>
          </S.QuizBookRow>
        </S.QuizBookWrapper>
      </>
    );
  }
);

export default QuizBook;
