import Image from "next/image";
import { MainNavBarContainer, MainNavBarWrap } from "./style";
import HellogLogo from "@/assets/logo/HellogLogo.png";

const MainNavBar = () => {
  return (
    <MainNavBarContainer>
      <MainNavBarWrap>
        <Image src={HellogLogo} alt="hellog logo" height={45} />
      </MainNavBarWrap>
    </MainNavBarContainer>
  );
};

export default MainNavBar;
