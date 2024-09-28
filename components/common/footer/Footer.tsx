"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const onsubmit = () => {
    console.log("email sent");
  };

  return (
    <>
      {/* main div */}
      <div className="w-full bg-[#242534] py-[48px] px-[20px] tablet:px-[50px] laptop:px-[136px]">
        {/* content div */}
        <div className="mx-auto w-[1168px] max-w-full grid grid-cols-12 h-max">
        {/* <div className="flex bg-red-700 justify-start items-start w-[1168px] max-w-full px-[20px] md:px-[50px] lg:px-[136px] py-[48px] gap-5"> */}
          {/* first col */}
          <div className="pt-4 col-span-12 laptop:col-span-3">
            <div className=" flex justify-start items-center">
              <Image
                src={"/logo.png"}
                alt=""
                width={117}
                height={32}
                className="w-[117px] h-[32px]"
              />
            </div>
            <div>
              <p className="text-[12px] laptop:text-[14px] text-[#FAFAFA] font-normal leading-5 -tracking-[-0.28px]">
                Lorem ipsum dolor sit amet. Vel optio minima 33 quasi omnis a
                quisquam
              </p>
            </div>
          </div>
          {/* second col */}
          <div className="pt-4 col-span-4 laptop:col-span-2">
            <div className="flex pb-4">
              <p className="text-[16px] laptop:text-[18px] text-[#5C5D68] font-medium leading-6 tracking-[-0.36px]">
                Company
              </p>
            </div>
            <div className="flex flex-col justify-between items-start text-[14px] laptop:text-[16px] text-[#FAFAFA] font-medium leading-6 tracking-[-0.32px]">
              <Link href={"/"}>About</Link>
              <Link href={"/"}>Careers</Link>
              <Link href={"/"}>Legal</Link>
              <Link href={"/"}>Terms</Link>
              <Link href={"/"}>Privacy</Link>
              <Link href={"/"}>Community</Link>
            </div>
          </div>
          {/* third col */}
          <div className="pt-4 col-span-4 laptop:col-span-2">
            <div className="flex pb-4">
              <p className="text-[16px] laptop:text-[18px] text-[#5C5D68] font-medium leading-6 tracking-[-0.36px]">
                Services
              </p>
            </div>
            <div className="flex flex-col justify-between items-start text-[14px] laptop:text-[16px] text-[#FAFAFA] font-medium leading-6 tracking-[-0.32px]">
              <Link href={"/"}>Sniper Bot</Link>
              <Link href={"/"}>Sell Bot</Link>
              <Link href={"/dashboard"}>Control Panel</Link>
              <Link href={"/"}>Features</Link>
            </div>
          </div>
          {/* fourth col */}
          <div className="pt-4 col-span-4 laptop:col-span-2">
            <div className="flex pb-4">
              <p className="text-[16px] laptop:text-[18px] text-[#5C5D68] font-medium leading-6 tracking-[-0.36px]">
                Social
              </p>
            </div>
            <div className="flex flex-col justify-between items-start text-[14px] laptop:text-[16px] text-[#FAFAFA] font-medium leading-6 tracking-[-0.32px]">
              <Link href={"/"}>Instagram</Link>
              <Link href={"/"}>Facebook</Link>
              <Link href={"/"}>Twitter</Link>
              <Link href={"/"}>LinkedIn</Link>
            </div>
          </div>
          {/* fifth col */}
          <div className="pt-4 col-span-12 w-full laptop:col-span-3">
            <div className="flex pb-4 text-center w-full">
              <p className="text-[16px] laptop:text-[18px] text-[#5C5D68] font-medium leading-6 tracking-[-0.36px] mx-auto laptop:mx-0">
                Subscribe Newsletter
              </p>
            </div>
            <div className="flex flex-col justify-between items-start ">
              <p className="text-[12px] laptop:text-[14px] text-[#FAFAFA] font-normal leading-5 tracking-[-0.28px] text-center laptop:text-left">
                Lorem ipsum dolor sit amet. Vel optio minima 33 quasi omnis a
                quisquam
              </p>
            </div>
            <div className="pt-2 w-full flex justify-start items-start">
              <form onSubmit={onsubmit} className="w-full">
                <div className="flex justify-start items-start rounded-full bg-[#161627] py-[10px] px-4 w-full">
                  <div className="text-[#A1A1A1] text-[10px] laptop:text-[14px] font-medium leading-5 tracking-[-0.28px] w-full">
                    <input type="email" name="Email" placeholder="Enter the email address" className="bg-transparent outline-none  w-full"/>
                  </div>
                  <div className="flex justify-center items-center hover:translate-x-2 duration-300">
                    <button type="submit" className="">
                      <Icon
                        icon="material-symbols:send-outline"
                        width={20}
                        height={20}
                        color={"#A1A1A1"}
                        className="w-[16px] mt-[2px] laptop:mt-0 laptop:w-[20px] h-[16px]"
                      />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        </div>
    </>
  );
};

export default Footer;
