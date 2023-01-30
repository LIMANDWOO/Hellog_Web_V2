"use client";

import ProviderContainer from "@/components/common/ProviderContainer";

interface Props {
  children: React.ReactNode;
}

const RootLayout = ({ children }: Props) => {
  return (
    <html lang="ko">
      <body>
        <ProviderContainer>{children}</ProviderContainer>
        <div id="dialog" />
        <div id="modal" />
      </body>
    </html>
  );
};

export default RootLayout;
