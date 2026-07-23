import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef, useState } from "react";

import balance from "../assets/images/balance.jpg";
import craft from "../assets/images/craft.jpg";
import detail from "../assets/images/detail.jpg";
import light from "../assets/images/light.jpg";
import minimalism from "../assets/images/minimalism.jpg";
import motion from "../assets/images/motion.png";
import typography from "../assets/images/typography.jpg";
import texture from "../assets/images/texture.png";

gsap.registerPlugin(ScrollTrigger);

const Agence = () => {
  const imageDivRef = useRef(null);
  const imageRef = useRef(null);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const imageArray = [
    balance,
    craft,
    detail,
    light,
    minimalism,
    motion,
    texture,
    typography,
  ];

  useGSAP(() => {
    if (isMobile) return;

    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        start: "top 28%",
        end: "top -70%",
        pin: true,
        pinSpacing: true,
        pinReparent: true,
        pinType: "transform",
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,

        onUpdate: (self) => {
          const index = Math.min(
            Math.floor(self.progress * imageArray.length),
            imageArray.length - 1
          );

          imageRef.current.src = imageArray[index];
        },
      },
    });

    return () => ScrollTrigger.getAll().forEach((st) => st.kill());
  }, [isMobile]);

  // ---------------- MOBILE ----------------

  if (isMobile) {
    return (
      <section className="min-h-screen bg-[#111] text-white flex items-center justify-center px-8">
        <div className="max-w-md text-center">

          <p className="uppercase tracking-[0.35em] text-neutral-500 text-sm">
            Desktop Experience
          </p>

          <h1 className="text-4xl font-[font2] mt-6 uppercase">
            Best Viewed on Desktop
          </h1>

          <p className="mt-6 text-neutral-400 leading-relaxed">
            This page features immersive GSAP animations and large typography
            designed for desktop viewing.
          </p>

          <p className="mt-3 text-neutral-500 text-sm">
            Please open this page on a laptop or desktop for the complete
            experience.
          </p>

        </div>
      </section>
    );
  }

  // ---------------- DESKTOP ----------------

  return (
    <div className="parent overflow-hidden">

      <div id="page1" className="py-1 h-full">

        <div
          ref={imageDivRef}
          className="absolute overflow-hidden lg:h-[20vw] h-[30vw] lg:w-[15vw] w-[25vw] lg:rounded-3xl rounded-xl lg:top-80 -top-70 lg:left-[30vw] left-[30vw]"
        >
          <img
            ref={imageRef}
            src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative font-[font2]">

          <div className="lg:mt-[50vh] mt-[30vh]">
            <h1 className="text-[20vw] text-center uppercase leading-[18vw]">
              Creative
              <br />
              Lifestyle
            </h1>
          </div>

          <div className="lg:pl-[40%] lg:mt-20 mt-4 p-3">
            <p className="lg:text-6xl text-xl leading-tight mb-20">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              Blending creativity, design, and technology to create digital
              experiences that are simple, engaging, and built to last. We craft
              digital experiences where creativity meets purpose, transforming
              ideas into designs that inspire and connect.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default Agence;