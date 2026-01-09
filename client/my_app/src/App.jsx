import { Route, Routes } from "react-router-dom";
import PublicRoute from "./routes/public";
import PrivateRoute from "./routes/private";
import HomePage from "./pages/home";

function App() {
  return (
    <>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route index element={<HomePage />} />
        </Route>

        <Route element={<PrivateRoute />}></Route>
      </Routes>
    </>
  );
}

export default App;
