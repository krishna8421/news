import { Badge, Checkbox, Input, Modal, Radio, RadioGroup, Select } from "@mantine/core";
import RichTextEditor from "@components/RichTextEditor";
import { useEffect, useState } from "react";
import { IoAddOutline } from "react-icons/io5";
import { City, Country, State } from "country-state-city";
import { ICategory } from "@interface/Article.interface";
import { IoMdClose } from "react-icons/io";
import { useAuth } from "@lib/context/AuthContext";
import PageLoading from "@components/PageLoading";
import ImageDropZone from "@components/ImageDropZone";
import { addDoc, collection, doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "@lib/firebase/client";
import { storage } from "@lib/firebase/client";
import { ref, uploadString, getDownloadURL } from "firebase/storage";
import ReactLoading from "react-loading";
import { useRouter } from "next/router";

interface Props {
  setShowModal: (showModal: boolean) => void;
  article: any;
}
const EditModal = ({ setShowModal, article }: Props) => {
  const router = useRouter();
  const { uid, loading, user } = useAuth();

  /**
   * Location
   */
  const [country, setCountry] = useState<string | null>(article.country || null);
  const [allCountries, setAllCountries] = useState<any>([]);
  const [state, setState] = useState<string | null>(article.state || null);
  const [allStates, setAllStates] = useState<any>([]);
  const [city, setCity] = useState<string | null>(article.city || null);
  const [allCities, setAllCities] = useState<any>([]);
  useEffect(() => {
    setAllCountries(
      Country.getAllCountries().map((country) => {
        return {
          value: country.isoCode,
          label: `${country.flag}  ${country.name}`,
        };
      }),
    );
  }, []);

  const handleCountryChange = (value: string) => {
    setCountry(value);
    setAllStates(
      State.getStatesOfCountry(value).map((state) => {
        return {
          value: state.isoCode,
          label: state.name,
        };
      }),
    );
    setState(null);
    setCity(null);
  };

  const handleStateChange = (country: string, state: string) => {
    setState(state);
    setAllCities(
      City.getCitiesOfState(country, state).map((city) => {
        return {
          value: city.name,
          label: city.name,
        };
      }),
    );
    setCity(null);
  };

  /**
   * Age Restricted
   */
  const [ageRestricted, setAgeRestricted] = useState(article.ageRestricted || false);

  /**
   * Normal Images
   */
  // const [normalImage1, setNormalImage1] = useState<null | File>(null);
  const [captionNormalImage1, setCaptionNormalImage1] = useState(
    article.normalImage1.caption || "",
  );
  // const [normalImage2, setNormalImage2] = useState<null | File>(null);
  const [captionNormalImage2, setCaptionNormalImage2] = useState(
    article.normalImage2.caption || "",
  );
  // const [normalImage3, setNormalImage3] = useState<null | File>(null);
  const [captionNormalImage3, setCaptionNormalImage3] = useState(
    article.normalImage3.caption || "",
  );

  /**
   * Prime Time
   */
  // const [primeTime, setPrimeTime] = useState<null | File>(null);
  const [captionPrimeTime, setCaptionPrimeTime] = useState(article.primeTime.caption || "");
  /**
   * Limelight
   */
  // const [limelight, setLimelight] = useState<null | File>(null);
  const [captionLimelight, setCaptionLimelight] = useState(article.limelight.caption || "");

  /**
   * Title
   */
  const [title, setTitle] = useState(article.title || "");

  /**
   * Sub heading
   */
  const [subHeading, setSubHeading] = useState(article.subHeading || "");

  /**
   * Article
   */
  const [articleData, setArticleData] = useState(article.articleData || "");

  /**
   * Tags
   */
  const [tag, setTag] = useState<string>("");
  const [tags, setTags] = useState<string[]>(article.tags || []);

  /**
   * Type
   */
  const [type, setType] = useState<string | undefined>(article.type || undefined);

  /**
   * Category
   */
  const [category, setCategory] = useState<ICategory>(article.category || null);

  /**
   * Show temp Image
   */
  const [tempPrimeTime, setTempPrimeTime] = useState<string | ArrayBuffer | null>(null);
  const [tempLimelight, setTempLimelight] = useState<string | ArrayBuffer | null>(null);
  const [tempNormalImage1, setTempNormalImage1] = useState<string | ArrayBuffer | null>(null);
  const [tempNormalImage2, setTempNormalImage2] = useState<string | ArrayBuffer | null>(null);
  const [tempNormalImage3, setTempNormalImage3] = useState<string | ArrayBuffer | null>(null);
  const handleTempImg = async (file: File, type: string) => {
    const data = new FileReader();
    data.readAsDataURL(file);
    data.onload = function () {
      if (type === "primeTime") {
        setTempPrimeTime(data.result);
        // setPrimeTime(file);
      } else if (type === "limelight") {
        setTempLimelight(data.result);
        // setLimelight(file);
      } else if (type === "normalImage1") {
        setTempNormalImage1(data.result);
        // setNormalImage1(file);
      } else if (type === "normalImage2") {
        setTempNormalImage2(data.result);
        // setNormalImage2(file);
      } else if (type === "normalImage3") {
        setTempNormalImage3(data.result);
        // setNormalImage3(file);
      }
    };
  };

  /**
   * Submit
   */
  const [showMissingAlert, setShowMissingAlert] = useState(false);
  const uploadImage = async (
    filename: string,
    imgBase64: string | ArrayBuffer | null,
  ): Promise<string> => {
    const storageRef = ref(storage, `/users/${uid}/${filename}.png`);
    try {
      const uploadTask = await uploadString(storageRef, imgBase64 as string, "data_url");
      console.log(uploadTask.ref.fullPath);
      return await getDownloadURL(uploadTask.ref);
    } catch (e: any) {
      throw new Error(e);
    }
  };
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = async () => {
    setIsSubmitting(true);
    if (
      !country ||
      !state ||
      !city ||
      !tempNormalImage1 ||
      !captionNormalImage1 ||
      // !tempNormalImage2 ||
      // !captionNormalImage2 ||
      // !tempNormalImage3 ||
      // !captionNormalImage3 ||
      // !primeTime ||
      // !captionPrimeTime ||
      // !limelight ||
      // !captionLimelight ||
      !title ||
      !subHeading ||
      !articleData ||
      !type ||
      !category
    ) {
      setIsSubmitting(false);
      return setShowMissingAlert(true);
    }
    try {
      const normalImageUrl1 = await uploadImage("normal-image-1", tempNormalImage1);
      const normalImageUrl2 = await uploadImage("normal-image-2", tempNormalImage2);
      const normalImageUrl3 = await uploadImage("normal-image-3", tempNormalImage3);
      const primeTimeUrl = await uploadImage("prime-time", tempPrimeTime);
      const limelightUrl = await uploadImage("lime-light", tempLimelight);
      // @ts-ignore
      // @ts-ignore
      const article = {
        country,
        state,
        city,
        ageRestricted,
        normalImage1: {
          url: normalImageUrl1,
          caption: captionNormalImage1,
        },
        normalImage2: {
          url: normalImageUrl2,
          caption: captionNormalImage2,
        },
        normalImage3: {
          url: normalImageUrl3,
          caption: captionNormalImage3,
        },
        primeTime: {
          url: primeTimeUrl,
          caption: captionPrimeTime,
        },
        limelight: {
          url: limelightUrl,
          caption: captionLimelight,
        },
        title,
        subHeading,
        articleData,
        tags: [
          ...title
            .replace(/\s{2,}/g, " ")
            .trim()
            .split(" ")
            // @ts-ignore
            .map((a: string) => {
              if (a.length > 2) return a;
            })
            .filter(Boolean)
            .map((item: string) => item?.toLowerCase()),
          ...tags.map((item) => item.trim().toLowerCase()),
        ],
        type,
        category,
        createdAt: new Date().toISOString(),
        authorUID: uid,
        likedBy: [],
        viewedBy: 0,
        isDraft: true,
        isPrimeTime: false,
        isLimelight: false,
        isRegular: false,
        needReview: false,
        authorName: user?.displayName,
        authorPhotoURL: user?.photoURL,
      };
      const userRef = doc(db, "users", uid as string);
      const res = await getDoc(userRef);
      const data = res.data();
      const articleRef = await addDoc(collection(db, "articles"), article);
      const allArticle = data?.articles || [];
      allArticle.push(articleRef.id);
      updateDoc(userRef, {
        articles: allArticle,
      });
      setIsSubmitting(false);
      router.reload();
    } catch (error) {
      console.log(error);
      setIsSubmitting(false);
    }
    setIsSubmitting(false);
  };

  if (loading) return <PageLoading />;
  const Required = ({ data }: { data?: string }) => {
    return (
      <span className="text-primary-red flex pl-1">
        *<div className="text-xs px-1 pt-[calc(.1vw+.1vh)]">{data}</div>
      </span>
    );
  };
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div
            style={{ backgroundColor: "#1F1F1F" }}
            className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
          >
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h1 className="text-primary-red text-3xl">Edit your post here</h1>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setShowModal(false)}
              >
                <span
                  style={{ color: "#E50914" }}
                  className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none"
                >
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            <div
              style={{ width: "90vw", padding: "0px 5vw 5vh", height: "65vh", overflowY: "scroll" }}
              className="pt-4 w-9/12 mx-auto min-h-screen font-Righteous text-lg pb-16"
            >
              <Modal
                opened={showMissingAlert}
                onClose={() => setShowMissingAlert(false)}
                title="Missing Data"
              >
                <h1 className="text-xl font-Righteous">Fill all the Required fields</h1>
              </Modal>
              {/*Location*/}
              <div className="mt-12 mb-4 flex">
                Location
                <Required />
              </div>
              <div className=" flex flex-wrap gap-8 ">
                <Select
                  placeholder="Country"
                  radius="lg"
                  size="md"
                  sx={{
                    "@media (max-width: 620px)": {
                      width: "100%",
                    },
                  }}
                  data={allCountries}
                  value={country}
                  onChange={(value: string) => handleCountryChange(value)}
                />
                <Select
                  disabled={!country}
                  placeholder="State"
                  radius="lg"
                  size="md"
                  sx={{
                    "@media (max-width: 620px)": {
                      width: "100%",
                    },
                  }}
                  data={allStates}
                  value={state}
                  onChange={(value: string) => {
                    if (!country) throw new Error("Country is not selected");
                    handleStateChange(country, value);
                  }}
                />
                <Select
                  disabled={!country || !state}
                  placeholder="City"
                  radius="lg"
                  size="md"
                  sx={{
                    "@media (max-width: 620px)": {
                      width: "100%",
                    },
                  }}
                  data={allCities}
                  onChange={(value: string) => {
                    if (!country || !state) throw new Error("Country or State is not selected");
                    setCity(value);
                  }}
                />
              </div>
              {/*Age Restrictions*/}
              <div className="mt-12 mb-4 flex">Age Restricted</div>
              <div className="flex">
                <p>Yes</p>
                <Checkbox
                  className="ml-4"
                  color="primary-red"
                  checked={ageRestricted}
                  onChange={() => setAgeRestricted(!ageRestricted)}
                />
              </div>
              {/*Add Image*/}
              <div className="mt-12 mb-4 flex">
                Images
                <Required data={"(Atleast one image)"} />
              </div>
              <ImageDropZone
                onDrop={(files) => handleTempImg(files[0], "normalImage1")}
                onReject={(files) => console.log("rejected files", files)}
                tempImg={tempNormalImage1}
                removeTempImg={() => setTempNormalImage1(null)}
                caption={captionNormalImage1}
                setCaption={setCaptionNormalImage1}
              />
              <ImageDropZone
                onDrop={(files) => handleTempImg(files[0], "normalImage2")}
                onReject={(files) => console.log("rejected files", files)}
                tempImg={tempNormalImage2}
                removeTempImg={() => setTempNormalImage2(null)}
                className="mt-4"
                caption={captionNormalImage2}
                setCaption={setCaptionNormalImage2}
              />
              <ImageDropZone
                onDrop={(files) => handleTempImg(files[0], "normalImage3")}
                onReject={(files) => console.log("rejected files", files)}
                tempImg={tempNormalImage3}
                removeTempImg={() => setTempNormalImage3(null)}
                className="mt-4"
                caption={captionNormalImage3}
                setCaption={setCaptionNormalImage3}
              />

              {/*Prime Time*/}
              <div className="mt-12 mb-4 flex">Prime Time</div>
              <ImageDropZone
                onDrop={(files) => handleTempImg(files[0], "primeTime")}
                onReject={(files) => console.log("rejected files", files)}
                tempImg={tempPrimeTime}
                removeTempImg={() => setTempPrimeTime(null)}
                caption={captionPrimeTime}
                setCaption={setCaptionPrimeTime}
              />
              {/*LimeLight*/}
              <div className="mt-12 mb-4 flex">Limelight</div>
              <ImageDropZone
                onDrop={(files) => handleTempImg(files[0], "limelight")}
                onReject={(files) => console.log("rejected files", files)}
                tempImg={tempLimelight}
                removeTempImg={() => setTempLimelight(null)}
                caption={captionLimelight}
                setCaption={setCaptionLimelight}
              />
              {/*Title*/}
              <div className="mt-12 mb-4 flex">
                Title
                <Required />
              </div>
              <Input
                variant="filled"
                radius="md"
                size="md"
                value={title}
                onChange={(e: any) => setTitle(e.target.value)}
              />
              {/*Sub-heading*/}
              <div className="mt-12 mb-4 flex">
                Sub heading
                <Required />
              </div>
              <Input
                variant="filled"
                radius="md"
                size="md"
                value={subHeading}
                onChange={(e: any) => setSubHeading(e.target.value)}
              />
              {/*Article*/}
              <div className="mt-12 mb-4 flex">
                Article
                <Required />
              </div>
              <RichTextEditor
                value={articleData}
                onChange={setArticleData}
                stickyOffset={64}
                controls={[
                  ["bold", "italic", "underline", "strike"],
                  ["h1", "h2", "h3"],
                  ["alignLeft", "alignCenter", "alignRight"],
                  ["code", "blockquote", "link", "video"],
                ]}
              />
              {/*Tags*/}
              <div className="mt-12 mb-4 flex">Tags for search bar</div>
              <div className="flex gap-8">
                <Input
                  variant="filled"
                  radius="lg"
                  size="md"
                  sx={{
                    width: "15rem",
                  }}
                  value={tag}
                  onChange={(e: any) => setTag(e.target.value)}
                />
                <div
                  onClick={(e: any) => {
                    e.preventDefault();
                    if (tag) {
                      setTags([...tags, tag]);
                      setTag("");
                    }
                  }}
                  className="cursor-pointer w-10 h-10 flex justify-center items-center border border-primary-red hover:bg-primary-red rounded-xl"
                >
                  <IoAddOutline color="white" />
                </div>
              </div>
              <div className="flex mt-4 gap-4">
                {tags &&
                  tags.map((tag, i) => (
                    <Badge
                      key={i}
                      color="primary-red"
                      size="lg"
                      radius="md"
                      variant="outline"
                      rightSection={
                        <IoMdClose
                          className="cursor-pointer"
                          onClick={() => {
                            const newTags = [...tags];
                            newTags.splice(i, 1);
                            setTags(newTags);
                          }}
                        />
                      }
                    >
                      #{tag}
                    </Badge>
                  ))}
              </div>

              {/*Type*/}
              <div className="mt-12 mb-4 flex">
                Type
                <Required />
              </div>
              <RadioGroup
                orientation="vertical"
                spacing="lg"
                size="md"
                color="primary-red"
                required
                value={type}
                onChange={(value) => setType(value)}
              >
                <Radio value="hops" label="Hops" />
                <Radio value="community" label="Community" />
                <Radio value="tcl" label="TCL" />
                <Radio value="influencer" label="Influencer" />
              </RadioGroup>

              {/*Category*/}
              <div className="mt-12 mb-4 flex">
                Category
                <Required />
              </div>
              <Select
                placeholder="Category"
                radius="lg"
                size="md"
                data={[
                  {
                    value: "business",
                    label: "Business",
                  },
                  {
                    value: "entertainment",
                    label: "Entertainment",
                  },
                  {
                    value: "technology",
                    label: "Technology",
                  },
                  {
                    value: "politics",
                    label: "Politics",
                  },
                  {
                    value: "sports",
                    label: "Sports",
                  },
                  {
                    value: "entrepreneur",
                    label: "Entrepreneur",
                  },
                ]}
                value={category}
                onChange={(value: ICategory) => setCategory(value)}
              />

              {/*/!*Credits*!/*/}
              {/*<div className="mt-12 mb-4">Credits</div>*/}
              {/*<Input variant="filled" radius="md" size="md" />*/}

              {/*Submit*/}
              <div className="w-full flex justify-center">
                <button
                  className={`px-6 py-2 bg-primary-red mt-8 rounded-xl ${
                    isSubmitting ? "cursor-not-allowed" : ""
                  }`}
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? <ReactLoading type="spin" color="#fff" /> : "Post"}
                </button>
              </div>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
              <button
                style={{ backgroundColor: "#E50914" }}
                className="text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(false)}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};
export default EditModal;
