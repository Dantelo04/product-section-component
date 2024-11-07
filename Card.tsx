"use client"

import { useState } from "react"
import { FaChevronRight } from "react-icons/fa"
import { IoMdCheckmark } from "react-icons/io"

interface CardProps {
    title?:string,
    description?:string[],
    children?: React.ReactNode,
    link?:string
}

export const Card = ({title,description, children,link}:CardProps) => {
    const [hover, setHover] = useState(false)

    return(
        <a href={link ? link:"#"} className="px-6 rounded-xl h-[400px] w-64 py-10 shadow relative duration-200 ease" onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
            <div className="flex flex-col gap-3 relative h-full">
                {children}
                <h2>{title ? title:"Here goes the title"}</h2>
                <ul className="flex flex-col gap-3">
                    {description ? description?.map((item)=>
                        <li key={item}>
                            <IoMdCheckmark className="w-4 h-4 text-secondary"/><span className="text">{item}</span>
                        </li>
                    )
                    : 
                    <li>
                        <IoMdCheckmark className="w-4 h-4 text-secondary"/><span className="text">Here goes description</span>
                    </li>}
                </ul>
                <div  className={`rounded-full w-8 h-8 absolute bottom-0 right-0 ${hover ? "bg-secondary":"bg-primary"} inline-flex justify-center items-center duration-200 ease`}>
                    <FaChevronRight className="text-white"/>
                </div>
            </div>
        </a>
    )
}