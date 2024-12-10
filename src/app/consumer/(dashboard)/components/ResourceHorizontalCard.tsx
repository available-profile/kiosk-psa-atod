// components/HorizontalCard.tsx
import React from "react";
import Image from 'next/image'

interface HorizontalCardProps {
  title?: string;
  imageUrl?: string;
}

const ResourceHorizontalCard: React.FC<HorizontalCardProps> = ({ title, imageUrl }) => {
  return (
  
    <>
    <div className="group">
      <div className="relative flex items-center w-full max-w-[1510px] bg-white group-hover:bg-[#769EB2] group-hover:cursor-pointer max-h-56 h-56  
            rounded-2xl shadow-lg overflow-hidden transition duration-300
            mb-4
            ">
        
        <div className="w-4/5 h-full p-7 group-hover:cursor-pointer">
          <h5 className="group-hover:text-white mb-2 text-2xl text-2xl font-bold font-semibold tracking-tight text-black dark:text-white pb-4">
            Allergy
            <span className="flex inline-flex ml-4 relative top-[-10px]">
              <svg className="fill-black h-4 w-4 group-hover:fill-white" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"></path>
              </svg>
            </span>
          </h5>
          <p  className="group-hover:text-white text-2xl font-normal font-normal text-black dark:text-gray-400">People with asthma have sensitive airways in their lungs which can make breathing difficult. It cannot be cured, but can be well controlled with medicines and lifestyle. This can allow you to live a normal and active life, free from symptoms.</p>
        </div>
        
        <div className="group-hover:cursor-pointer flex flex-col w-1/5 h-full order-none block flex-shrink flex-grow self-auto  [flex-basis:auto] sm:space-y-1 lg:space-y-4 justify-center items-center">
          
          <button className="group-hover:border group-hover:border-2 group-hover:border-white group-hover:text-white flex items-center inline-block align-middle justify-center rounded-lg border border-2 border-[#003D79] bg-transparent text-xl text-[#003D79] sm:h-8 sm:w-full lg:h-20 lg:w-48">
            
            <span className="flex inline-flex mr-2">
              <svg className="w-[36px] h-[36px] fill-[#003d79] group-hover:fill-white" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V304H176c-35.3 0-64 28.7-64 64V512H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128zM176 352h32c30.9 0 56 25.1 56 56s-25.1 56-56 56H192v32c0 8.8-7.2 16-16 16s-16-7.2-16-16V448 368c0-8.8 7.2-16 16-16zm32 80c13.3 0 24-10.7 24-24s-10.7-24-24-24H192v48h16zm96-80h32c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H304c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16zm32 128c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H320v96h16zm80-112c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16s-7.2 16-16 16H448v32h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H448v48c0 8.8-7.2 16-16 16s-16-7.2-16-16V432 368z"></path>
              </svg>
            </span>


            view PDF
          </button>

          <button className="group-hover:border group-hover:border-2 group-hover:border-white group-hover:text-white flex items-center inline-block align-middle justify-center rounded-lg border border-2 border-[#003D79] bg-transparent text-xl text-[#003D79] sm:h-8 sm:w-full lg:h-20 lg:w-48">
          
            <span className="flex inline-flex mr-2">
              <svg className="w-[36px] h-[36px] fill-[#003d79] group-hover:fill-white" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                <path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"></path>
              </svg>
            </span>

            send email
          </button>
        </div>

      </div>
    </div>
    </>

  );
};

export default ResourceHorizontalCard;
