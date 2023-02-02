import { ellipsisLine } from "@/styles/libStyle";
import styled from "styled-components";

export const PostCardContainer = styled.div`
  width: 384px;
  height: 478px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 18px;
  cursor: pointer;
`;

export const PostCardBannerContainer = styled.div`
  width: 384px;
  min-height: 230px;
  border-radius: 10px;
  overflow: hidden;
`;

export const PostCardLikeContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
`;

export const PostCardLikeIconWrap = styled.div`
  width: 15px;
  height: 15px;
  font-size: 15px;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PostCardLikeCount = styled.span`
  font-size: 15px;
  color: black;
`;

export const PostCardFrameContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 10px;
  padding: 25px 30px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

export const PostCardBottomContainer = styled.div`
  width: 100%;
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PostCardDateText = styled.span`
  font-size: 16px;
  color: #bcbcbc;
`;

export const PostCardTitleText = styled.h1`
  font-size: 26px;
  line-height: 30px;
  color: black;
  font-weight: bold;
  ${ellipsisLine(2)}
  word-break: keep-all;
`;

export const PostCardSummaryText = styled.p`
  font-size: 18px;
  line-height: 28px;
  color: #bdbdbd;
  ${ellipsisLine(3)}
  margin-top: 15px;
`;
