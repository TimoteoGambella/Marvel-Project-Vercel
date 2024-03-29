import React from "react";
import HeroOptions from "../components/HeroOptions/HeroOptions";
import HeroText from "../components/HeroText/HeroText";
// import { UseApiContext } from "../context/ApiContext";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";

const Home = () => {
  // const {apiFetch1}=useContext(UseApiContext)

  // useEffect(() => {
  //     apiFetch1("https://odshjfdsfñsldfdsfsdf").then((res)=>{
  //         console.log(res)
  //     })
  // }, []);

  return (
    <div className="home-container">
      <NavBar />
      <div className="hero-container">
        <HeroText />
        <HeroOptions />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
