interface Props {
  title: string;
  value: number;
}

const State = ({ title, value }: Props) => {
  return (
    <div className="h-36 w-36 bg-white rounded-2xl shadow-sm md:m-5 m-2 flex flex-col items-center">
      <h1 className="font-Inter text-md my-6">{title}</h1>
      <h1 className="font-Inter text-3xl font-semibold text-slate-800">{value}</h1>
    </div>
  );
};

export default State;
