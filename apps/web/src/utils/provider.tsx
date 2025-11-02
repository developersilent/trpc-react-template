import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { trpcClient } from "./trpc.ts";
import { useState } from "react";
import { httpBatchLink } from "@trpc/react-query";
import { SERVER_URL } from "../constants/env.ts";
import superjson from "superjson";

interface ReactChild {
  children: any;
}

export function TrpcProvider({ children }: ReactChild) {
  const [queryClient] = useState(() => new QueryClient());
  const [client] = useState(() =>
    trpcClient.createClient({
      links: [
        httpBatchLink({
          url: SERVER_URL,
          transformer: superjson,
        }),
      ],
    }),
  );
  return (
    <trpcClient.Provider client={client} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpcClient.Provider>
  );
}
