import "../../App.css";
// Solar Icon usage example :
// Must be imported first as any default value
import Main_Header from '../Header/Main_Header';
import NavCategory from "../NavCategory/NavCategory";
import MainSlider from "../MainSlider/MainSlider";

function Home() {
  return (
    <>
        <Main_Header/>
        <NavCategory/>
        <MainSlider/>

    </>
  );
}

export default Home;
