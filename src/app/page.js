import Image from "next/image"

export default async function Home() {
  return (
    <div className="flex flex-col justify-center items-center p-6">
      <Image
        src="https://www.borderless-software.com/img/logo-hero.svg"
        alt="Borderless Logo"
        width={180}
        height={37}
      />
    </div>
  )
}