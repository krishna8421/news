import { getDoc, doc, collection, getDocs } from "firebase/firestore";
import { db } from "@firebase/client";
import HomePageLayout from "@layouts/HomePageLayout";
import RichTextEditor from "@components/RichTextEditor";
import Carousel from "@components/Carousel";
import Image from "next/image";

const getArticle = async (articleID: string) => {
  const ArticleDocRef = doc(db, "articles", articleID);
  const articleData = await getDoc(ArticleDocRef);
  return articleData.data();
};

export const getStaticPaths = async () => {
  const articlesRef = collection(db, "articles");
  const articlesData = await getDocs(articlesRef);
  const paths: any[] = [];
  articlesData.forEach((element) => {
    paths.push({
      params: {
        uid: element.ref.id,
      },
    });
  });
  return {
    paths,
    fallback: true,
  };
};

export async function getStaticProps({ params }: any) {
  const article = await getArticle(params.uid);
  if (!article) {
    return {
      redirect: "/",
      permanent: false,
    };
  }
  return {
    props: {
      article,
    },
    revalidate: 10,
  };
}

const Article = ({ article }: any) => {
  if (!article) {
    return <div>Loading...</div>;
  }
  const {
    // ageRestricted,
    articleData,
    // category,
    // city,
    // country,
    limelight,
    primeTime,
    normalImage1,
    normalImage2,
    normalImage3,
    // state,
    // subHeading,
    // tags,
    title,
    type,
    createdAt,
    authorPhotoURL,
    authorName,
  } = article;

  const imgUrlsWithNull =
    normalImage1 || normalImage2 || normalImage3
      ? [normalImage1.url, article.normalImage2.url, article.normalImage3.url]
      : [limelight.url, primeTime.url];
  const imgUrls: string[] = imgUrlsWithNull.filter(Boolean);

  return (
    <HomePageLayout>
      <div className="lg:w-5/12 xl:w-1/3 w-full">
        <div className="lg:fixed lg:w-5/12 xl:w-1/3 w-full">
          <Carousel imgUrlArr={imgUrls} />
        </div>
      </div>
      <div className="lg:w-7/12 xl:w-2/3 w-full lg:pt-20 lg:px-16 px-4 pt-12 text-white font-Montserrat">
        <h1 className="tracking-wide text-2xl font-extrabold text-center">{title}</h1>
        <div className="bg-primary-red mt-8 font-bold py-1 px-2 rounded">{type.toUpperCase()}</div>
        <div className="flex flex-col w-full mx-auto items-center mt-8 w-12 h-12 relative">
          <Image
            className="rounded-xl absolute"
            src={authorPhotoURL}
            alt="Author"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <h3 className=" text-center mt-2 font-medium text-[.7rem] font-Inter">by {authorName}</h3>
        <h4 className=" text-center text-[.6rem] text-slate-200">{`${createdAt
          .split("-")[2]
          .slice(0, 2)}/${createdAt.split("-")[1]}/${createdAt.split("-")[0]}`}</h4>
        <RichTextEditor
          readOnly={true}
          onChange={() => {}}
          value={articleData}
          className="text-slate-200 bg-primary-background-900 border-0 font-Montserrat my-8"
        />
      </div>
    </HomePageLayout>
  );
};

export default Article;
