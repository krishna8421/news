import InfiniteScroll from "react-infinite-scroll-component";

//COMPONERNTS ================================================
import ArticleContainer from "@components/ArticleContainer";
import ArticleCard from "@components/ArticleCard";
import ReactLoading from "react-loading";

interface Props {
  offset: number;
  articleData: [];
  articlesId: [];
  hasMore: boolean;
  getNext: any;
  id: string;
}

const ArticleContainerScroll = ({
  offset,
  articleData,
  articlesId,
  hasMore,
  getNext,
  id,
}: Props) => {
  const Loader = () => {
    return (
      <div className=" flex justify-center items-center " style={{ width: "100%" }}>
        <ReactLoading type="bubbles" color="#fff" />
      </div>
    );
  };
  const LastText = () => {
    return (
      <div className=" flex justify-center items-center " style={{ width: "100%" }}>
        <h3>That&apos;s the end, folks! </h3>
      </div>
    );
  };

  return (
    <InfiniteScroll
      dataLength={articleData.length}
      next={() => getNext()}
      hasMore={hasMore}
      loader={<Loader />}
      endMessage={<LastText />}
      scrollableTarget={id}
      scrollThreshold={0.9}
      style={{ padding: 0, margin: 0 }}
    >
      <ArticleContainer>
        {articlesId.length > 0 &&
          articleData.map((article: any, i: number) =>
            i >= Math.min(articleData.length, offset) && articlesId[i] !== undefined ? (
              <ArticleCard key={i} data={article} articlesId={articlesId[i]} />
            ) : (
              <></>
            ),
          )}
      </ArticleContainer>
    </InfiniteScroll>
  );
};

export default ArticleContainerScroll;
