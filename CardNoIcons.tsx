"use client"

import { useState } from "react"

interface CardProps {
    title?:string,
    description?:string[],
    children?: React.ReactNode,
    link?:string
}

export const CardNoIcons = ({title,description, children,link}:CardProps) => {
    const [hover, setHover] = useState(false)

    return(
        <a href={link ? link:"#"} className="px-7 rounded-xl min-h-[450px] xl:w-72 w-full py-10 shadow relative duration-200 ease" onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
            <div className="flex flex-col xl:gap-4 gap-4 relative h-full xl:items-start items-center">
                {children ? children : <div className="xl:w-6 w-7 h-auto rounded-full bg-primary"/>}
                <h2>{title ? title:"Here goes the title"}</h2>
                <ul className="flex flex-col gap-3 pb-10 xl:pb-0 xl:w-fit md:w-4/12">
                    {description ? description?.map((item)=>
                        <li key={item}>
                            <div className="w-4 h-4 aspect-square rounded-full bg-secondary inline-flex flex-shrink-0"></div><span className="text">{item}</span>
                        </li>
                    )
                    : 
                    <li>
                        <div className="w-4 h-4 aspect-square rounded-full bg-secondary inline-flex flex-shrink-0"></div><span className="text">Here goes description</span>
                    </li>}
                </ul>
                <div  className={`rounded-full w-10 h-10 absolute bottom-0 right-0 ${hover ? "bg-secondary":"bg-primary"} inline-flex justify-center items-center duration-200 ease`}>
                    <span className="p-1 text-white font-bold text-xs uppercase">Go</span>
                </div>
            </div>
        </a>
    )
}