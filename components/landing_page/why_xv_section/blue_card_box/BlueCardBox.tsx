import Image from "next/image";

const BlueCardBox = (props: any) => {
  return (
    <div className="w-[350px] max-w-full bg-[#171827] rounded-3xl p-5 flex-1">
      <div>
        <div className="text-white flex justify-center items-center self-center">
            <Image src={props.image} alt = 'card icon' width={85} height={80} />
        </div>
        <div className="text-white text-[32px] font-semibold text-center pt-6">{props.title}</div>
        <div className="text-[#E2E6E7] text-[14px] text-center font-normal leading-6 pt-3">{props.description}</div>
      </div>
    </div>
  );
};

export default BlueCardBox;
