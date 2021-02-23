import styled from "styled-components";
import { spin } from "@common/keyframe";

export const PointContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Point = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
`;

export const PointImg = styled.img`
  width: 1.7rem;
  height: 1.7rem;
  animation: ${spin} 1.5s linear infinite;
  margin: 0rem 0.8rem;
`;
