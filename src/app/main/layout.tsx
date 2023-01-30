"use client";

import Flex from "@/components/common/Flex";
import MainNavBar from "@/components/common/NavBar/MainNavBar";
import "@/styles/reset.css";

interface Props {
  children: React.ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <Flex customStyle={{ width: "100%", height: "100vh" }} direction="column">
      <MainNavBar />
      {children}
    </Flex>
  );
};

export default MainLayout;
