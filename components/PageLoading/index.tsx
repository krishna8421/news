import ReactLoading from "react-loading";

export default function PageLoading() {
  return (
    <div className="h-screen flex justify-center items-center">
      <ReactLoading type="balls" color="#fff" />
    </div>
  );
}
