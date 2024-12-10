import Image from "next/image";

interface CardProps {
  title: any;
  imageSrc: any;
}

const ResourceCard: React.FC<CardProps> = ({ title, imageSrc }) => {
  return (
    <div className="group relative flex items-center w-full max-w-2xl bg-[#93ABC3] max-h-28 
            rounded-2xl shadow-lg overflow-hidden transition duration-300 hover:bg-[#003D79] hover:cursor-pointer">
      {/* Image Section */}
      <div className="w-1/4 h-full">
        <Image
          src={imageSrc}
          alt={title}
          width={100}
          height={100}
          className="object-cover h-full w-full"
        />
      </div>
      {/* Text Section */}
      <div className="w-3/4 p-4">
        <h2 className="text-white text-3xl ps-8 leading-6 font-medium">{title}</h2>
      </div>
      {/* Hover Arrow */}
      <div className="absolute right-4 opacity-0 group-hover:opacity-100 transition duration-300">
        <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6 text-blue-700"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5l6 6-6 6m-9-6h15" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ResourceCard;