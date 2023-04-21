import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppClient from "./App";

import { QueryClientProvider, QueryClient } from "react-query";

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <AppClient />
    </QueryClientProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
