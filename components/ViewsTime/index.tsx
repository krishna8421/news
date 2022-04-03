import { AiOutlineEye, AiOutlineClockCircle } from "react-icons/ai";

interface Props {
  viewCount: number;
  publishTime: string;
}

export default function ViewsTime({ viewCount, publishTime }: Props) {
  return (
    <div
      style={{
        boxShadow:
          "calc(0.3vw + 0.3vh) calc(0.3vw + 0.3vh) calc(0.2vw + 0.2vh) 0px rgba(0,0,0,0.75)",
      }}
      className="bg-primary-background-500 rounded-full h-5 w-28 flex justify-around items-center"
    >
      <div className="flex items-center gap-2 text-[12px]">
        <AiOutlineEye />
        {viewCount}
      </div>
      <div className="flex items-center gap-2 text-[12px]">
        <AiOutlineClockCircle />
        {publishTime}
      </div>
    </div>
  );
}
