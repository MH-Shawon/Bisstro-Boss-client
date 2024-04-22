const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="text-center md:w-5/12 mx-auto mt-8">
      <div className="text-[#D99904] text-xl italic">---{subHeading}---</div>
      <div className="text-[40px] border-t-2 border-b-2  mt-4 mb-12 uppercase">
        {heading}
      </div>
    </div>
  );
};
export default SectionTitle;
