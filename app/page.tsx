import Image from "next/image";
import { STREAMING_SERVICES } from "@/lib/constants";
import ServicesCard from "./components/ServicesCard";
export default function Home() {

  return (
    <div className="flex flex-col items-center justify-center">
     <h1 className="text-3xl font-bold pt-5">Your Services</h1>
     <p className="text-lg text-gray-600 px-10" >Pick the streaming services you have access to. We&apos;ll only recommend things you can actually watch</p>
      <div className="justify-center px-8 py-8 grid grid-rows-2 grid-cols-4 gap-6 place-items-center">
       {STREAMING_SERVICES.map(service => {
        return <ServicesCard key={service.id} id={service.id} title={service.name} image={service.image} color={service.color} letter={service.letter} />

        
       })}
      </div>
      <button className="bg-gold text-base-bg tracking-widest font-bold py-2 px-8 rounded max-w-full ">
        Let&apos;s find something   -&gt;
      </button>
    </div>  
  );
}
