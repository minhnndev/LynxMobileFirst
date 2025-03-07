import { root } from "@lynx-js/react";

import { App } from "./App.js";

import { queryClient } from "./api/core/queryClient.js";
import { PersistQueryClientProvider } from "./queries/QueryClientProvider.jsx";

root.render(
  <PersistQueryClientProvider client={queryClient}>
    <App />
  </PersistQueryClientProvider>
);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
