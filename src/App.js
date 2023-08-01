import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import Home from "./pages/Home";
import SuperHeroes from "./pages/SuperHeroes";
import RQSuperHeroes from "./pages/RQSuperHeroes";
import { ReactQueryDevtools } from "react-query/devtools";
import SuperHeroDetails from "./pages/SuperHeroDetails";
import ParallelQueries from "./pages/ParallelQueries";
import DynamicParallel from "./pages/DynamicParallel";
import DependentQueries from "./pages/DependentQueries";

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
          <Route
            path="/rq-super-heroes/:heroId"
            element={<SuperHeroDetails />}
          />
          <Route path="/rq-parallel" element={<ParallelQueries />} />
          <Route
            path="/rq-parallel-dynamic"
            element={<DynamicParallel heroIds={[1, 2]} />}
          />
          <Route
            path="/rq-dependent"
            element={<DependentQueries email="rania@example.com" />}
          />
        </Routes>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
