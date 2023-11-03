import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center bg-gradient-to-r from-black via-gray-800 to-black">
        <Image
          src="/cactus.svg"
          alt="Hero"
          width={250}
          height={250}
          className="rounded-full"
        />
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mt-10">
          Hire & Retain with <span className="text-green-300" >Cactus</span>
        </h1>
    </main>
  )
}
