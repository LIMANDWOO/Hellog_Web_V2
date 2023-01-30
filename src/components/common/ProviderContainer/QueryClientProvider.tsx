import React from "react";
import {
  QueryClient,
  QueryClientProvider as ReactQueryClientProvicer,
} from "react-query";

interface Props {
  children: React.ReactNode;
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

const QueryClientProvider = ({ children }: Props) => {
  const [queryClient] = React.useState(queryClientInitializer);

  return (
    <ReactQueryClientProvicer client={queryClient}>
      {children}
    </ReactQueryClientProvicer>
  );
};

export default QueryClientProvider;
