const InfoBoxes = () => {
  return (
    <div className="">
      <div className="grid grid-cols-4 grid-rows-6 gap-4">
        <div className="w-full h-[250px] border-2 border-black col-span-2 row-span-2"></div>
        <div className="w-full h-[250px] border-2 border-black col-span-2 row-span-2 col-start-3"></div>
        <div className="w-full h-[250px] border-2 border-black col-span-2 row-span-2 row-start-3"></div>
        <div className="w-full h-[250px] border-2 border-black col-span-2 row-span-2 col-start-3 row-start-3"></div>
        <div className="w-full h-[250px] border-2 border-black col-span-2 row-span-2 row-start-5"></div>
        <div className="w-full h-[250px] border-2 border-black col-span-2 row-span-2 col-start-3 row-start-5"></div>
      </div>
    </div>
  );
};

export default InfoBoxes;
