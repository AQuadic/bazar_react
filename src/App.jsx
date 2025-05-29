import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./components/general/Layout";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Providers from "./pages/Providers";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ForgetPassword from "./pages/ForgetPassword";
import ResetPassword from "./pages/ResetPassword";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="categories" element={<Categories />} />
          <Route path="providers" element={<Providers />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="forgetPassword" element={<ForgetPassword />} />
          <Route path="resetPassword" element={<ResetPassword />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
