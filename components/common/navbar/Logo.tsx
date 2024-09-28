import Image from "next/image"

const index = () => {
  return (
    <>
    <div>
        <Image src={'/logo.png'} alt="Logo-Image" width={100} height={60} />
    </div>
    </>
  )
}

export default index