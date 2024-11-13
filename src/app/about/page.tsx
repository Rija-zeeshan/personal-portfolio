import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function About() {
  return (
    <div>
      <section className="text-gray-600 body-font bg-gray-900">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <Image className="object-cover object-center rounded" alt="hero" src="/image/rz.jpg" width={300} height={300}/>
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-yellow-500">Hey! There I Am Rija Zeeshan
        <br className="hidden lg:inline-block text-slate-100 font-extrabold"/>Passionate Frontend Web Developer
      </h1>
      <p className="mb-8 leading-relaxed text-slate-100 font-semibold">Hi, I am Rija, a passionate frontend web developer with a strong foundation in web technologies. I have completed my B.Com, and now I am diving deep into the world of web development, especially with Next.js, to create fast, dynamic, and user-friendly applications. I m constantly learning and exploring new frameworks to enhance my skills and deliver exceptional web experiences.

Alongside my frontend development journey, I am also intrigued by the potential of Agentic AI and am excited to explore how it can transform user interactions and automate tasks in the future. My goal is to combine my technical expertise with cutting-edge AI tools to create impactful, intelligent web solutions.

With every project, I strive to not only build websites but also push the boundaries of whats possible in the digital space. Stay tuned as I continue to develop innovative, user-centered applications!

.</p>
      <div className="flex justify-center">
       <Link href={'https://github.com/Rija-zeeshan'}><button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-500 rounded text-lg">View GitHub</button></Link>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}
