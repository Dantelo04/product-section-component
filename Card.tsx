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
        <a href={link ? link:"#"} className="px-6 rounded-xl min-h-[400px] xl:w-64 w-full py-10 shadow relative duration-200 ease" onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
            <div className="flex flex-col xl:gap-3 gap-4 relative h-full xl:items-start items-center">
                {children ? children : <div className="xl:w-6 w-7 h-auto rounded-full bg-primary"/>}
                <h2>{title ? title:"Here goes the title"}</h2>
                <ul className="flex flex-col gap-3 pb-10 xl:pb-0 xl:w-fit md:w-4/12">
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