// import ConnectButton from "@/components/dashboard/navbar/connectWallet/ConnectButton";
// import AuthLinks from "./AuthLinks";

'use client'
import { signIn } from "next-auth/react";

const DesktopAuthLinks = () => {

  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()} className="text-white font-bold">Sign in</button>
    </>
  )
}

export default DesktopAuthLinks;