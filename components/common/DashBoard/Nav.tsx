import Image from "next/image";
import Avatar from "react-avatar";
// import Link from "next/link";

export default function Nav() {
  const testData = {
    pic : true,
    picLink : "https://avatars.githubusercontent.com/u/93767454?s=200&v=4"
  }

  return (
    <div className="h-16 bg-slate-900 flex justify-end px-3 bg-white items-center">
      {/*<Link href="/" passHref>*/}
      {/*  <div className="font-Cinzel text-3xl font-medium hover:cursor-pointer">News</div>*/}
      {/*</Link>*/}
      {testData.pic ? (
          <Image
            src={testData.picLink}
            width={40}
            height={40}
            alt="User Avatar"
            className="rounded-full"
          />
        ) : (
          <Avatar size="40" name={"krishna kumar"} round={true} />
        )
      }
    </div>
  );
};

