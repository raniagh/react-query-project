import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import Home from "./pages/Home";
import SuperHeroes from "./pages/SuperHeroes";
import RQSuperHeroes from "./pages/RQSuperHeroes";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/super-heroes">Traditional Super Heroes</Link>
            </li>
            <li>
              <Link to="/rq-super-heroes">RQ Super Heroes</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/super-heroes" element={<SuperHeroes />} />
          <Route path="/rq-super-heroes" element={<RQSuperHeroes />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
