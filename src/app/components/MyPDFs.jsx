"use client"

import Link from "next/link"
import pdflinks from "../../data/links.js"
import { useState } from "react"
import MapPdf from "@/helper/map-pdf.jsx"



export default function MyPDFs() {
    const [search, setSearch] = useState('')

  return (

      <div className="flex flex-col justify-center items-center gap-4 bg-zinc-100 mx-auto">
                    
          <div className=" ">
                <form action="">
                  <input 
                    onChange={(e) =>{
                      setSearch(e.target.value)
                    }}
                    placeholder="search "
                    className="w-full outline-none font-semibold text-gray-600 first:h-6 mt-1 rounded"
                    >
                  </input>
                </form>
                
                
          </div>
  

    <div className=" flex flex-col mb-16 border-gray-800 bg-zinc-100 p-8">
                    
        { 
            pdflinks.filter((item)=>{
              return search.toLowerCase() === '' ?
              item: item.title.toLowerCase().includes(search)
            }).map((pl)=>(
                <Link key={pl.link} href={pl.link} target="_blank" className=" text-gray-600 font-medium mb-2 tracking-wider hover:text-gray-800  delay-300"> 
                <span className="capitalize">
                    {pl.title}
                </span>
            </Link>
            )                
            )
        }
            
    </div>



    </div>
  )
}
