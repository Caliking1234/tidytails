import React from "react";
import "../css/Home.css";
import Crousel from "./Crousel";

const Home = () => {
  return (
    <>
      <Crousel />
      <div className="main-home">
        <div className="card1">
          <h1 className="head">our vision</h1>Welcome to PetCare & Waste
          Management Solutions At PetCare & Waste Management Solutions, we are
          dedicated to making a difference in the lives of animals and our
          environment. Our mission is twofold: to rescue and rehabilitate
          animals in need and to promote responsible waste management practices
          for a cleaner, healthier planet.
        </div>
        <div className="card2">
          <h1 className="head"> Animal Rescue & Rehabilitation</h1>
          Every animal deserves a loving home and proper care. Through our
          animal rescue program, we strive to save animals from neglect, abuse,
          and homelessness. We rescue animals of all kinds, including dogs,
          cats, birds, and small mammals, providing them with medical attention,
          nourishment, and love.Browse through our gallery to see heartwarming
          stories and pictures of animals we've rescued and rehabilitated. From
          abandoned puppies to injured birds, each animal has a unique story of
          resilience and hope. If you're interested in adopting or fostering one
          of our rescued animals, we can help you find the perfect match through
          our network of reputable pet care centers and shelters
        </div>
        <div className="card2">
          <h1 className="head">Waste Management Awareness</h1>
          Effective waste management is crucial for preserving our environment
          and protecting wildlife. Through our waste management awareness
          initiatives, we raise awareness about the importance of proper waste
          disposal and recycling practices. Explore our gallery of garbage
          hotspots to see firsthand the impact of irresponsible waste disposal
          on our communities. From littered parks to polluted waterways, these
          images serve as a wake-up call to take action and make a difference.
          We collaborate with local authorities and community organizations to
          advocate for sustainable waste management solutions. By reporting
          garbage hotspots and promoting community clean-up efforts, we empower
          individuals to take proactive steps towards a cleaner, greener future.
        </div>
        <div className="card2">
          <h1 className="head">Join Us in Making a Difference</h1>
          Whether you're passionate about animal welfare or environmental
          conservation, there are many ways you can get involved with PetCare &
          Waste Management Solutions. Volunteer your time at our animal rescue
          center, participate in community clean-up events, or make a donation
          to support our programs and initiatives. Together, we can create a
          world where animals are treated with compassion and respect, and where
          our planet is cherished and protected for future generations. Join us
          on our journey towards a brighter, more sustainable future
        </div>
        <div className="peom">
          in alleys dim where shadows creep,
          <br />
          Street animals roam, lost in sleep, Among the waste, they search for a
          meal, <br />
          Their silent cries, the city's appeal. Through bins they sift, with
          wary eyes, Their hunger speaks, no sweet goodbyes, Yet hope still
          flickers,
          <br />
          in hearts so pure, For kindness found, a gentle lure. In streets where
          chaos reigns supreme, <br />
          A different scene, a different dream, Hands reach out with love to
          share, To heal the broken, to show we care.
          <br />
          With every can, every stray, We pave a path, a brighter day, For waste
          management and rescue blend, <br />
          To guide these souls, until the end. So let us vow, with hearts
          aflame, To cherish all, no soul to blame, In waste and streets, let
          love ignite, And lift them up, into the light.
        </div>
      </div>
    </>
  );
};

export default Home;
