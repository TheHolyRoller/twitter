import React from 'react'
import Image from "next/Image"; 

type ProfileImageProps = {

    src?: string | null 
    className?: string 
    
}

function ProfileImage({src, className=""}: 
ProfileImageProps) {
  return (
  
  
    <div className={`relative h-12 w-12 overflow-hidden rounded-full  ${className}  `}>
    {src == null ? null : <Image src={scr} alt='alt' quality={100} fill  /> }
    
    ProfileImage
    
    </div>
  )
}

export default ProfileImage