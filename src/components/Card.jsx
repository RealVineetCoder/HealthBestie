import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import Image from "next/image";
import stressImage from "../image/logo.png";

export default function Card({ testName }) {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Set state to true once the component is mounted on the client
  }, []);

  const handleCardClick = () => {
    // Ensure we are on the client before using router
    if (isClient) {
      router.push(`/quiz/${testName}`);
    }
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
            Battling {testName} Alone? You Don't Have To.
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            Mental health doesn’t have to be expensive. Get the support you deserve, anytime, anywhere.
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src={stressImage}
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




