import { Provider } from "react-redux";
import Header from "./components/Header";
import Body from "./components/Body";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        {/* <Body /> */}
        <RouterProvider router={appRouter} />
      </Provider>
    </>
  );
}

export default App;

/* 
Head
Body
 SideBar
 Main
  ButtonList
  CardContainer
    Card
   



*/
