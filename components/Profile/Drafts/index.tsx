import { useData } from "@lib/context/DataContext";
import Image from "next/image";
import Link from "next/link";

const Drafts = () => {
  const { profileImage } = useData();
  return (
    <div className="draftBody pt-4 w-9/12 mx-auto min-h-screen font-Righteous text-lg pb-16">
      <h1 className="text-primary-red text-3xl">Your Drafts</h1>
      {/*Location*/}
      <div className="proDraftSec">
        <Link href="/editArticle" passHref>
          <div className="proDraftCard">
            <div className="proArticleImg">
              {profileImage ? (
                <Image
                  src={profileImage}
                  alt="Profile Pic"
                  layout="fill"
                  objectFit="cover"
                  style={{ borderRadius: "calc(1vw + 1vh)" }}
                />
              ) : (
                <>no image</>
              )}
            </div>
            <div className="proArticleTxt">
              Akshay Kumar cheers for Anupam Khers The Kashmir Files; Says, Amazing to see the
              audience back to the cinemas in large numbers
            </div>
          </div>
        </Link>
        <Link href="/editArticle" passHref>
          <div className="proDraftCard">
            <div className="proArticleImg">
              {profileImage ? (
                <Image
                  src={profileImage}
                  alt="Profile Pic"
                  layout="fill"
                  objectFit="cover"
                  style={{ borderRadius: "calc(1vw + 1vh)" }}
                />
              ) : (
                <>no image</>
              )}
            </div>
            <div className="proArticleTxt">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam sem magna
            </div>
          </div>
        </Link>
        <Link href="/editArticle" passHref>
          <div className="proDraftCard">
            <div className="proArticleImg">
              {profileImage ? (
                <Image
                  src={profileImage}
                  alt="Profile Pic"
                  layout="fill"
                  objectFit="cover"
                  style={{ borderRadius: "calc(1vw + 1vh)" }}
                />
              ) : (
                <>no image</>
              )}
            </div>
            <div className="proArticleTxt">
              Akshay Kumar cheers for Anupam Khers The Kashmir Files; Says, Amazing to see the
              audience back to the cinemas in large numbers
            </div>
          </div>
        </Link>
        <Link href="/editArticle" passHref>
          <div className="proDraftCard">
            <div className="proArticleImg">
              {profileImage ? (
                <Image
                  src={profileImage}
                  alt="Profile Pic"
                  layout="fill"
                  objectFit="cover"
                  style={{ borderRadius: "calc(1vw + 1vh)" }}
                />
              ) : (
                <>no image</>
              )}
            </div>
            <div className="proArticleTxt">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam sem magna
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Drafts;
