import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { ImLinkedin2 } from "react-icons/im";

import logo from "@/assets/logo.png"

const Footer = () => {
    return (
        <div className="bg-blue-950 text-white py-5" >
            <div className="px-10 py-4  flex justify-between items-center m-auto border-b border-gray-400 mb-5 pb-10">
                <div  className="flex gap-2 items-center " >
                    <Image src={logo} height={40} width={40} alt="Store APP logo"></Image>
                    <h1 className="font-bold text-1xl text-white text-xl">Store APP</h1>
                </div>

                <div className="flex items-center gap-4
                ">
                    <Link href=""><FaGithub />
</Link>
                <Link href=""><ImLinkedin2 />
</Link>
                <Link href=""><FaXTwitter />
</Link>
                </div>

            </div>

            {/* mini footer  */}
            <div className="flex justify-center">
            <p className="text-[12px]">Copyright © 2026 - All right reserved</p>
            </div>
        </div>
    );
};

export default Footer;