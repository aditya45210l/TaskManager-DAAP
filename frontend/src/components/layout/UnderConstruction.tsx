import Image from "next/image";

const UnderConstruction = ({title}:{title:string}) => {
  return (
    <div className="flex flex-row gap-10 justify-center py-20">
      <Image
        src={"/global/maintain.svg"}
        height={250}
        width={250}
        alt="Maintainence"
        className="w-80 h-80"
      />
      <div className="flex justify-center flex-col items-center gap-8">
        <p className="text-7xl font-outfit text-blue-btn">{title} Coming Soon...</p>
        <p className="text-xl tracking-wide leading-relaxed max-w-3xl text-gray-400 text-center font-outfit ">
          This {title} page is currently under development. We&apos;re working hard to
          bring it to life and will announce its launch soon. Thank you for your
          patience and interest.
        </p>
      </div>
    </div>
  );
};
export default UnderConstruction;
