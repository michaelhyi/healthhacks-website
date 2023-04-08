import Link from "next/link";

interface Props {
  title: string;
}

const TitleDash: React.FC<Props> = ({ title }) => {
  return (
    <div className="mb-4">
      <p className="text-2xl md:text-3xl font-bold mt-2 mb-1">{title}</p>
      <hr className="h-[1px] bg-gray-700 border-0 rounded mb-4 lg:mb-8"></hr>
    </div>
  );
};
export default TitleDash;
