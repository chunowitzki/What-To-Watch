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
    <div className="service-card">
        <div className="service-icon">
            <Image src={props.image} alt={props.title} width={50} height={50} />
        </div>
        <h2>{props.title}</h2>
    </div>
  )
}

export default ServicesCard