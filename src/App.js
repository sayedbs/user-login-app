import {
  BrowserRouter as Router,
  Routes ,
  Route,
  Link
} from "react-router-dom";

import { Home } from "./pages/home/Home";
import { Login } from "./pages/login/Login";
import { NotFound } from "./pages/not-found/NotFound";
import { Signup } from "./pages/signup/Signup";

function App() {
  return (
    <>
      <h1>React app run successfully</h1>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signup">signup</Link>
              </li>
            </ul>
          </nav>

          <Routes >
            {/* <Route path="/admin/*" element={<AdminRoutes />} /> */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/not-found" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />

            {/* <Route path="/" element={import ('./pages/home/Home') } /> */}
            {/* <Route path="/topics">
              <Topics />
            </Route>
            <Route path="/">
              <Home />
            </Route> */}
          </Routes>

          </div>
      </Router>
    </>
  );
}

export default App;
