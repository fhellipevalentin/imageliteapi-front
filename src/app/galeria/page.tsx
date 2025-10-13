'use client'

import { Template } from "@/components/Template";
import { ImageCard } from "@/components/ImageCard";
import { useState } from "react"; 
import { useImageService } from "@/resources/image/image.service";
import { Image } from "@/resources/image/image.resources";

export default function GaleriaPage () {

    const [images, setImages] = useState<Image[]>([]);

    const imageService = useImageService();

    async function searchImages() {
        const result = await imageService.buscar();
        setImages(result);
        console.table(result);
    }

    function renderImageCard(image: Image) {
        return (
            <ImageCard nome={image.name} 
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
                    <input type='text' placeholder="Buscar imagens..." className="border px-3 py-3 rounded-lg text-gray-900 " />
                    <select className="border px-4 py-2 rounded-lg text-gray-900">
                        <option>Todos os Formatos</option>
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