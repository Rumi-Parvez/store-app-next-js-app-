import Image from "next/image";
import Link from "next/link";
import { FaAppStoreIos } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";

import hero from "@/assets/hero.png";

const Hero = () => {
  return (
    <div className="  pt-15 flex justify-center items-center w-full">
      <div className=" m-auto flex flex-col justify-center items-center space-y-8 text-center">

        <h1 className="text-5xl font-bold">
          <span className="block">We Build</span>
          <span className="text-purple-500">Productive</span> Apps
        </h1>

        <p className="text-sm max-w-[580px]">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>

        <div className="flex gap-5">
          <Link href="">
            <button className="btn">
              <IoLogoGooglePlaystore />
              Google Play
            </button>
          </Link>

          <Link href="">
            <button className="btn">
              <FaAppStoreIos />
              App Store
            </button>
          </Link>
        </div>

        <div className="flex justify-center">
          <Image
            src={hero}
            className="h-100 w-auto"
            alt="Hero image"
          />
        </div>

      </div>
    </div>
  );
};

export default Hero;