'use client'

import React from "react";
import Footer from "@/components/common/footer/Footer";
import Navbar from "@/components/common/navbar/Navbar";
import { Features, MoraleSection, WhyXVSection } from "@/components/landing_page";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Page:React.FC = () => {
  const {data: session} = useSession()
  const router = useRouter()
  return (
    <>
    {!session ? (
      <>
      <Navbar />
      <main className="w-full mt-16 laptop:mt-24">
        <MoraleSection />
        <WhyXVSection />
        <Features />
        <Footer />
      </main>
      </>
    ) : (
      <>
      {router.push('/dashboard')}
      </>
    )}
    </>
  );
}

export default Page;