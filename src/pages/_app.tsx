import ProviderContainer from "@/components/common/ProviderContainer";
import { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ProviderContainer pageProps={pageProps}>
      <Component {...pageProps} />
    </ProviderContainer>
  );
};

export default App;
