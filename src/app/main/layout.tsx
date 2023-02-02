"use client";

import Flex from "@/components/common/Flex";
import MainNavBar from "@/components/common/NavBar/MainNavBar";

interface Props {
  children: React.ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <Flex
      customStyle={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#f3f5f7",
      }}
      direction="column"
    >
      <MainNavBar />
      {children}
    </Flex>
  );
};

export default MainLayout;
