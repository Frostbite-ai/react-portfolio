import React from "react";

function Intro() {
  return (
    <div className="flex flex-col  items-center justify-center pb-5 pt-24 text-center">
      <h1 className="mb-2 text-4xl font-bold md:text-5xl">Vaibhav Meena</h1>
      <div className=" mb-3 text-lg opacity-90 md:text-2xl">
        Web Developer | Software Developer | Photographer
      </div>
      <p className=" mb-8 w-full max-w-3xl break-normal px-6 text-sm font-bold opacity-90 md:px-20 md:text-sm">
        Hey there! I'm Vaibhav Meena, a chilled-out sophomore at Netaji Subhas
        University of Technology (NSUT) Delhi, rockin' my B.Tech in Information
        Technology (IT). Whengap-10 I'm not acing my classes, I bring webpages
        to life and craft some killer software.
        <br />
        <div className="mb-1"> </div>
        Of course, I'm not just a code guru. I'm also a photography whiz! Catch
        me exploring Delhi like a stealthy shutterbug, seeking the perfect snap.
        Sure, you can call me a coding ninja by day and a photographic ninja by
        night. 😉 So, buckle up and let's get this party started!
      </p>
    </div>
  );
}

export default Intro;
