import React, { useRef, useState } from "react";
import { QuizBookProps } from "./types";
import * as S from "./styles";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  deleteQuizBookAsync,
  postQuizBookLikeAsync,
} from "@/modules/quiz-book";
import DropDown from "../drop-down";
import { STATIC_URL } from "@/asset/constant";
import quizbookAPI from "@common/lib/api/quizbook";

const QuizBook = ({ quizBook, isUserQuizBook }: QuizBookProps) => {
  const likeButton = useRef<HTMLDivElement>(null);
  const likeButton = useRef<HTMLImageElement>(null);
  const settingButton = useRef<HTMLImageElement>(null);
  const dropDownContainer = useRef<HTMLDivElement>(null);

  const [dropDown, setDropDown] = useState(false);
  const [likedCount, setLikedCount] = useState(quizBook.likedCount);
  const [liked, setLiked] = useState(quizBook.liked);

  const history = useHistory();
  const dispatch = useDispatch();

  const postQuizBookLike = async () => {
    const { likedCount, liked } = await quizbookAPI.postQuizBookLike(
      quizBook.id
    );
    setLikedCount(likedCount);
    setLiked(liked);
  };

  const onClick = async (e) => {
    if (e.target === likeButton.current) {
      try {
        postQuizBookLike();
      } catch (err) {
        console.error(err);
      }
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
    history.push(`/addquiz`);
    //TODO: 편집 문제 선택페이지
  };

  const deleteQuizBook = () => {
    const isDelete = confirm(
      "삭제 후 다시 복구할 수 없습니다. 정말 삭제하시겠어요?"
    );
    if (!isDelete) return;

    dispatch(deleteQuizBookAsync.request({ quizBookId: quizBook.id }));
    window.location.reload();
  };

  return (
    <S.QuizBookWrapper onClick={onClick}>
      <S.QuizBookRow height={4}>
        <S.QuizBookName>
          <S.QuizBoldText>{quizBook.title}</S.QuizBoldText>
        </S.QuizBookName>
        <S.QuizBookLike>
          <S.LikeIconWrapper>
            {liked == true ? (
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
          <S.QuizText bold>{likedCount}</S.QuizText>
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
  );
};

export default QuizBook;
