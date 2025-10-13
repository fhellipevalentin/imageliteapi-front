'use client'

import { Template } from "@/components/Template";
import { ImageCard } from "@/components/ImageCard";
import { useState } from "react"; 

export default function GaleriaPage () {

const image1 = "https://retornar.com.br/wp-content/uploads/2024/02/MGN04846-Sorteio-Jeep-Renegade.jpg"
const image2 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbTgnERWxjXgH26Sd3P7P8yQJu8-4bA7xrDA&s"

const nome1= "Jeep Renegade"
const nome2= "Fusca Antigo";

const [codigoImagem, setCodigoImagem] = useState<number>(2);
const [urlImagem, setUrlImagem] = useState<string>(image2);

const [nomeImagem, setNomeImagem] = useState<string>(nome2);


function mudarImagem() {
    if (codigoImagem === 1) {
        setCodigoImagem(2);
        setUrlImagem(image2);
        setNomeImagem(nome2);
    } else {
        setCodigoImagem(1);
        setUrlImagem(image1);
        setNomeImagem(nome1);
    }
}
 

    return (
        <Template>
            <section className="grid grid-cols-3 gap-8">
                <button onClick={mudarImagem} className="bg-blue-500 text-white px-4 py-2 rounded mb-4">Mudar Imagem</button>
                <ImageCard src={urlImagem} nome={nomeImagem} tamanho="10MB" dataUpload="2024-02-20" />
                <ImageCard src={urlImagem} nome={nomeImagem} tamanho="10MB" dataUpload="2024-02-20" />
                <ImageCard src={urlImagem} nome={nomeImagem} tamanho="10MB" dataUpload="2024-02-20" />
            </section>
        </Template>
    )
}