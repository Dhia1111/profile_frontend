import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
  Outlet,
} from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works,Services } from "./components";

// Layout with Navbar shared across pages
const RootLayout = () => {
  return (
    <div className="relative z-0 bg-primary">
      <Navbar />
      <Outlet /> {/* Where child routes render */}
    </div>
  );
};

// Landing page (your current sections)
const LandingPage = () => {
  return (
    <>
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      <Feedbacks />
      <div className="relative z-0">
        <Contact />
      </div>
    </>
  );
};

// Services page (where you’ll put the pricing calculator later)
const ServicesPage = () => {
  return (
   
          <Services/>

  );
};

// Router setup
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<LandingPage />} />
      <Route path="services" element={<ServicesPage />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
