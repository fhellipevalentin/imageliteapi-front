import { Template } from "@/components/Template";
import { ImageCard } from "@/components/ImageCard";

export default function GaleriaPage () {
    return (
        <Template>
            <section className="grid grid-cols-3 gap-8">
                <ImageCard src="https://retornar.com.br/wp-content/uploads/2024/02/MGN04846-Sorteio-Jeep-Renegade.jpg" nome="Jeep Renegade" tamanho="10MB" dataUpload="2024-02-20" />
                <ImageCard src="https://retornar.com.br/wp-content/uploads/2024/02/MGN04846-Sorteio-Jeep-Renegade.jpg" nome="Jeep Renegade" tamanho="10MB" dataUpload="2024-02-20" />
                <ImageCard src="https://retornar.com.br/wp-content/uploads/2024/02/MGN04846-Sorteio-Jeep-Renegade.jpg" nome="Jeep Renegade" tamanho="10MB" dataUpload="2024-02-20" />
            </section>
        </Template>
    )
}