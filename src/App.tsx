import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/homepage";
import MenuProvider from "./context/menu-provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "./components/ui/provider";
import Conversation from "./ui/conversation";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<HomePage />}>
      <Route index element={null} />
      <Route path=":conversationId" element={<Conversation />} />
    </Route>,
  ),
);
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <MenuProvider>
          <Provider>
            <RouterProvider router={router} />
          </Provider>
        </MenuProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
