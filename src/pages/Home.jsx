import "../App.css";
// Solar Icon usage example :
// Must be imported first as any default value
import * as SolarIcon from "solar-icon-set";

function Home() {
  return (
    <>
      <div className="parent-logo">
        <span id="method" className="w-20 h-[4.5rem] "></span> <h1 className="text-8xl">Mojanad</h1>
      </div>
      <p className="mt-5 text-3xl text-red-700">
        All is done!
        {/* use our object and  get the icon : for example if i want th icon "ShieldCheck" */}
        <SolarIcon.ShieldCheck color="rgb(76 175 80  )" size={20} className="ms-1" />
      </p>
    </>
  );
}

export default Home;
