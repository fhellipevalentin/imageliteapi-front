import { Image } from "./image.resources";

class ImageService {
    baseURL: string = "http://localhost:8080/v1/images";

    async buscar() : Promise<Image[]> {
        const response = await fetch(this.baseURL);
        return await response.json() as Image[];
    }
}

export const useImageService = () => new ImageService();