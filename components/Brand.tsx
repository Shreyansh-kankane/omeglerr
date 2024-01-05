import React from 'react'

interface BrandProps {
    className?: string

}

function Brand({className}: BrandProps) {
  return (
    <h1 className={`text-orange-400 font-bold ${className}`}>Omeglee</h1>
  )
}

export default Brand