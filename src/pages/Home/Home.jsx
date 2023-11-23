import "../../App.css";
import * as solarIcons from "solar-icon-set";


// Solar Icon usage example :
// Must be imported first as any default value
import Main_Header from '../Header/Main_Header';
import NavCategory from "../NavCategory/NavCategory";
import MainSlider from "../MainSlider/MainSlider";
import PartsOfCategory from "../PartsOfCategory/PartsOfCategory";
import PartnerSection from "../PartnerSection/PartnerSection";
import Footer from './../Footer/Footer';

function Home() {
  return (
    <>
        <Main_Header/>
        <NavCategory/>
        <MainSlider/>
        <PartsOfCategory title = {"Kindergarten"} icon={<solarIcons.Backpack size={24} color="#28D8AE!important"  className="text-[#28D8AE]"/> }/>
        <PartsOfCategory title = {"Primary Education"} icon={<solarIcons.CaseMinimalistic size={24} color="#28D8AE"/>}/>
        <PartsOfCategory title = {"Preparatory Education"} icon={<solarIcons.CaseRound size={24} color="#28D8AE"/>}/>
        <PartsOfCategory title = {"General Books"} icon={<solarIcons.NotebookBookmark size={24} color="#28D8AE"/>}/>
        <PartnerSection/>
        <Footer/>


    </>
  );
}

export default Home;
