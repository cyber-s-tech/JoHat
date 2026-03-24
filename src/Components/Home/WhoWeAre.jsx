import React from "react";
import img1 from "../../assets/who-we-are-1.jpg";
import img2 from "../../assets/who-we-are-2.jpg";
import img3 from "../../assets/who-we-are-3.jpg";

const WhoWeAre = () => {
  return (
    <section className="bg-[#f4f1ee] py-20 lg:py-40 px-4">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-[60px] relative">

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-center lg:items-start">

          {/* LEFT IMAGE */}
          <div className="relative flex justify-center">
            <img
              src={img1}
              alt=""
              className="w-full max-w-[500px] lg:max-h-[555px] border-[3px] border-yellow-400"
            />

            {/* SMALL IMAGE */}
            <img
              src={img3}
              alt=""
              className="
                w-20 h-20 lg:w-28 lg:h-28 object-cover absolute
                -bottom-10 left-1/2 -translate-x-1/2
                lg:-bottom-20 lg:left-[200px] lg:translate-x-0
                border-4 border-white shadow-lg
              "
            />
          </div>

          {/* CENTER CONTENT */}
          <div className="max-w-[550px] text-center lg:text-left mt-4">
            <h5 className="uppercase tracking-widest text-[#1c1c1c] font-bold font-designer text-[26px] lg:text-[35px] mb-4">
              Who We Are
            </h5>

            <p className="mb-6 text-[#333333] font-semibold italic text-[18px] lg:text-[35px] leading-[28px] lg:leading-[45px] font-lato">
              Johat Enterprises is a trusted name in property investment funding
              solutions. Based in Williamsburg, Michigan, we specialize in
              connecting property investors with private lenders who understand
              their needs. Our expertise lies in identifying the right funding
              partners who can help our clients acquire, renovate, and sell
              properties for maximum profit.
            </p>

            <button className="px-6 py-2 border border-green-800 text-green-800 rounded-full hover:bg-black hover:text-white transition">
              Learn More About Us
            </button>
          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="
          flex justify-center mt-10
          lg:absolute lg:right-[60px] lg:-bottom-30 lg:mt-0
        ">
          <img
            src={img2}
            alt=""
            className="w-full max-w-[260px] lg:w-[300px] border-[3px] border-yellow-400"
          />
        </div>

      </div>
    </section>
  );
};

export default WhoWeAre;