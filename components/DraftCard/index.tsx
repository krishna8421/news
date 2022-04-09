import Image from "next/image";
import EditModal from "@components/Profile/Drafts/EditModal";
import { useState } from "react";

interface Props {
  image: string;
  title: string;
  article: any;
}

export default function DraftCard({ image, title = "", article }: Props) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button className="proDraftCard" onClick={() => setShowModal(true)}>
        <div className="proArticleImg">
          {image ? (
            <Image
              src={image}
              alt="Profile Pic"
              layout="fill"
              objectFit="cover"
              style={{ borderRadius: "calc(1vw + 1vh)" }}
            />
          ) : (
            <Image
              src="/red-background.png"
              alt="Profile Pic"
              layout="fill"
              objectFit="cover"
              style={{ borderRadius: "calc(1vw + 1vh)" }}
            />
          )}
        </div>
        <div className="proArticleTxt">{title}</div>
      </button>
      {showModal ? <EditModal setShowModal={setShowModal} article={article} /> : null}
    </>
  );
}
