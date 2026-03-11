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
      <>
        <Route path="/" element={<HomePage />}>
          <Route path=":conversationId" element={<Conversation />} />
        </Route>
      </>,
    ),
  );
  function App() {
    return (
      <>
        <MenuProvider>
          <Provider>
            <QueryClientProvider client={queryClient}>
              <RouterProvider router={router} />
            </QueryClientProvider>
          </Provider>
        </MenuProvider>
      </>
    );
  }

  export default App;
