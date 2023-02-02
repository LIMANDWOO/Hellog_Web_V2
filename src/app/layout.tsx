"use client";
import Providers from "@/components/common/Providers";
import "@/styles/reset.css";

interface Props {
  children: React.ReactNode;
}

const RootLayout = ({ children }: Props) => {
  return (
    <html lang="ko">
      <body>
        <Providers>{children}</Providers>
        <div id="dialog" />
        <div id="modal" />
      </body>
    </html>
  );
};

export default RootLayout;
