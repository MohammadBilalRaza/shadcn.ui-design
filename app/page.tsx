import Image from "next/image";
import Navbar from "./Components/Navbar";
import MobileNavbar from "./Components/MobileNavbar";
export default function Home() {
  return (
    <div>
   
       <div className="hidden lg:block">
       <Navbar/>
        </div>

      <div className="lg:hidden">
      <MobileNavbar/>
      </div>
       

      </div>
    
  );
}
;