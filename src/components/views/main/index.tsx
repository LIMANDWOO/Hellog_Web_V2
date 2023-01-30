"use client";

import PostCard from "@/components/common/PostCard";
import { MainContainer } from "./style";

const Main = () => {
  return (
    <MainContainer>
      <PostCard />
      <PostCard />
      <PostCard />
    </MainContainer>
  );
};

export default Main;
