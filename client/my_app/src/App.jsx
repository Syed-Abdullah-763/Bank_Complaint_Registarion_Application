import { Route, Routes } from "react-router-dom";
import PublicRoute from "./routes/public";
import PrivateRoute from "./routes/private";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import SignUpPage from "./pages/signup";

function App() {
  return (
    <>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route index element={<HomePage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>

        <Route element={<PrivateRoute />}></Route>
      </Routes>
    </>
  );
}

export default App;
