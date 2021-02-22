import styled from "styled-components";
import { QuizScoreProps } from "./types";

export const ScoreContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const DefaultCircle = styled.circle`
  fill: transparent;
  stroke: gray;
  stroke-width: 0.2rem;
`;

export const ProgressCircle = styled.circle`
  fill: transparent;
  stroke: #03c75a;
  stroke-width: 0.2rem;
  stroke-dasharray: ${(props: QuizScoreProps) =>
    `${props.percentage} ${100 - props.percentage}`};
  stroke-dashoffset: 25;
`;

export const CircleLabel = styled.g`
  transform: translateY(0.25em);
`;

export const Score = styled.text`
  font-size: 0.5rem;
  font-weight: bold;
  line-height: 1;
  text-anchor: middle;
  transform: translateY(-0.25rem);
`;

export const Text = styled.text`
  font-size: 0.4rem;
  font-weight: bold;
  text-anchor: middle;
  transform: translateY(0.25rem);
`;
