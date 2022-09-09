import Blogs from "./Components/Blogs";
import BrandImage from "./Components/BrandImage";
import Feature from "./Components/Feature";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import HomeOutComponent1 from "./Components/HomeOutComponent1";
import HomeOutComponent2 from "./Components/HomeOutComponent2";
import NAvbar from "./Components/NAvbar";
import PortfolioImage from "./Components/PortfolioImage";
import ScrollToTOp from "./Components/ScrollToTOp";
import WorkingProcess from "./Components/WorkingProcess";

function App() {
  return (
    <>
    <NAvbar />
      <Header />
      <PortfolioImage />
      <BrandImage />
      <Feature />
      <WorkingProcess />
      <HomeOutComponent1 />
      <HomeOutComponent2 />
      <Blogs />
      <Footer />
      <ScrollToTOp />
    </>
  );
}

export default App;
