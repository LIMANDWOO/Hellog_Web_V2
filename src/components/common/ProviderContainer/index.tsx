import { useState } from "react";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { SessionProvider } from "next-auth/react";
import { RecoilRoot } from "recoil";

interface Props {
  children: React.ReactNode;
  pageProps: any;
}

const queryClientInitializer = () => {
  const queryClient: QueryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        refetchOnWindowFocus: false,
      },
    },
  });

  return queryClient;
};

const ProviderContainer = ({ children, pageProps }: Props) => {
  const [queryClient] = useState(queryClientInitializer);

  return (
    <SessionProvider session={pageProps}>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <RecoilRoot>{children}</RecoilRoot>
        </Hydrate>
      </QueryClientProvider>
    </SessionProvider>
  );
};

export default ProviderContainer;
