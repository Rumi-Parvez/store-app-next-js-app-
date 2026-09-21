import Hero from "./components/hero";
import Populerapp from "./components/populerapp";
import Stats from "./components/status";

export default function Home() {
  return (
    <>
    <div className="container mx-auto">
      <Hero></Hero>
      <Stats></Stats>
      <Populerapp></Populerapp>
    </div>
    </>
  );
}
