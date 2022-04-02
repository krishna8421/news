import { useState } from "react";

export default function Search() {
  const [searchText, setSearchText] = useState("");
  const [isSearchBoxOpen, setIsSearchBoxOpen] = useState(0);

  const fireSearch = (val: any) => {
    console.log("searched");
    setSearchText(val);
    console.log(val.length, "searched");
    if (val.length > 2) {
      console.log("searched");
    }
  };

  return (
    <div className={isSearchBoxOpen ? "searchSectionFocused" : "searchSection"}>
      <div className="searchBox">
        <input
          placeholder="Search for topics, locations, editors & sources"
          className="searchInput focus:outline-none"
          value={searchText}
          onFocus={() => setIsSearchBoxOpen(1)}
          onChange={(e) => fireSearch(e.target.value)}
        />
        <button>icon</button>
      </div>
      {isSearchBoxOpen ? (
        <div onClick={() => setIsSearchBoxOpen(1)} className="searchDropdown">
          <div>
            <div
              style={{ fontFamily: "Montserrat", fontSize: "calc(.8vw + .8vh)", fontWeight: "500" }}
            >
              Hey,
            </div>
            <div
              style={{
                fontFamily: "Righteous",
                fontSize: "calc(1.3vw + 1.3vh)",
                marginTop: "calc(-.2vw - .2vh)",
              }}
            >
              User
            </div>
          </div>
          <div
            style={{
              backgroundColor: "#141414",
              borderRadius: "calc(.8vw + .8vh)",
              padding: "1.5vh 1vw",
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            <button onClick={() => setSearchText(`${"media"}`)} className="hashtagCell">
              #media
            </button>
            <button onClick={() => setSearchText(`${"mumbai"}`)} className="hashtagCell">
              #mumbai
            </button>
            <button onClick={() => setSearchText(`${"ukraine"}`)} className="hashtagCell">
              #ukraine
            </button>
            <button onClick={() => setSearchText(`${"tanmaybh"}`)} className="hashtagCell">
              #tanmaybh
            </button>
            <button onClick={() => setSearchText(`${"waronukraine"}`)} className="hashtagCell">
              #waronukraine
            </button>
            <button onClick={() => setSearchText(`${"russia"}`)} className="hashtagCell">
              #russia
            </button>
            <button onClick={() => setSearchText(`${"russians"}`)} className="hashtagCell">
              #russians
            </button>
          </div>
          <div className="flex flex-wrap" style={{ marginTop: "1.5vh" }}>
            <div className="searchMenuCategories">
              <span>Hops</span> <button className="searchMenuCatNxtBtn">&gt;</button>
            </div>
            <div className="searchMenuCategories">
              <span>Influencers</span> <button className="searchMenuCatNxtBtn">&gt;</button>
            </div>
            <div className="searchMenuCategories">
              <span>Community</span> <button className="searchMenuCatNxtBtn">&gt;</button>
            </div>
            <div className="searchMenuCategories">
              <span>TCL</span> <button className="searchMenuCatNxtBtn">&gt;</button>
            </div>
          </div>
          <div className="flex">
            <div>
              <div>Image</div>
              <div>Content</div>
            </div>
            <div>
              <div>Image</div>
              <div>Content</div>
            </div>
            <div>
              <div>Image</div>
              <div>Content</div>
            </div>
            <div>
              <div>Image</div>
              <div>Content</div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
