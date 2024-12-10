import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Overview } from './overview';
import { RecentSales } from './recent-sales';
import ResourceCard from '@/components/ResourceCard';
function ConsumersTab() {

  const randomTimes = Math.floor(Math.random() * 15) + 1;

  const dummyResourceCard = Array.from({ length: randomTimes }, (_, index) => (
    <ResourceCard
      key={index}
      title="Allergy"
      imageSrc="/allergy-image.png"
    />
  ));

  return (
    <>
      

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">

                {dummyResourceCard}

                  {/* <ResourceCard
                    title="Allergy"
                    imageSrc="/allergy-image.png" 
                  />
                 */}
                


              </div>
              
    </>
  )
}

export default ConsumersTab
