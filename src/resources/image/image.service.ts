import { Image } from "./image.resources";

class ImageService {
    baseURL: string = "http://localhost:8081/v1/images";

    async buscar(query: string = "", extension: string = "") : Promise<Image[]> {
        const response = await fetch(`${this.baseURL}?query=${query}&extension=${extension}`);
        return await response.json() as Image[];
    }
}

export const useImageService = () => new ImageService();