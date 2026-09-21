import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

import logo from "@/assets/logo.png"

export default function NavBar() {
    
    return (
        <>
        
        <div className=" sticky top-0 bg-white border-b border-gray-300 ">
            <div className=" px-10 py-4  flex justify-between items-center m-auto ">
                <div className="flex gap-2 items-center cursor-pointer  " >
                    <Link href="/" className="flex gap-2 items-center cursor-pointer "><Image src={logo} height={40} width={40} alt="Store APP logo"></Image>
                    <h1 className="font-bold text-1xl text-purple-600">Store APP</h1></Link>
                </div>

                <ul className="flex justify-between items-center gap-10">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/apps">App</Link></li>
                    <li><Link href="/installation">installation</Link></li>
                    
                </ul>
                <Link href=""><button className="btn bg-purple-700 text-white"><FaGithub />Contribute</button></Link>
            </div>
        </div>
        
        </>
    )
}