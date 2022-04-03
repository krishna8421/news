interface Props {
  tag: string;
}

export default function TagBox({ tag }: Props) {
  return (
    <div className="bg-primary-background-800 h-5 px-2 font-Montserrat rounded-full text-[.6rem] flex justify-center items-center">
      # {tag}
    </div>
  );
}
