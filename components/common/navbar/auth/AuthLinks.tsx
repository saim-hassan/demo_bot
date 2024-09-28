import ConnectButton from "@/components/dashboard/navbar/connectWallet/ConnectButton";
import Button from "../Button";

const AuthLinks = () => {

  function handleClick () {
    console.log('clicked')
  }

  return (
    <>
      {/* <Button
        text="Sign Up"
        className="bg-white text-black font-bold rounded-lg px-4 py-2"
        onClick={() => handleClick()}
      />
      <Button
        text="Login"
        className="bg-transparent text-white font-bold border rounded-lg px-4 py-2"
        onClick={() => handleClick()}
      /> */}
      <ConnectButton />
    </>
  );
}

export default AuthLinks;