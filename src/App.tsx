import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Provider } from "./components/ui/provider";
import DataProvider from "./context/data-provider";
import HomePage from "./pages/homepage";
import Conversation from "./ui/conversation";
import { ToastContainer, Bounce } from "react-toastify";
import NotFoundPage from "./ui/not-found";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<HomePage />}>
      <Route path="/c/:conversationId" element={<Conversation />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>,
  ),
);
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <DataProvider>
          <Provider>
            <RouterProvider router={router} />
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick={true}
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
              transition={Bounce}
              toastStyle={{
                width: "auto",
                maxWidth: "400px",
                minWidth: "300px",
                borderRadius: "12px",
                right: "0px",
                top: "20px",
              }}
            />
          </Provider>
        </DataProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
