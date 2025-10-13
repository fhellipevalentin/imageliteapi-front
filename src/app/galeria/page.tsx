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
            <button onClick={searchImages} className="bg-blue-500 text-white px-4 py-2 rounded mb-4">Mudar Imagem</button>          
            <section className="grid grid-cols-4 gap-8">
                {
                    renderImageCards()
                }
            </section>
        </Template>
    )
}