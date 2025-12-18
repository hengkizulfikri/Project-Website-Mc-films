import "./App.css";
import NavigationBar from "./components/NavigationBar";
import ScrollToTop from "./components/ScrollToTop";
import Intro from "./components/Intro";
import Tentang from "./components/Tentang";
import Trending from "./components/Trending";
import Upcoming from "./components/Upcoming";

import "./style/landingPage.css";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      {/* intro section */}
      <div className="myBG">
        <ScrollToTop />
        <NavigationBar />
        <Intro />
      </div>
      {/* end of intro section */}

      {/* tentang section */}
      <div className="tentang">
        <Tentang />
      </div>
      {/* end of tentang section */}

      {/* trending section */}
      <div className="trending">
        <Trending />
      </div>
      {/* end of trending section */}

      {/* Upcoming section */}
      <div className="upcoming">
        <Upcoming />
      </div>
      {/* end of Upcoming section */}
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
