const apiKey = 'C23b3vWipaRuQ2MOhQJiJJ5MScYK2Ofbxia3Z7mY' // Reemplaza con tu API key de la NASA si es necesario

// Función para consultar las últimas imágenes de Marte usando API de la NASA
async function fetchMarsImages() {
    const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${apiKey}`

    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error('Error al obtener las imágenes de Marte')
        }
        const data = await response.json()
        return data.photos // Retorna solo las fotos en este ejemplo
    } catch (error) {
        console.error('Error en fetchMarsImages:', error.message)
        return null
    }
}

// Función para consultar la imagen del día usando la API APOD (Astronomy Picture of the Day) de la NASA
async function fetchAstronomyPictureOfTheDay() {
    const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`

    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error('Error al obtener la imagen del día')
        }
        const data = await response.json()
        return data // Retorna el objeto completo con la imagen del día y detalles
    } catch (error) {
        console.error('Error en fetchAstronomyPictureOfTheDay:', error.message)
        return null
    }
}

// Función para consultar imágenes de la NASA Image and Video Library (NASA IVL) con paginado
async function searchNASAImages(query="", pageNumber, pageSize) {
    const url = `https://images-api.nasa.gov/search?q=${query}&media_type=image&page=${pageNumber}&page_size=${pageSize}`
    try {
        const response = await fetch(url)

        //delay
        await new Promise(resolve => setTimeout(resolve, 4000))

        if (!response.ok) {
            throw new Error('Error al buscar imágenes en NASA IVL')
        }

        const data = await response.json()

        return {
            items: data.collection.items,
            total: data.collection.metadata.total_hits
        }

    } catch (error) {
        console.error('Error en searchNASAImages:', error.message)
        return null
    }
}

// Función para consultar videos de la NASA Image and Video Library (NASA IVL) con paginado
async function searchNASAVideos(query, pageNumber = 1, pageSize = 10) {
    const url = `https://images-api.nasa.gov/search?q=${query}&media_type=video&page=${pageNumber}&page_size=${pageSize}`

    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error('Error al buscar videos en NASA IVL')
        }
        const data = await response.json()
        return data.collection.items // Retorna solo los items de videos en este ejemplo
    } catch (error) {
        console.error('Error en searchNASAVideos:', error.message)
        return null
    }
}

// Función para consultar datos de los rovers
async function fetchRovers(query, pageNumber = 1, pageSize = 2) {
    const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/latest_photos?api_key=${apiKey}&page=${pageNumber}&page_size=${pageSize}`

    try {
        const response = await fetch(url)
        console.log(response)
        if (!response.ok) {
            throw new Error('Error al obtener datos de los rovers')
        }
        const data = await response.json()
        return data.latest_photos // Retorna el array de rovers
    } catch (error) {
        console.error('Error en fetchRovers:', error.message)
        return null
    }
}

// Exporta las funciones para poder usarlas en otros archivos
export { fetchMarsImages, fetchAstronomyPictureOfTheDay, searchNASAImages, searchNASAVideos, fetchRovers }
