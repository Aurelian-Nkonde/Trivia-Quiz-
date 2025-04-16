"use client"

import Image from "next/image";
import Navigation from "./components/header";
import Footer from "./components/footer";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter()

  return (
    <div className="">
      <Navigation />
      <div className="max-w-4xl mx-auto px-10 md:px-2">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div style={{height: "80vh"}} className="flex flex-col justify-center ">
            <h1 className="text-4xl font-bold pb-4">The amazing and best QUIZ app, play among the best..</h1>
            <p className="pb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum id rerum vel natus maiores?</p>
            <div className="">
              <button onClick={() => router.push("/quiz")} className="bg-green-700 text-white py-2 px-4 rounded-md text-lg shadow-2xl cursor-pointer">Start Quiz</button>
            </div>
          </div>
          <div style={{height: "80vh"}} className="hidden md:block">
            <Image src="/bg.svg" alt="" height={600} width={800}/>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 pt-12 md:pt-20">
        <h1 className="text-center text-2xl font-bold pb-2">About QUIZ app..</h1>
        <p className="max-w-2xl mx-auto text-center text-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores debitis consequatur ut mollitia recusandae velit sequi.</p>
        <div className="mt-12 grid grid-cols-2 gap-10">
          <div className="flex flex-col items-center">
            <Image src="/one.png" alt="" width={60} height={60}/>
            <h1 className="my-2 text-2xl font-bold">Fast!</h1>
            <p className="max-w-sm mx-auto text-center">Lorem Lorem ipsum dolor sit amet consectetur adipisicing. ipsum dolor sit, amet consectetur adipisicing elit. Officiis, molestiae.</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/two.png" alt="" width={60} height={60}/>
            <h1 className="my-2 text-2xl font-bold">Fast!</h1>
            <p className="max-w-sm mx-auto text-center">Lips ipsum dolor sit amet consectetur adipisicing. ipsum dolor sit, amet consectetur adipisicing elit. Officiis, molestiae.</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
