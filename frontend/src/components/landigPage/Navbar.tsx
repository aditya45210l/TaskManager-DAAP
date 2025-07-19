"use client"
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";
import { CustomConnectButton } from "../layout/CustomConnect";

const Navbar = () => {
  return (
    <header className="bg-darkest top-0 left-0 z-50 text-white">
      <nav className="h-full px-6 py-4 flex justify-between items-center border-b shadow border-gray-700">
        {/* Logo and Title */}
        <span className="flex items-center gap-2 min-w-fit justify-start">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#e3e3e3"
            >
              <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q65 0 123 19t107 53l-58 59q-38-24-81-37.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160q133 0 226.5-93.5T800-480q0-18-2-36t-6-35l65-65q11 32 17 66t6 70q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-56-216L254-466l56-56 114 114 400-401 56 56-456 457Z" />
            </svg>
          </span>
          <h2 className="font-bold">TaskChain</h2>
        </span>
        {/* Connect Button */}
        <span className="flex items-center gap-8 justify-end flex-1 ">
          <span className="hidden md:flex gap-6 ">
            <Link
              className="text-gray-300 hover:text-white text-sm font-medium leading-normal transition-colors"
              href="/"
            >
              Features
            </Link>
            <Link
              className="text-gray-300 hover:text-white text-sm font-medium leading-normal transition-colors"
              href="/"
            >
              About
            </Link>
            <Link
              className="text-gray-300 hover:text-white text-sm font-medium leading-normal transition-colors"
              href="/"
            >
              Support
            </Link>
          </span>
        <span className="flex items-center h-[39px] w-[158px]">
          {
            <ConnectButton chainStatus={"none"} showBalance={false}/>
            // <CustomConnectButton/>

          }
        </span>
        </span>
      </nav>
    </header>
  );
};
export default Navbar;
