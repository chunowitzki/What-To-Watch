import Image from "next/image";
import { STREAMING_SERVICES } from "@/lib/constants";
import ServicesCard from "./components/ServicesCard";
export default function Home() {

  return (
    <div>
     <h1>Your Services</h1>
     <p>Pick the streaming services you have access to. We&apos;ll only recommend things you can actually watch</p>
      <div className="services-grid">
       {STREAMING_SERVICES.map(service => {
        return <ServicesCard key={service.id} id={service.id} title={service.name} image={service.image} color={service.color} letter={service.letter} />

        
       })}
      </div>
    </div>
  );
}
