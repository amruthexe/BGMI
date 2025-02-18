import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <h2 className="font-bold text-sm uppercase md:text-[10px]">
        Welcome to BECTAGON 2K25 🔥
        </h2>

        <AnimatedTitle
  title="Disc<b>o</b>ver the ultimate BGMI <br /> b<b>a</b>ttlefield!"
  containerClass="mt-5 !text-black text-center"
/>


        <div className="about-subtext pt-10">
        <p class="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl">The BGMI Tournament begins – your journey to victory starts now!</p>
<p class="text-center text-sm sm:text-base md:text-lg lg:text-xl">BECTAGON 2K25 unites players from all corners of the battlefield</p>


        </div>
      </div>
      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="img/bg.jpg"
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
