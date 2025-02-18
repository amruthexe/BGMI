import { useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";

const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef();

  const handleMouseMove = (e) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (e.clientX - left) / width;
    const relativeY = (e.clientX - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.98, 0.98, 0.98)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = (e) => {
    setTransformStyle("");
  };

  return (
    <div
      className={className}
      ref={itemRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

const BentoCard = ({ src, title, description }) => {
  return (
    <div className="relative size-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
          )}
        </div>
      </div>
      {title}
    </div>
  );
};

const Features = () => {
  return (
    <section className="bg-black text-center ">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
        <p className="font-circular-web text-lg text-blue-50 font-bold pb-4">
  🔥 WELCOME TO THE BGMI TOURNAMENT HUB! 🔥<br />
  BECTAGON 2K25
</p>

<p className="max-w-md font-circular-web text-lg text-left text-blue-50 ">
  🎮 Get ready to drop in, loot up, and dominate! 🏆<br />
  🚀 This is your official battlefield for all tournament updates, match schedules, and announcements!
</p>

<p className="max-w-md font-circular-web text-lg  text-left text-blue-50 ">
  ⚡ Stay tuned! Every update will be posted here first! ⚡
</p>

<p className="max-w-md font-circular-web text-lg  text-left text-blue-50">
  📌 <strong>Rules & Guidelines:</strong><br />
  ✔️ Play fair, play smart!<br />
  ✔️ Respect all players – it’s all about the game!<br />
  ✔️ Stay active for instant updates!
</p>

<p className="max-w-md font-circular-web text-lg  text-left text-blue-50 ">
  💥 Gear up, warriors! The battleground awaits! 💥
</p>

<p className="max-w-md font-circular-web text-lg text-blue-50  ">
  🔥 Let's GO! #WinnerWinnerChickenDinner 🍗🏆
</p>

<p className="max-w-md font-circular-web text-lg  text-blue-50 ">
  ➡️ First thing: Fill the form in the bio for registrations or use the link below:
</p>

<a
  href="https://forms.gle/v9GB7pPPDD5Hzx3a8"
  className="inline-block mt-4 px-6 py-3 bg-blue-500 text-white rounded-full text-center hover:bg-blue-600 transition duration-300"
  target="_blank"
  rel="noopener noreferrer"
>
  Registration Form
</a>

<p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50 mt-4">
  NOTE: For any queries, DM the admins—they will be in touch at any time ⌚
</p>

        </div>

        <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
  <BentoCard
    src="videos/videoplayback.mp4"
    title={
      <>
        BGMI <b>Tournament</b>
      </>
    }
    description="The ultimate battleground for teams and players, where strategy meets skill in the BGMI tournament"
  />
</BentoTilt>

<div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7">
  <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
    <BentoCard
      src="videos/videoplayback11.mp4"
      title={
        <>
          Team <b>Alpha</b>
        </>
      }
      description="A dedicated team prepared for the ultimate victory in the BGMI tournament."
    />
  </BentoTilt>
  <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
    <BentoCard
      src="videos/fast.mp4"
      title={
        <>
          Team <b>Bravo</b>
        </>
      }
      description="Another powerhouse team ready to dominate and claim the BGMI prize."
    />
  </BentoTilt>
  <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
    <BentoCard
      src="videos/fast2.mp4"
      title={
        <>
          Team <b>Charlie</b>
        </>
      }
      description="The underdog team with a fierce competitive edge in the BGMI tournament."
    />
  </BentoTilt>

  <BentoTilt className="bento-tilt_2">
    <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
      <h1 className="bento-title special-font max-w-64 text-black">
        M<b>o</b>re teams co<b>m</b>ing s<b>o</b>on!
      </h1>
      <TiLocationArrow className="m-5 scale-[5] self-end" />
    </div>
  </BentoTilt>

  <BentoTilt className="bento-tilt_2">
    <video
      src="videos/fast3.mp4"
      loop
      muted
      autoPlay
      className="size-full object-cover object-center"
    />
  </BentoTilt>
</div>

      </div>
    </section>
  );
};

export default Features;
