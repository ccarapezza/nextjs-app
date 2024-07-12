import Image from "next/image"

const getApotd = async () => {
  const response = await fetch(`http://localhost:3000/api/apodt`)
  const data = await response.json();
  return data?.astronomyPictureOfTheDay;
}

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 3000))

  const apotd = await getApotd()

  return (
    <div className="flex flex-col justify-center items-center p-6 gap-4">
        <h1 className="text-4xl">Astronomy Picture of the Day</h1>
        <div className="rounded-sm">
            <Image src={apotd.url} alt={apotd.title} width={600} height={400} className="rounded-sm"/>
        </div>
        <h2 className="text-4xl">{apotd.title}</h2>
        <p className="max-w-2xl">{apotd.explanation}</p>
      <Image
        src="https://www.borderless-software.com/img/logo-hero.svg"
        alt="Borderless Logo"
        width={180}
        height={37}
      />
    </div>
  )
}
