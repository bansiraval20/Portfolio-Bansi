import React from 'react'
import { CertificateCardData } from '../constant'
import Button from '../Button'

const CertificateCard = () => {
  return (
    <div>
          {CertificateCardData.map((Item, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              className="bg-gray-800 rounded-lg border border-gray-700 hover:border-2 hover:border-blue-500 w-[350px] h-[200px] flex justify-center items-center flex-col gap-3">
              <div className="font-medium text-white text-xl">{Item.name}</div>
              <div className="flex justify-center">
                
                <Button Document="/public/Bansi Cv.pdf" Icon={<Item.Icon className="text-xl" />} text="Download"/>
              </div>
            </div>
          ))}
        </div>
  )
}

export default CertificateCard
