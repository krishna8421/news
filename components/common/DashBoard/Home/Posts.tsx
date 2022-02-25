interface Props {
  shortHeading: string;
  shortDescription: string;
}

const Posts = ({ shortHeading, shortDescription }: Props) => {
  return (
    <div className="md:h-40 md:w-80 h-36 w-60 bg-white rounded-2xl shadow-sm md:m-5 m-2 flex flex-col p-4">
      <h1 className="pb-4 font-Inter font-semibold">{shortHeading}</h1>
      <h3 className="font-Inter text-sm tracking-wide">{shortDescription}</h3>
    </div>
  );
};

export default Posts;
