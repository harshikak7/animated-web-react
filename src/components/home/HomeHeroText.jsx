import React from "react";
import Video from "./Video";

const HomeHeroText = () => {
  return (
    <section className="flex-1 flex items-center justify-center">

      <div className="text-white text-center font-[font1] uppercase">

        <h1 className="text-[clamp(3rem,8vw,9rem)] leading-[0.9]">
          L'étincelle
        </h1>

        <div className="flex justify-center items-center leading-[0.9]">

          <span className="text-[clamp(3rem,8vw,9rem)]">
            Qui
          </span>

          <div className="mx-3 rounded-full overflow-hidden
            w-[clamp(90px,13vw,220px)]
            h-[clamp(55px,7vw,130px)]">

            <Video />

          </div>

          <span className="text-[clamp(3rem,8vw,9rem)]">
            Génère
          </span>

        </div>

        <h1 className="text-[clamp(3rem,8vw,9rem)] leading-[0.9]">
          La Créativité
        </h1>

      </div>

    </section>
  );
};

export default HomeHeroText;