import Image from "next/image";
import Link from "next/link";

export default function ProfileArticleCard({
  articlesId,
  article,
}: {
  articlesId: string;
  article: any;
}) {
  return (
    <Link href={`${process.env.BASE_URL}/articles/${articlesId}`} passHref>
      <div className="proArticleCard">
        <div className="proArticleImg">
          <Image
            src={article.normalImage1.url}
            alt="Profile Pic"
            layout="fill"
            objectFit="cover"
            style={{ borderRadius: "calc(1vw + 1vh)" }}
          />
        </div>
        <div className="proArticleTxt">{article.title}</div>
      </div>
    </Link>
  );
}
