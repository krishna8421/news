import { ChangeEvent, Dispatch, SetStateAction } from "react";

interface Props {
  label: string;
  inputData: string;
  setInputData: Dispatch<SetStateAction<string>>;
}

export default function InputField({ label, inputData, setInputData }: Props) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputData(e.target.value);
  };
  return (
    <div className="flex flex-col md:w-full w-full h-24 font-Poppins rounded-md  p-2 px-4 md:mb-8">
      <label className="font-semibold mb-2">{label}</label>
      <input
        type="text"
        className="md:h-12 h-8 rounded-md p-2 bg-dashboard"
        value={inputData}
        onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
      />
    </div>
  );
}
