import Routers from "./routes/index.jsx";

import { queryClient } from "./api/core/queryClient.js";
import { PersistQueryClientProvider } from "./queries/QueryClientProvider.jsx";

export const App = () => {
  return (
    <PersistQueryClientProvider client={queryClient}>
      <Routers />
    </PersistQueryClientProvider>
  );
};
