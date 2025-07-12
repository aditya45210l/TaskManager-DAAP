
import { CustomConnectButton } from "@/components/layout/CustomConnect";
import Image from "next/image";
import Link from "next/link";

const Page = () => {


  return (
    <div className="mx-auto flex flex-col items-center text-white bg-200">
      {/* Hero Section */}
      <section
        className="flex  items-center justify-center min-h-full w-full py-24 bg-cover bg-no-repeat bg-center "
        style={{
          backgroundImage:
            "linear-gradient(rgba(19, 26, 32, 0.8) 0%, rgba(19, 26, 32, 1) 100%),url(/landing/image.png)",
        }}
      >
        <div className="flex flex-col items-center justify-center text-center p-8 gap-3 max-w-3xl">
          <h1 className=" tracking-tighter md:text-6xl text-5xl font-black">
            Decentralized Task Management
          </h1>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
            Manage your tasks securely and transparently with TaskChain, the
            blockchain-based task manager built for the future of work.
          </p>
<span className="flex items-center h-[39px] w-[158px]">
            <Link href={"/dashboard"} className="btn-primary h-full bg-medium-dark border-2 border-blue-btn rounded-md  transition-all active:scale-90 text-sm flex items-center justify-center gap-2">
            Launch App
          </Link>
</span>
        </div>
      </section>
      {/* Features Section */}
      <section className="  w-full px-4 bg-medium-dark">
        {/* Why TaskChain? Container*/}
        <div className="mx-auto gap-12 flex flex-col max-w-5xl md:py-24 py-16">
          {/* Why TaskChain? Header */}
          <div className=" text-center gap-4">
            <h2 className=" text-4xl md:text-5xl font-black tracking-tighter leading-tight">
              Why TaskChain?
            </h2>
            <p className="md:text-xl mx-auto text-lg text-gray-300 leading-relaxed max-w-2xl">
              TaskChain offers a suite of powerful features designed to
              revolutionize your productivity and collaboration, all powered by
              the security of blockchain.
            </p>
          </div>
          {/* Card Container */}
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8 gap-6">
            {/* Card 1 */}
            <div className="border rounded-xl border-[#3a4d5f] bg-[#1d262f] p-6 hover:border-[#347fca] shadow-lg flex-col gap-4 transition-all flex flex-1 ">
              <div className="size-12 rounded-full flex justify-center items-center bg-[#347fca]/20 p-3">
                <span className="text-[#347fca] text-7xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#347fca"
                  >
                    <path d="M480-80q-139-35-229.5-159.5T160-516v-244l320-120 320 120v244q0 152-90.5 276.5T480-80Zm0-84q104-33 172-132t68-220v-189l-240-90-240 90v189q0 121 68 220t172 132Zm0-316Z" />
                  </svg>
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="text-xl font-bold">Secure &amp; Transparent</h2>
                <p className="text-gray-400 text-left text-base leading-relaxed">
                  Immutable records on the blockchain ensure your task data is
                  tamper-proof and always verifiable.
                </p>
              </div>
            </div>
            {/* Card 2 */}
            <div className="border rounded-xl border-[#3a4d5f] bg-[#1d262f] p-6 hover:border-[#347fca] shadow-lg flex-col gap-4 transition-all flex flex-1 ">
              <div className="size-12 rounded-full flex justify-center items-center bg-[#347fca]/20 p-3">
                <span className="text-[#347fca] text-7xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#347fca"
                  >
                    <path d="m280-80 160-300-320-40 480-460h80L520-580l320 40L360-80h-80Zm222-247 161-154-269-34 63-117-160 154 268 33-63 118Zm-22-153Z" />
                  </svg>
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="text-xl font-bold">Efficient Workflow</h2>
                <p className="text-gray-400 text-left text-base leading-relaxed">
                  Streamline your processes with intuitive task management tools
                  designed for speed and clarity.
                </p>
              </div>
            </div>
            {/* Card 3 */}
            <div className="border rounded-xl border-[#3a4d5f] bg-[#1d262f] p-6 hover:border-[#347fca] shadow-lg flex-col gap-4 transition-all flex flex-1 ">
              <div className="size-12 rounded-full flex justify-center items-center bg-[#347fca]/20 p-3">
                <span className="text-[#347fca] text-7xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#347fca"
                  >
                    <path d="M0-240v-63q0-43 44-70t116-27q13 0 25 .5t23 2.5q-14 21-21 44t-7 48v65H0Zm240 0v-65q0-32 17.5-58.5T307-410q32-20 76.5-30t96.5-10q53 0 97.5 10t76.5 30q32 20 49 46.5t17 58.5v65H240Zm540 0v-65q0-26-6.5-49T754-397q11-2 22.5-2.5t23.5-.5q72 0 116 26.5t44 70.5v63H780Zm-455-80h311q-10-20-55.5-35T480-370q-55 0-100.5 15T325-320ZM160-440q-33 0-56.5-23.5T80-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T160-440Zm640 0q-33 0-56.5-23.5T720-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T800-440Zm-320-40q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-600q0 50-34.5 85T480-480Zm0-80q17 0 28.5-11.5T520-600q0-17-11.5-28.5T480-640q-17 0-28.5 11.5T440-600q0 17 11.5 28.5T480-560Zm1 240Zm-1-280Z" />
                  </svg>
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="text-xl font-bold">Seamless Collaboration</h2>
                <p className="text-gray-400 text-left text-base leading-relaxed">
                  Collaborate with your team on shared projects with transparent
                  task delegation and progress tracking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Loved by Users*/}
      <section>
        <div className="mx-auto gap-12 flex flex-col max-w-5xl md:py-24 py-16">
          {/* Loved by Users Header */}
          <div className=" text-center gap-4">
            <h2 className=" text-4xl md:text-5xl font-black tracking-tighter leading-tight">
              Loved by Users
            </h2>
            <p className="md:text-xl mx-auto text-lg text-gray-300 leading-relaxed max-w-2xl">
              TaskChain offers a suite of powerful features designed to
              revolutionize your productivity and collaboration, all powered by
              the security of blockchain.
            </p>
          </div>
          {/* Card Container */}
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8 gap-6">
            {/* Card 1 */}
            <div className="border rounded-xl border-[#3a4d5f] bg-[#1d262f] p-6 hover:border-[#347fca] shadow-lg flex-col gap-4 transition-all flex flex-1 ">
              <div className="flex flex-row justify-start gap-4">
                <div className="size-12 rounded-full flex justify-center items-center">
                  <Image
                    src="/landing/nft.png"
                    alt="avtar"
                    className="rounded-full"
                    width={42}
                    height={42}
                  />
                </div>
                <div>
                  <p className="font-black leading-relaxed tracking-wide">
                    Aditya
                  </p>
                  <p className="text-xs text-gray-400 leading-relaxed tracking-wide font-semibold">
                    Software Engeiner
                  </p>
                </div>
              </div>
              <p className="text-gray-400 text-left text-base leading-relaxed font-">
                &quot;Immutable records on the blockchain ensure your task data
                is tamper-proof and always verifiable.&quot;
              </p>
            </div>
            {/* Card 2 */}
            <div className="border rounded-xl border-[#3a4d5f] bg-[#1d262f] p-6 hover:border-[#347fca] shadow-lg flex-col gap-4 transition-all flex flex-1 ">
              <div className="flex flex-row justify-start gap-4">
                <div className="size-12 rounded-full flex justify-center items-center">
                  <Image
                    src="/landing/nft.png"
                    alt="avtar"
                    className="rounded-full"
                    width={42}
                    height={42}
                  />
                </div>
                <div>
                  <p className="font-black leading-relaxed tracking-wide">
                    Aditya
                  </p>
                  <p className="text-xs text-gray-400 leading-relaxed tracking-wide font-semibold">
                    Software Engeiner
                  </p>
                </div>
              </div>
              <p className="text-gray-400 text-left text-base leading-relaxed font-">
                &quot;Immutable records on the blockchain ensure your task data
                is tamper-proof and always verifiable.&quot;
              </p>
            </div>
            {/* Card 3 */}
            <div className="border rounded-xl border-[#3a4d5f] bg-[#1d262f] p-6 hover:border-[#347fca] shadow-lg flex-col gap-4 transition-all flex flex-1 ">
              <div className="flex flex-row justify-start gap-4">
                <div className="size-12 rounded-full flex justify-center items-center">
                  <Image
                    src="/landing/nft.png"
                    alt="avtar"
                    className="rounded-full"
                    width={42}
                    height={42}
                  />
                </div>
                <div>
                  <p className="font-black leading-relaxed tracking-wide">
                    Aditya
                  </p>
                  <p className="text-xs text-gray-400 leading-relaxed tracking-wide font-semibold">
                    Software Engeiner
                  </p>
                </div>
              </div>
              <p className="text-gray-400 text-left text-base leading-relaxed">
                &quot;Immutable records on the blockchain ensure your task data
                is tamper-proof and always verifiable.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* CTA -> call to actions section */}
      <section className="w-full bg-medium-dark">
        <div className="flex flex-col gap-6 mx-auto md:py-24 py-16 max-md:px-5 max-w-3xl">
          <h2 className="md:text-5xl text-4xl font-black leading-tight text-center ">
            {" "}
            Ready to Take Control of Your Tasks?
          </h2>
          <p className="text-center leading-relaxed text-gray-300 tracking-wide self-center">
            Join thousands of users who trust TaskChain for secure, transparent,
            and efficient task management. Get started today and experience the
            future of productivity.
          </p>
          <span className="inline mx-auto">
            <CustomConnectButton/>
          </span>
        </div>
      </section>
      <footer className="w-full flex items-center justify-between  py-8 px-16 text-xs text-gray-300 leading-relaxed tracking-wide ">
        <div className="flex items-center gap-1 min-w-fit justify-start">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              viewBox="0 -960 960 960"
              width="20px"
              fill="#e3e3e3"
            >
              <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q65 0 123 19t107 53l-58 59q-38-24-81-37.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160q133 0 226.5-93.5T800-480q0-18-2-36t-6-35l65-65q11 32 17 66t6 70q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-56-216L254-466l56-56 114 114 400-401 56 56-456 457Z" />
            </svg>
          </span>
          <h2 className="font-bold">TaskChain</h2>
        </div>
        <div className="flex gap-4">
          <Link
            href={"/"}
            className="cursor-pointer transition-all hover:text-gray-400"
          >
            Privacy Policy
          </Link>
          <Link
            href={"/"}
            className="cursor-pointer transition-all hover:text-gray-400"
          >
            Terms of Service
          </Link>
          <Link
            href={"/"}
            className="cursor-pointer transition-all hover:text-gray-400"
          >
            Contact Us
          </Link>
        </div>
        <div>@ 2024 TaskChain. All rights reserved.</div>
      </footer>
    </div>
  );
};
export default Page;
