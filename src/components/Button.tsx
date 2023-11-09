import type { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
// import React from 'react'


type ButtonProps = {

small?: boolean 
gray?: boolean 
className?: string
    
    
}& DetailedHTMLProps<
ButtonHTMLAttributes<HTMLButtonElement>,
HTMLButtonElement
>;


function Button({ small=false  , gray=false, className="", ...props}: 
ButtonProps) {

const sizeClasses = small ? "px-2 py-1": "px-4 py-2 font-bold"
const colorClasses = gray ? "bg-gray-400 hover:bg-gray-500 focus-visible:bg-gray-400"
: 
"bg-gray-400 hover:bg-blue-500 focus-visible:bg-blue-400"


  return (
    <button className={`rounded-full transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-50 text-white ${sizeClasses} ${colorClasses}`}  {...props} >Tweet</button>
  )
}

export default Button