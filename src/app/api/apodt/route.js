import { fetchAstronomyPictureOfTheDay } from '@/app/nasa-api/services'

export async function GET(request) {
    const apod = await fetchAstronomyPictureOfTheDay()
    return Response.json({ message: "Hello from the API", astronomyPictureOfTheDay: apod })
}