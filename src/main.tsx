import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { QueryParamProvider } from "use-query-params";
import { ReactRouter6Adapter } from "use-query-params/adapters/react-router-6";
import App from "@src/components/App"; // Import your main React component
import { ThemeProvider } from "@src/context/ThemeProvider";
import Layout from "@src/components/Layout";
import Details from "@src/components/Details";

const root = ReactDOM.createRoot(document.getElementById("root")!);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

root.render(
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <BrowserRouter>
        <QueryParamProvider adapter={ReactRouter6Adapter}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<App />} />
              <Route path="details/:id" element={<Details />} />
              <Route path="*" element={<div>no page</div>} />
            </Route>
          </Routes>
        </QueryParamProvider>
      </BrowserRouter>
    </ThemeProvider>
  </QueryClientProvider>
);
