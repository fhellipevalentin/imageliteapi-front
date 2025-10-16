'use client'

import { Template } from "@/components/Template";
import { ImageCard } from "@/components/ImageCard";
import { useState } from "react"; 
import { useImageService } from "@/resources/image/image.service";
import { Image } from "@/resources/image/image.resources";

export default function GaleriaPage () {

    const [images, setImages] = useState<Image[]>([]);
    const imageService = useImageService();
    const [query, setQuery] = useState<string>('');
    const [extension, setExtension] = useState<string>('');

    async function searchImages() {
        console.log('Searching images with query:', query, 'and extension:', extension);
        const result = await imageService.buscar(query, extension);
        setImages(result);
    }

    function renderImageCard(image: Image) {
        return (
            <ImageCard 
            key={image.url}
            nome={image.name} 
            tamanho={image.size + ' MB'} 
            dataUpload={image.uploadDate} 
            src={image.url} />
        )
    }

    function renderImageCards() {
        return images.map(renderImageCard);
    }

    return (
        <Template>
            <section className="flex flex-col items-center justify-center my-8">
                <div className="flex space-x-4">
                    <input type='text' 
                    onChange = {event => setQuery(event.target.value)}
                    placeholder="Buscar imagens..." 
                    className="border px-3 py-3 rounded-lg text-gray-900 " />
                    <select 
                    onChange={event => setExtension(event.target.value)} 
                    className="border px-4 py-2 rounded-lg text-gray-900">
                        <option value="">Todos os Formatos</option>
                        <option value="PNG">PNG</option>
                        <option value="JPEG">JPEG</option>
                        <option value="GIF">GIF</option>
                    </select>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg" onClick={searchImages}>Search</button>
                    <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg">Add New</button>
                </div>
            </section>
            <section className="grid grid-cols-4 gap-8">
                {
                    renderImageCards()
                }
            </section>
        </Template>
    )
}