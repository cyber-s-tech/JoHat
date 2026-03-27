import aboutbanner from "../../assets/aboutbanner.webp";

export default function Hero() {
    return (
        <section
            className="relative h-[390px] min-[360px]:h-[390px] md:h-[450px] lg:h-[520px] xl:h-[630px] w-full overflow-hidden bg-cover bg-center"
            style={{ backgroundImage: `url(${aboutbanner})` }}
        >
            {/* Overlay (optional for readability) */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col gap-3 md:gap-5 justify-center lg:justify-end md:items-center md:text-center text-white px-6 pt-20 lg:py-[100px] lg:pb-[100px]">

                {/* Subtitle */}
                <p className="text-sm min-[360px]:text-base md:text-[20px] font-bold leading-tight tracking-wide uppercase md:text-center">
                    ABOUT US
                </p>

                {/* Title */}
                <h1 className="text-xl min-[360px]:text-xl  min-[425px]:text-2xl md:text-4xl lg:text-[45px] leading-normal md:text-center font-designer">
                    BUILDING STRONG FOUNDATIONS <br className="hidden md:flex" />
                    FOR PROPERTY INVESTORS
                </h1>

                {/* NEW PARAGRAPH */}
                <p className="font-bold text-[14px] min-[360px]:text-[15px] md:text-[18px] lg:text-[20px] text-white leading-relaxed max-w-[900px]
        ">
                    At Johat Enterprises, we connect investors with the right funding solutions to help them grow, scale, and succeed in real estate.
                </p>



            </div>
        </section>
    );
}