import { db } from "@firebase/client";
import HomePageLayout from "@layouts/HomePageLayout";
import RichTextEditor from "@components/RichTextEditor";
import Carousel from "@components/Carousel";
import Image from "next/image";
import { Avatar } from "@mantine/core";
import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  limit,
  orderBy,
  startAfter,
  doc,
  getDoc,
  query,
} from "firebase/firestore";

// COMPONENTS =========================================================
import ArticleContainerScroll from "@components/ArticleContainerScroll";

const getArticle = async (articleID: string) => {
  let articleData = null;
  try {
    const ArticleDocRef = doc(db, "articles", articleID);
    articleData = await getDoc(ArticleDocRef);
  } catch (e: any) {
    throw new Error(e.message);
  }

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
  let article = null;
  try {
    article = JSON.parse(JSON.stringify(await getArticle(params.uid)));
  } catch (e) {
    return {
      notFound: true,
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
  const [moreArticleData, setArticleData] = useState<any>([]);
  const [articlesId, setArticlesId] = useState<any>([]);
  const [hasMore, setHasMore] = useState<boolean>(false);
  const [lastFetched, setLastFetched] = useState<any>();
  const articleLimit = 4;

  useEffect(() => {
    if (article) getData();
  }, []);

  if (!article) {
    return <div>...</div>;
  }
  const {
    // ageRestricted,
    articleData,
    // category,
    // city,
    // country,
    // limelight,
    // primeTime,
    // normalImage1,
    // normalImage2,
    // normalImage3,
    // state,
    // subHeading,
    // tags,
    title,
    type,
    createdAt,
    authorPhotoURL,
    authorName,
  } = article;

  // const imgUrlsWithNull =
  //   normalImage1 || normalImage2 || normalImage3
  //     ? [normalImage1.url, article.normalImage2.url, article.normalImage3.url]
  //     : [limelight.url, primeTime.url];
  // const imgUrls: string[] = imgUrlsWithNull.filter(Boolean);

  const getData = async () => {
    const articleCollection = collection(db, "articles");
    const articlesRef = query(articleCollection, orderBy("createdAt"), limit(articleLimit));
    const articlesData = await getDocs(articlesRef);

    const last = articlesData.docs[articlesData.docs.length - 1];
    setLastFetched(last);

    var data: any[] = [];
    var articlesIdTemp: any[] = [];
    articlesData.forEach((element) => {
      data.push(element.data());
      articlesIdTemp.push(element.ref.id);
    });

    setArticleData(data);
    setArticlesId(articlesIdTemp);
    if (articlesData.docs.length < articleLimit) {
      setHasMore(false);
    } else setHasMore(true);
  };

  const getNext = async () => {
    const articleCollection = collection(db, "articles");
    const articlesRef = query(
      articleCollection,
      orderBy("createdAt"),
      startAfter(lastFetched),
      limit(articleLimit),
    );

    const articlesData = await getDocs(articlesRef);

    const last = articlesData.docs[articlesData.docs.length - 1];
    setLastFetched(last);

    var data: any[] = [];
    var articlesIdTemp: any[] = [];
    articlesData.forEach((element) => {
      data.push(element.data());
      articlesIdTemp.push(element.ref.id);
    });
    data = [...moreArticleData, ...data];
    articlesIdTemp = [...articlesId, ...articlesIdTemp];

    setArticleData(data);
    setArticlesId(articlesIdTemp);
    if (articlesData.docs.length < articleLimit) {
      setHasMore(false);
    } else setHasMore(true);
  };

  return (
    <HomePageLayout>
      <div className="lg:w-5/12 xl:w-1/3 w-full">
        <div className="lg:fixed lg:w-5/12 xl:w-1/3 w-full">
          <Carousel />
        </div>
      </div>
      <div className="lg:w-7/12 xl:w-2/3 w-full lg:pt-20 lg:px-16 px-4 pt-12 text-white font-Montserrat">
        <h1 className="tracking-wide text-2xl font-extrabold text-center">{title}</h1>
        <div className="bg-primary-red mt-8 font-bold py-1 px-2 rounded">{type.toUpperCase()}</div>
        <div className="flex flex-col mx-auto items-center mt-8 w-12 h-12 relative">
          {authorPhotoURL ? (
            <Image
              className="rounded-xl absolute"
              src={authorPhotoURL}
              alt="Author"
              layout="fill"
              objectFit="cover"
            />
          ) : (
            <Avatar
              sx={{
                height: "100%",
                width: "100%",
                borderRadius: "20%",
                backgroundColor: "black",
                position: "relative",
              }}
            >
              {authorName?.split("")[0]}
            </Avatar>
          )}
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
        <ArticleContainerScroll
          offset={0}
          articleData={moreArticleData}
          articlesId={articlesId}
          hasMore={hasMore}
          getNext={getNext}
          id="subScrollParent"
        />
      </div>
    </HomePageLayout>
  );
};

export default Article;
