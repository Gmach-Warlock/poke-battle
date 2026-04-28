import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import Root from "./Root";
import Home from "./pages/Home/Home";
import Config from "./pages/Config/Config";
import Arena from "./pages/Arena/Arena";
import "./App.scss";
import "./Theme.scss";
import Confirm from "./pages/Confirm/Confirm";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/config" element={<Config />} />
        <Route path="/confirm" element={<Confirm />} />
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
