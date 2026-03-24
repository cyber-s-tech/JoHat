import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const HomeownerStories = () => {
  const [data, setData] = useState([]);
  const swiperRef = useRef(null);

  // 👉 Fetch image by ID
  const getImageById = async (id) => {
    try {
      const res = await fetch(
        `https://johat.ahaanmedia.com/wp-json/wp/v2/media/${id}`
      );
      const img = await res.json();
      return img.source_url;
    } catch (err) {
      console.log(err);
      return "";
    }
  };

  // 👉 Fetch testimonials
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://johat.ahaanmedia.com/wp-json/wp/v2/testimonials"
      );
      const testimonials = await res.json();

      const finalData = await Promise.all(
        testimonials.map(async (item) => {
          const clientImg = await getImageById(item.acf.client_image);
          const propertyImg = await getImageById(item.acf.property_image);

          return {
            id: item.id,
            description: item.acf.description,
            name: item.acf.client_name,
            designation: item.acf.designation,
            clientImg,
            propertyImg,
          };
        })
      );

      setData(finalData);
    };

    fetchData();
  }, []);

  return (
    <section className="bg-[#f4f1ee] py-24 px-4">
      <div className="max-w-[1300px] mx-auto">

        {/* TITLE */}
        <h2 className="uppercase tracking-widest text-2xl font-bold mb-12">
          Homeowner Stories
        </h2>

        {/* SWIPER */}
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>

              <div className="grid lg:grid-cols-2 gap-12 items-center">

                {/* LEFT IMAGE */}
                <div className="border border-[#d4af37] p-3">
                  <img
                    src={item.clientImg}
                    alt="client"
                    className="w-full h-[420px] object-cover"
                  />
                </div>

                {/* RIGHT CONTENT */}
                <div>

                  {/* PROPERTY IMAGE */}
                  <div className="border border-[#d4af37] p-3 mb-6">
                    <img
                      src={item.propertyImg}
                      alt="property"
                      className="w-full h-[250px] object-cover"
                    />
                  </div>

                  {/* DESCRIPTION */}
                  <p className="text-[#6b6b6b] leading-[28px] text-[15px] mb-6">
                    {item.description}
                  </p>

                  {/* NAME + ARROWS */}
                  <div className="flex justify-between items-center">

                    <div>
                      <h4 className="font-bold uppercase tracking-wide text-[16px]">
                        {item.name}
                      </h4>
                      <p className="text-sm text-gray-400 mt-1">
                        {item.designation}
                      </p>
                    </div>

                    {/* CUSTOM ARROWS */}
                    <div className="flex gap-3">
                      <button
                        onClick={() => swiperRef.current.slidePrev()}
                        className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100 transition"
                      >
                        ←
                      </button>
                      <button
                        onClick={() => swiperRef.current.slideNext()}
                        className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100 transition"
                      >
                        →
                      </button>
                    </div>

                  </div>

                </div>

              </div>

            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default HomeownerStories;