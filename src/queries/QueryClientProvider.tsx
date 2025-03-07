import { type PersistQueryClientOptions } from "@tanstack/react-query-persist-client";

import {
  useIsRestoring,
  QueryClientProvider,
  IsRestoringProvider,
  type QueryClientProviderProps,
} from "@tanstack/react-query";

export type PersistQueryClientProviderProps = QueryClientProviderProps & {
  persistOptions?: Omit<PersistQueryClientOptions, "queryClient">;
  onSuccess?: () => void;
};

export const PersistQueryClientProvider = ({
  client,
  children,
  persistOptions,
  onSuccess,
  ...props
}: PersistQueryClientProviderProps): JSX.Element => {
  const isRestoring = useIsRestoring();

  return (
    <QueryClientProvider client={client} {...props}>
      <IsRestoringProvider value={isRestoring}>{children}</IsRestoringProvider>
    </QueryClientProvider>
  );
};
