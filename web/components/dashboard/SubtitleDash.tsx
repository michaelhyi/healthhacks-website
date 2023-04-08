interface Props {
  title: string;
}

const SubtitleDash: React.FC<Props> = ({ title }) => {
  return (
    <div className="mb-4">
      <p className="text-lg md:text-xl font-bold mb-2">{title}</p>
      <hr className="h-[1px] bg-gray-900 border-0 rounded"></hr>
    </div>
  );
};
export default SubtitleDash;
