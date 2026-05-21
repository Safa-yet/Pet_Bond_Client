import ExploreSec from "@/Component/Home Page/ExploreSec";
import HappyCoustomer from "@/Component/Home Page/HappyCoustomer";
import Hero from "@/Component/Home Page/Hero";
import PetCollection from "@/Component/Home Page/PetCollection";
import PetResource from "@/Component/Home Page/PetResource";
import ServiceSec from "@/Component/Home Page/ServiceSec";
import PetCard from "@/Component/Shared Ui/PetCard";


export default function Home() {
  return (
 <>
   <Hero></Hero>
   <PetCollection></PetCollection>
   <ServiceSec></ServiceSec>
   <ExploreSec></ExploreSec>
   <HappyCoustomer></HappyCoustomer>
   <PetResource></PetResource>
 </>
  );
}
