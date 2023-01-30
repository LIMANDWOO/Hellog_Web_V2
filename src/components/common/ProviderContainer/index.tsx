import { SessionProvider } from "next-auth/react";
import { RecoilRoot } from "recoil";
import QueryClientProvider from "./QueryClientProvider";
import StyledComponentsProvider from "./StyledComponentsProvider";

interface Props {
  children: React.ReactNode;
}

const ProviderContainer = ({ children }: Props) => {
  return (
    <SessionProvider>
      <QueryClientProvider>
        <RecoilRoot>
          <StyledComponentsProvider>{children}</StyledComponentsProvider>
        </RecoilRoot>
      </QueryClientProvider>
    </SessionProvider>
  );
};

export default ProviderContainer;
