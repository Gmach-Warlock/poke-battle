import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import "./App.css";
import Root from "./Root";
import Home from "./pages/Home/Home";
import Config from "./pages/Config/Config";
import Arena from "./pages/Arena/Arena";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/config" element={<Config />} />
        <Route path="/arena" element={<Arena />} />
      </Route>,
    ),
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
