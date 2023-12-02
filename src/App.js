import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import ContactUs from "./Pages/ContactUs";
import Services from "./Pages/Services";
import Shop from "./Pages/Shop";
import Menu from "./Pages/Menu";


// layouts
import RootLayout from "./Routes/RootLayout";





const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home/>} />
      <Route path="/About" element={<About />} />
      <Route path="/Blog" element={<Blog />} />
      <Route path="/ContactUs" element={<ContactUs />} />
      <Route path="/Menu" element={<Menu />} />
      <Route path="/Services" element={<Services />} />
      <Route path="/Shop" element={<Shop />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
