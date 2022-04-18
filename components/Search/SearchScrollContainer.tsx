import InfiniteScroll from "react-infinite-scroll-component";

//COMPONERNTS ================================================
import SearchResultBox from "@components/SearchResultBox/SearchResultBox";
import ReactLoading from "react-loading";

interface Props {
  searchResults: any[];
  hasMore: boolean;
  getNext: any;
  id: string;
}

const SearchScrollContainer = ({ searchResults, hasMore, getNext, id }: Props) => {
  const Loader = () => {
    return (
      <div className=" flex justify-center items-center " style={{ width: "100%" }}>
        <ReactLoading type="bubbles" color="#fff" />
      </div>
    );
  };
  const LastText = () => {
    return (
      <div className=" flex justify-center items-center mt-4 mb-4" style={{ width: "100%" }}>
        <div className="font-Montserrat ">That&apos;s the end, folks!</div>
      </div>
    );
  };

  return (
    <InfiniteScroll
      dataLength={searchResults.length}
      next={() => getNext()}
      hasMore={hasMore}
      loader={<Loader />}
      endMessage={<LastText />}
      scrollableTarget={id}
      scrollThreshold={0.9}
      style={{ padding: 0, margin: 0 }}
    >
      <div className="w-full flex flex-wrap gap-3 md:gap-5 mt-2 relative place-content-center mb-8 sm:mb-4">
        {searchResults.length > 0 &&
          searchResults.map((result: any, i) => {
            const title = result.data().title;
            const imgUrl = result.data().normalImage1.url;
            const resultid = result.id;
            return <SearchResultBox title={title} imgUrl={imgUrl} id={resultid} key={i} />;
          })}
      </div>
    </InfiniteScroll>
  );
};

export default SearchScrollContainer;
