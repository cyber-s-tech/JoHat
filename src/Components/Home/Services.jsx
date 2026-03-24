import img1 from "../../assets/ellipse1.png";
import img2 from "../../assets/ellipse2.png";
import img3 from "../../assets/ellipse3.png";

export default function Services() {
  const data = [
    {
      img: img1,
      title: "APPLICATION & \nBROKER ASSISTANCE",
    },
    {
      img: img2,
      title: "CONSULTATION",
    },
    {
      img: img3,
      title: "PAPERWORK \nASSISTANCE",
    },
  ];

  return (
    <section className="max-w-[1440px] mx-auto relative px-5 md:px-10 lg:px-[235px] py-[60px] lg:py-[80px]">
      
      <div className="flex flex-col md:flex-row items-center justify-center gap-[60px] lg:gap-[150px]">
        
        {data.map((item, i) => (
          <div key={i} className="flex flex-col items-center text-center">
            
            {/* Outer Circle */}
            <div className="p-[10px] rounded-full border border-[#FACA51]">
              
              {/* Inner Image Circle */}
              <div className="w-[120px] h-[120px] lg:w-[150px] lg:h-[150px] rounded-full overflow-hidden flex items-center justify-center">
                <img
                  src={item.img}
                  alt="service"
                  className="w-full h-full object-cover"
                />
              </div>

            </div>

            {/* Title */}
            <p className="mt-5 text-base font-semibold xl:text-xl leading-snug font-medium whitespace-pre-line">
              {item.title}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}