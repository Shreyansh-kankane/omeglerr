import React from 'react'

interface BrandProps {
    className?: string

}

function Brand({className}: BrandProps) {
  return (
    <h1 className={`text-orange-400 font-bold m-3 ${className}`}>Omeglee</h1>
  )
}

export default Brand