import React from 'react'
import ResourceCard from '@/components/ResourceCard';
import { db } from "@/lib/db";
import { consumercategory } from "@prisma/client";
import Link from 'next/link'

function ConsumersTab({categories}: {categories: consumercategory[]}) {





  return (
    <>
      

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
                  {categories.map((category: consumercategory) => {
                    return (
                      <Link href="/consumer/resource/allergy" key={category.ConsumerCategoryID}>
                      <ResourceCard
                        title={category.CategoryLabel}
                        imageSrc="/allergy-image.png"
                      />
                    </Link>
                    )
                  })
                  
                  }
              </div>
              
    </>
  )
}

export default ConsumersTab
