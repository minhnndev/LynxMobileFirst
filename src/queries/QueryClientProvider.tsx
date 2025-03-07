import { useRef, useEffect, useState } from "@lynx-js/react";

import {
  persistQueryClient,
  type PersistQueryClientOptions,
} from "@tanstack/react-query-persist-client";

import {
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
  const [isRestoring, setIsRestoring] = useState(true);
  const refs = useRef({ persistOptions, onSuccess });

  useEffect(() => {
    refs.current = { persistOptions, onSuccess };
  });

  useEffect(() => {
    let isStale = false;
    setIsRestoring(true);
    const { persistOptions } = refs.current;
    if (!persistOptions?.persister) {
      throw new Error("PersistQueryClientProvider: persister is required");
    }
    const [unsubscribe, promise] = persistQueryClient({
      ...persistOptions,
      queryClient: client,
    });

    promise.then(() => {
      if (!isStale) {
        refs.current.onSuccess?.();
        setIsRestoring(false);
      }
    });

    return () => {
      isStale = true;
      unsubscribe();
    };
  }, [client]);

  return (
    <QueryClientProvider client={client} {...props}>
      <IsRestoringProvider value={isRestoring}>{children}</IsRestoringProvider>
    </QueryClientProvider>
  );
};
