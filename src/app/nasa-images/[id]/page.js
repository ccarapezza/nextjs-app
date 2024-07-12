import { getNASAImageDetails } from '@/app/nasa-api/services'
import Image from 'next/image';

export default async function NasaImageView({params}) {
    const { id } = params;
    const imageDetails = await getNASAImageDetails(id);

    /*
    RESPONSE:
    {"href":"https://images-assets.nasa.gov/image/62MA7-123/collection.json","data":[{"album":["Kennedy_History"],"center":"KSC","title":"62-MA7-123","photographer":"NASA","nasa_id":"62MA7-123","date_created":"1962-05-23T00:00:00Z","media_type":"image","description":"CAPE CANAVERAL, Fla. -- Scott Carpenter demonstrates a point to John Glenn while relaxing after his three-orbit MA-7 spaceflight. Photo credit: NASA"}],"links":[{"href":"https://images-assets.nasa.gov/image/62MA7-123/62MA7-123~thumb.jpg","rel":"preview","render":"image"}]}
    */
  return (
    <div className="flex flex-col justify-center items-center p-6 gap-4">
        {imageDetails?.items?.map((image) => (
            <>
                <h1 className="text-4xl">{image.data[0].title}</h1>
                <div className="rounded-sm">
                    LENGHT:{image.links?.length}
                    <Image
                    src={image.links[0].href}
                    alt={image.data[0].title}
                    width={600}
                    height={400}
                    className="rounded-sm"/>
                </div>
                <h2 className="text-4xl">{image.data[0].title}</h2>
                <p className="max-w-2xl">{image.data[0].description}</p>
            </>
        ))}
        <h1 className="text-4xl">{imageDetails.data[0].title}</h1>
        <div className="rounded-sm">
            <Image
            src={imageDetails.links[0].href}
            alt={imageDetails.data[0].title}
            width={600}
            height={400}
            className="rounded-sm"/>
        </div>
        <h2 className="text-4xl">{imageDetails.data[0].title}</h2>
        <p className="max-w-2xl">{imageDetails.data[0].description}</p>
    </div>
  )
}
