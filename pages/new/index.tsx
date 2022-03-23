import HomePageLayout from "@layouts/HomePageLayout";
import { withEditor } from "@lib/hooks/withEditor";
import { Autocomplete, Badge, Checkbox, Input, Radio, RadioGroup } from "@mantine/core";
import RichTextEditor from "@components/RichTextEditor";
import { useState } from "react";
import { IoAddOutline } from "react-icons/io5";

const New = () => {
  /**
   * TODO
   *  Change the Color of CheckBox
   *  Remove things from the Editor
   */
  const initialValue = "<p>Write Your Article Here</p>";
  const [value, onChange] = useState(initialValue);
  return (
    <HomePageLayout>
      <div className="pt-16 w-9/12 mx-auto min-h-screen font-Righteous text-lg pb-16">
        <h1 className="text-primary-red text-3xl">Your Editor</h1>
        {/*Location*/}
        <div className="mt-12 mb-4">Location</div>
        <div className=" flex flex-wrap gap-8 ">
          <Autocomplete
            placeholder="Country"
            radius="lg"
            size="md"
            sx={{
              "@media (max-width: 620px)": {
                width: "100%",
              },
            }}
            data={["React", "Angular", "Svelte", "Vue"]}
          />
          <Autocomplete
            placeholder="State"
            radius="lg"
            size="md"
            sx={{
              "@media (max-width: 620px)": {
                width: "100%",
              },
            }}
            data={["React", "Angular", "Svelte", "Vue"]}
          />
          <Autocomplete
            placeholder="City"
            radius="lg"
            size="md"
            sx={{
              "@media (max-width: 620px)": {
                width: "100%",
              },
            }}
            data={["React", "Angular", "Svelte", "Vue"]}
          />
        </div>
        {/*Age Restrictions*/}
        <div className="mt-12 mb-4">Age Restricted</div>
        <div className="flex">
          <p>Yes</p>
          <Checkbox className="ml-4" color="primary-red" />
        </div>
        {/*Add Image*/}
        <div className="mt-12 mb-4">Add Images</div>
        <div className="flex">
          <p>TODOOOOOO</p>
        </div>
        {/*Title*/}
        <div className="mt-12 mb-4">Title</div>
        <Input variant="filled" radius="md" size="md" />
        {/*Sub-heading*/}
        <div className="mt-12 mb-4">Sub heading</div>
        <Input variant="filled" radius="md" size="md" />
        {/*Article*/}
        <div className="mt-12 mb-4">Article</div>
        <RichTextEditor value={value} onChange={onChange} stickyOffset={64} />
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
          />
          <div className="cursor-pointer w-10 h-10 flex justify-center items-center border border-primary-red hover:bg-primary-red rounded-lg">
            <IoAddOutline color="white" />
          </div>
        </div>
        <div className="flex mt-4 gap-4">
          <Badge color="primary-red" size="lg" radius="md" variant="outline">
            #TAg1
          </Badge>
          <Badge color="primary-red" size="lg" radius="md" variant="outline">
            #TAg2
          </Badge>
          <Badge color="primary-red" size="lg" radius="md" variant="outline">
            #TAg3
          </Badge>
        </div>

        {/* Category*/}
        <div className="mt-12 mb-4">Choose a Category</div>
        <RadioGroup orientation="vertical" spacing="lg" size="md" color="primary-red" required>
          <Radio value="hops" label="Hops" />
          <Radio value="community" label="Community" />
          <Radio value="tcl" label="TCL" />
          <Radio value="influencer" label="Influencer" />
        </RadioGroup>

        {/*Credits*/}
        <div className="mt-12 mb-4">Credits</div>
        <Input variant="filled" radius="md" size="md" />
        {/*Submit*/}
        <div className="w-full flex justify-center">
          <button className="px-6 py-2 bg-primary-red mt-8 rounded-xl">Post</button>
        </div>
      </div>
    </HomePageLayout>
  );
};
export default withEditor(New);
