import { Suspense } from "react"
import NasaImagesTable from "@/app/components/NasaImagesTable"
import SearchFilter from "@/app/components/SearchFilter"

export default function NasaImagePage({ searchParams }) {
  const params = new URLSearchParams(searchParams)
  const search = searchParams.search
  const page = searchParams.page || 1
  const pageSize = searchParams.pageSize || 8

  console.log("Search:", search)
  console.log("Page:", page)
  console.log("PageSize:", pageSize)
  return (<div className="flex flex-col items-center justify-center w-full">
    <div className="max-w-screen-2xl flex flex-col justify-center">
        <div className="w-full border-b border-slate-500">
      <SearchFilter name="search" />

        </div>
      <Suspense key={params.toString()} fallback={<p>Loading...</p>}>
        <NasaImagesTable searchParams={searchParams} />
      </Suspense>
    </div>
</div>)
}
