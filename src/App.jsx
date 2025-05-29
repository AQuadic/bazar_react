import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./components/general/Layout";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Providers from "./pages/Providers";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="categories" element={<Categories />} />
          <Route path="providers" element={<Providers />} />
          <Route path="signin" element={<SignIn />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
