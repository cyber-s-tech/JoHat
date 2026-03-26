import img1 from "../../assets/ellipse1.png";
import img2 from "../../assets/ellipse2.png";
import img3 from "../../assets/ellipse3.png";
 
export default function Services() {
  const data = [
    {
      img: img1,
      title: "APPLICATION & BROKER ASSISTANCE",
    },
    {
      img: img2,
      title: "CONSULTATION",
    },
    {
      img: img3,
      title: "PAPERWORK ASSISTANCE",
    },
  ];
 
  return (
    <>
      <style>
        {`
        @keyframes heartbeat {
          0% { transform: scale(1); opacity: 1; }
          25% { transform: scale(1.08); opacity: 0.8; }
          50% { transform: scale(1.12); opacity: 0.5; }
          75% { transform: scale(1.08); opacity: 0.8; }
          100% { transform: scale(1); opacity: 1; }
        }
 
        @keyframes ripple {
          0% {
            transform: scale(1);
            opacity: 0.5;
          }
          100% {
            transform: scale(1.3);
            opacity: 0;
          }
        }
      `}
      </style>
 
      <section className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 py-12 overflow-hidden">
       
        {/* ✅ ALWAYS HORIZONTAL */}
        <div className="flex justify-between items-center gap-4 md:gap-8 lg:gap-12">
         
          {data.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center flex-1 min-w-0"
            >
             
              {/* Circle */}
              <div className="relative flex items-center justify-center">
 
                <div className="relative
                  w-[90px] h-[90px]
                  sm:w-[110px] sm:h-[110px]
                  md:w-[130px] md:h-[130px]
                  lg:w-[160px] lg:h-[160px]">
 
                  {/* Ripple */}
                  <div
                    className="absolute w-full h-full rounded-full border border-[#FACA51]"
                    style={{ animation: "ripple 2s infinite" }}
                  ></div>
 
                  <div
                    className="absolute w-full h-full rounded-full border border-[#FACA51]"
                    style={{ animation: "ripple 2s infinite 0.8s" }}
                  ></div>
 
                  {/* Heartbeat */}
                  <div
                    className="absolute w-full h-full rounded-full border-2 border-[#FACA51]"
                    style={{ animation: "heartbeat 2s infinite" }}
                  ></div>
 
                  {/* Image */}
                  <div className="absolute inset-0 m-auto
                    w-[60px] h-[60px]
                    sm:w-[75px] sm:h-[75px]
                    md:w-[95px] md:h-[95px]
                    lg:w-[110px] lg:h-[110px]
                    rounded-full overflow-hidden z-10">
 
                    <img
                      src={item.img}
                      alt="service"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
 
              {/* Title */}
              <p className="mt-4 text-[10px] sm:text-xs md:text-sm lg:text-base font-semibold leading-tight px-1">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
 