import Image from "next/image";
import { useRouter } from "next/router";

interface Props {
  title: string;
  imgUrl: string;
  id: string;
}
export default function SearchResultBox({ title, imgUrl, id }: Props) {
  const router = useRouter();
  return (
    <div
      className="h-56 w-56  rounded-2xl cursor-pointer relative"
      onClick={() => {
        router.push(`${process.env.BASE_URL}/articles/${id}`);
      }}
    >
      <Image
        src={imgUrl}
        alt="Profile Pic"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 h-full w-full object-cover rounded-2xl"
      />
      <div className="absolute bottom-0 h-16 rounded-2xl backdrop-blur-lg w-full flex items-center justify-center overflow-scroll no-scrollbar font-Montserrat font-semibold text-xs">
        {title}
      </div>
    </div>
  );
}
