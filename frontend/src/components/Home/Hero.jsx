import { useEffect, useState } from "react";
import { Particles } from "@/components/ui/particles";

export function Hero() {
  const [color, setColor] = useState("#2C7873");

  useEffect(() => {
    setColor("#2C7873");
  }, []);

  return (
    <section className="relative w-full h-[500px] overflow-hidden bg-[#faf7f2]">
      
      {/* Changed max-w-7xl to w-full to remove side gaps */}
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-6 text-center">
      <h1 className="font-['Montserrat'] font-extrabold tracking-tight leading-tight">
          
          {/* First Half: Roots/Stability Color */}
          <span className="block text-3xl md:text-5xl lg:text-6xl text-[#E67E22] mb-2 md:mb-4">
            Stability for those who raised us,
          </span>
          
          {/* Second Half: Wings/Future Color */}
          <span className="block text-3xl md:text-5xl lg:text-6xl text-[#2C7873]">
            Wings for those who will lead us.
          </span>
          
        </h1>
      </div>

      <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />
    </section>
  );
}