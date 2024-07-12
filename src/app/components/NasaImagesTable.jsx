import { searchNASAImages } from '@/app/nasa-api/services'
import Image from 'next/image'

const removeHtmlTags = (str) => str?.replace(/<[^>]*>?/gm, '');

export default async function NasaImagesTable() {

    const imagesResponse = await searchNASAImages("apollo", 1, 10)

    return  <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {imagesResponse?.items?.map((image) => (
                        <div key={image.data[0].nasa_id} className="bg-white rounded-lg overflow-hidden shadow-md text-black">
                            <Image
                                src={image.links[0].href}
                                alt={image.data[0].title}
                                width={640}
                                height={480}
                                priority
                            />
                            <div className="p-4">
                                <h2 className="text-lg font-bold mb-2">{image.data[0].title}</h2>
                                <p className="text-gray-700 max-h-36 line-clamp-3"><strong>Description:</strong> {removeHtmlTags(image.data[0].description)}</p>
                                <p className="text-gray-700"><strong>Photographer:</strong> {image.data[0].photographer}</p>
                                <p className="text-gray-700"><strong>Location:</strong> {image.data[0].location}</p>
                                <p className="text-gray-700"><strong>Date Created:</strong> {new Date(image.data[0].date_created).toLocaleDateString()}</p>
                                <p className="text-gray-700"><strong>Keywords:</strong> {image.data[0].keywords?.join(', ')}</p>
                                <p className="text-gray-700"><strong>Center:</strong> {image.data[0].center}</p>
                            </div>
                        </div>
                    ))}
                </div>
                
            </div>

}
