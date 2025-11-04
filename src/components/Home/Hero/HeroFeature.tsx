import React from "react";
import Image from "next/image";


const HeroFeature = () => {
  return (
    <div className="max-w-[1060px] w-full mx-auto px-4 md:px-0 sm:px-8 xl:px-0">
      <div className="flex justify-between items-center gap-7.5 xl:gap-12.5 mt-10">
          <div className="flex justify-between items-center gap-4">
            <div>
              <div className='flex justify-center' >
                <Image src={'/images/icons/best-quality-icon.webp'} alt="icons" width={60} height={60} />
              </div>
              <h3 className="text-xl font-semibold text-red-dark text-center">Quality</h3>
              <p className="text-sm text-black text-center">100% Tested & Certified</p>
            </div>
          </div>
          <div className="flex justify-between items-center gap-4">
            <div>
              <div className='flex justify-center' >
                <Image src={'/images/icons/battery.png'} alt="icons" width={60} height={60} />
              </div>
              <h3 className="text-xl font-semibold text-red-dark text-center">Battery Life</h3>
              <p className="text-sm text-black text-center">10+ Years Lifespan</p>
            </div>
          </div>
          <div className="flex justify-between items-center gap-4">
            <div>
              <div className='flex justify-center' >
                <Image src={"/images/icons/solar.jpg"} alt="icons" width={60} height={60} />
              </div>
              <h3 className="text-xl font-semibold text-red-dark text-center">Solar Solutions</h3>
              <p className="text-sm text-black text-center">Future-Ready Power</p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default HeroFeature;
