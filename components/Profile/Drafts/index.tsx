import React from "react";
import { db } from "@firebase/client";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import DraftCard from "@components/DraftCard";

const Drafts = () => {
  const [articleData, setArticleData] = useState<any>([]);
  const [articlesId, setArticlesId] = useState<any>([]);
  console.log({ articleData, articlesId });
  useEffect(() => {
    const getData = async () => {
      const articlesRef = collection(db, "articles");
      const q = query(articlesRef, where("isDraft", "==", true));
      const articlesData = await getDocs(q);
      const data: any[] = [];
      const articlesId: any[] = [];
      articlesData.forEach((element) => {
        data.push(element.data());
        articlesId.push(element.ref.id);
      });
      setArticleData(data);
      setArticlesId(articlesId);
    };
    getData().then();
  }, []);

  return (
    <div className="draftBody pt-4 w-9/12 mx-auto min-h-screen font-Righteous text-lg pb-16">
      <h1 className="text-primary-red text-3xl">Your Drafts</h1>
      {/*Location*/}
      <div className="proDraftSec">
        {articleData.map((article: any, index: number) => {
          return (
            <DraftCard
              key={index}
              title={article.title}
              article={article}
              image={
                article.normalImage1.url
                  ? article.normalImage1.url
                  : article.normalImage2.url
                  ? article.normalImage2.url
                  : article.normalImage3.url
                  ? article.normalImage3.url
                  : article.limelight.url
                  ? article.limelight.url
                  : article.primeTime.url
                  ? article.primeTime.url
                  : null
              }
            />
          );
        })}
      </div>
    </div>
  );
};

export default Drafts;
