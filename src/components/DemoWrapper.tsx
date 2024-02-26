import React from 'react'

const DemoWrapper = ({children, title}:{children:React.ReactNode, title:string}) => {
  return (
    <section className="flex flex-col gap-2 w-full max-w-2xl  ">
    <div className="text-primary-500   duration-75 transition-colors">
    {title}
    </div>
    <section className="flex gap-2 flex-wrap">
    {children}
    </section>
  </section> 
   )
}

export default DemoWrapper