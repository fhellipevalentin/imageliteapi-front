import { Image } from "./image.resources";

class ImageService {
    baseURL: string = "http://localhost:8081/v1/images";

    async buscar(query: string = "", extension: string = "") : Promise<Image[]> {
        const response = await fetch(`${this.baseURL}?query=${query}&extension=${extension}`);
        return await response.json() as Image[];
    }

    async salvar(imageData: FormData) : Promise<string> {
        const response = await fetch(this.baseURL, {
            method: "POST",
            body: imageData
        });
        return response.headers.get("Location") || "";
    }
}

export const useImageService = () => new ImageService();