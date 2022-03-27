// import HomePageLayout from "@layouts/HomePageLayout";
// import { withEditor } from "@lib/hooks/withEditor";
import { Badge, Checkbox, Input, Radio, RadioGroup, Select } from "@mantine/core";
import RichTextEditor from "@components/RichTextEditor";
import { useEffect, useState } from "react";
import { IoAddOutline } from "react-icons/io5";
import { City, Country, State } from "country-state-city";
import { ICategory } from "@interface/Article.interface";
import { IoMdClose } from "react-icons/io";
import { useAuth } from "@lib/context/AuthContext";
import PageLoading from "@components/PageLoading";
import ImageDropZone from "@components/ImageDropZone";
// import { storage } from "@lib/firebase/client";
// import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const NewPost = () => {
  const { user, loading } = useAuth();

  /**
   * Location
   */
  const [country, setCountry] = useState<string | null>(null);
  const [allCountries, setAllCountries] = useState<any>([]);
  const [state, setState] = useState<string | null>(null);
  const [allStates, setAllStates] = useState<any>([]);
  const [city, setCity] = useState<string | null>(null);
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
  const [ageRestricted, setAgeRestricted] = useState(false);

  /**
   * Images max-3
   */
  // const [images, setImages] = useState<{ url: string, caption: string }[]>([]);

  /**
   * Prime Time
   */
  // const [primeTime, setPrimeTime] = useState<null | File[]>(null);
  /**
   * Limelight
   */
  // const [limelight, setLimelight] = useState<null | File[]>(null);

  /**
   * Title
   */
  const [title, setTitle] = useState("");

  /**
   * Sub heading
   */
  const [subHeading, setSubHeading] = useState("");

  /**
   * Article
   */
  const [articleData, setArticleData] = useState("");

  /**
   * Tags
   */
  const [tag, setTag] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);

  /**
   * Type
   */
  const [type, setType] = useState<string | undefined>(undefined);

  /**
   * Category
   */
  const [category, setCategory] = useState<ICategory>(null);

  /**
   * Upload temp Image
   */
  const [tempPrimeTime, setTempPrimeTime] = useState<string | ArrayBuffer | null>(null);
  const [tempLimelight, setTempLimelight] = useState<string | ArrayBuffer | null>(null);
  const handleTempImg = async (file: File, type: string) => {
    // const storageRef = ref(storage, `/temp/${user?.uid}/${type}.${file.name.split(".").at(-1)}`);
    // try {
    //   const uploadTask = await uploadBytes(storageRef, file);
    //   console.log(uploadTask);
    // } catch (e) {
    //   console.log(e);
    // }
    const data = new FileReader();
    data.readAsDataURL(file);
    data.onload = function () {
      if (type === "primetime") {
        setTempPrimeTime(data.result);
      } else if (type === "limelight") {
        setTempLimelight(data.result);
      }
    };
  };

  if (loading) return <PageLoading />;

  return (
    <div
      style={{ width: "75vw", marginLeft: "20vw" }}
      className="pt-16 w-9/12 mx-auto min-h-screen font-Righteous text-lg pb-16"
    >
      <h1 className="text-primary-red text-3xl">Your Editor</h1>
      {/*Location*/}
      <div className="mt-12 mb-4">Location</div>
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
      <div className="mt-12 mb-4">Age Restricted</div>
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
      <div className="mt-12 mb-4">Images</div>
      <ImageDropZone
        onDrop={(files) => handleTempImg(files[0], "primetime")}
        onReject={(files) => console.log("rejected files", files)}
        tempImg={tempPrimeTime}
        removeTempImg={() => setTempPrimeTime(null)}
      />
      <ImageDropZone
        onDrop={(files) => handleTempImg(files[0], "primetime")}
        onReject={(files) => console.log("rejected files", files)}
        tempImg={tempPrimeTime}
        removeTempImg={() => setTempPrimeTime(null)}
        className="mt-4"
      />
      <ImageDropZone
        onDrop={(files) => handleTempImg(files[0], "primetime")}
        onReject={(files) => console.log("rejected files", files)}
        tempImg={tempPrimeTime}
        removeTempImg={() => setTempPrimeTime(null)}
        className="mt-4"
      />

      {/*Prime Time*/}
      <div className="mt-12 mb-4">Prime Time</div>
      <ImageDropZone
        onDrop={(files) => handleTempImg(files[0], "primetime")}
        onReject={(files) => console.log("rejected files", files)}
        tempImg={tempPrimeTime}
        removeTempImg={() => setTempPrimeTime(null)}
      />
      {/*Limelight*/}
      <div className="mt-12 mb-4">Limelight</div>
      <ImageDropZone
        onDrop={(files) => handleTempImg(files[0], "limelight")}
        onReject={(files) => console.log("rejected files", files)}
        tempImg={tempLimelight}
        removeTempImg={() => setTempLimelight(null)}
      />
      {/*Title*/}
      <div className="mt-12 mb-4">Title</div>
      <Input
        variant="filled"
        radius="md"
        size="md"
        value={title}
        onChange={(e: any) => setTitle(e.target.value)}
      />
      {/*Sub-heading*/}
      <div className="mt-12 mb-4">Sub heading</div>
      <Input
        variant="filled"
        radius="md"
        size="md"
        value={subHeading}
        onChange={(e: any) => setSubHeading(e.target.value)}
      />
      {/*Article*/}
      <div className="mt-12 mb-4">Article</div>
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
      <div className="mt-12 mb-4">Tags for search bar</div>
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
      <div className="mt-12 mb-4">Type</div>
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
      <div className="mt-12 mb-4">Category</div>
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
          className="px-6 py-2 bg-primary-red mt-8 rounded-xl"
          onClick={() => {
            console.log({
              ageRestricted,
              title,
              subHeading,
              articleData,
              category,
              type,
              tags: [...tags, ...title.split(" ")],
              userId: user?.uid,
              location: {
                country,
                state,
                city,
              },
              likedBy: [],
              createdAt: new Date().toISOString(),
            });
          }}
        >
          Post
        </button>
      </div>
    </div>
  );
};
export default NewPost;
