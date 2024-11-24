import React, { useEffect, useState } from "react";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import Image from "next/image";

import anxiety from '../image/anxiety.jpg';
import depression from '../image/depression.jpg';
import mania from '../image/mania.jpg';
import sleep_disorder from '../image/sd.jpg';

export default function Card({ testName, title, description }) {
  console.log(testName);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Set state to true once the component is mounted on the client
  }, []);

  const handleCardClick = () => {
    // Ensure we are on the client before using router
  
      window.sessionStorage.setItem('quiz',testName);
      window.location.href=(`/quiz`);
    
  };

  return (
    <div onClick={handleCardClick}>
      <CardContainer className="inter-var">
        <CardBody
          className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border"
        >
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            {title}
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            {description}
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src={testName==="sleep_disorder"?sleep_disorder:(testName==="anxiety"?anxiety:(testName==="depression"?depression:(testName==="mania"?mania:null)))}
              height={1000}
              width={1000}
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-20"></div>
        </CardBody>
      </CardContainer>
    </div>
  );
}




