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
    const [loading, setLoading] = useState<boolean>(false);

    async function searchImages() {
        setLoading(true);
        const result = await imageService.buscar(query, extension);
        setImages(result);
        setLoading(false);
    }

    function renderImageCard(image: Image) {
        return (
            <ImageCard 
            key={image.url}
            nome={image.name} 
            tamanho={image.size} 
            dataUpload={image.uploadDate} 
            extension={image.extension}
            src={image.url} />
        )
    }

    function renderImageCards() {
        return images.map(renderImageCard);
    }

    return (
        <Template loading={loading}>
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
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-300" onClick={searchImages}>Search</button>
                    <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-300">Add New</button>
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