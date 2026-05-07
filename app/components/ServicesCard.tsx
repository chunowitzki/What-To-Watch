import React from 'react'
import Image from 'next/image'

interface CardProps {
  id: string
  image: string
  title: string
  letter: string
  color: string
}

const ServicesCard = (props: CardProps) => {
  return (
    <div className="service-card bg-card-bg rounded flex items-center justify-center flex-col gap-1 cursor-pointer m-1 w-24 h-24 p-3 overflow-hidden">
        <div className="service-icon">
            <Image src={props.image} alt={props.title} width={50} height={50} />
        </div>
        <h2 className='text-gray-400'>{props.title}</h2>
    </div>
  )
}

export default ServicesCard