import moment from "moment";
import { AiFillEye } from "react-icons/ai";
import { BiTime } from "react-icons/bi";
interface Props {
  viewCount: number;
  publishTime: string;
  classNameProp?: string;
}

export default function ViewsTime({ viewCount, publishTime, classNameProp = "" }: Props) {
  return (
    <div
      style={{ color: "#fff" }}
      className={`${classNameProp} shadow rounded-full shadow-black bg-primary-background-700 mt-1 p-[3px] px-[10px] flex justify-center items-center`}
    >
      <AiFillEye style={{ opacity: ".5", marginLeft: "0vh" }} size={12} className="mx-1" />
      {viewCount} views
      <BiTime style={{ opacity: ".5", marginLeft: "2vh" }} size={12} className="mx-1" />
      {moment.utc(publishTime).local().startOf("seconds").fromNow()}
    </div>
  );
}
