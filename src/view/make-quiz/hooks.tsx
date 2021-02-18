import { useCallback, useState } from 'react';

import QuizRequestBody from './model/quiz-request-body';

export const useMakeQuiz = (quizBookId) => {
  // 업로드 기능 구현
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");
  const [description, setDescription] = useState("");
  const [isChoice, setIsChoice] = useState(true);
  const [isText, setIsText] = useState(true);

  const handleUpload = useCallback(async () => { 
    if (!question) {
      alert('문제를 입력해 주세요.');
      return;
    }
    if (!answer) {
      alert('답을 입력해 주세요.')
      return
    }
    if (!description) {
      alert('문제에 대한 설명을 입력해 주세요.');
      return;    
    }

    const response = await fetch(`http://localhost:3308/api/quiz-book/${quizBookId}/quiz`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(
        new QuizRequestBody(
          quizBookId,
          question,
          answer,
          option1,
          option2,
          option3,
          option4,
          description,
          isChoice
        ),
      ),
    });

    if (!response.ok) {
      console.log(await response.json());
      alert('문제 제출에 실패하였습니다.');
      return;
    }

    alert('문제 제출에 성공하였습니다.');
  }, [quizBookId, question, answer, option1, option2, option3, option4, description, isChoice]);
  
  return {
    question,
    setQuestion,
    answer,
    setAnswer,
    option1,
    setOption1,
    option2,
    setOption2,
    option3,
    setOption3,
    option4,
    setOption4,
    description,
    setDescription,
    isChoice,
    setIsChoice,
    isText,
    setIsText,
    handleUpload,
  };
};
