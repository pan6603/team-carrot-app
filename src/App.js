import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Company from "./pages/company/company";
import Footer from "./components/footer/Footer";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Culture from "./pages/culture/culture";
import Service from "./pages/service/service";
import Blog from "./pages/blog/blog";
import Jobs from "./pages/jobs/jobs";


function App() {
  return (
    <>
      <Header />
          <Router>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/company" element={<Company />}/>
                  <Route path="/culture" element={<Culture />}/>
                  <Route path="/service" element={<Service />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/jobs" element={<Jobs />} />
              </Routes>
          </Router>
      <Footer />
    </>
  );
}

export default App;
