'use client';

interface ImageCardProps {
    nome?: string;
    tamanho?: number;
    dataUpload?: string;
    src?: string;
    extension?: string;
}

export const ImageCard: React.FC<ImageCardProps> = ({ nome, tamanho, dataUpload, src, extension }: ImageCardProps) => {

    function downloadImage() {
        window.open(src, '_blank');
    }

    return (
        <div className="card relatiive bg-white rounded-md shadow-md 
        transition-form ease-in duration-300 transform hover:shadow-lg hover:-translate-y-2">
            <img src={src} className="h-56 w-full object-cover rounded-t-md" />
            <div className="card-body p-4">
                <h5 onClick={downloadImage} className="text-xl font-semibold mb-2 text-gray-600">{nome + '.' + extension?.toLowerCase()}</h5>
                <p className="text-gray-500">{formatBytes(tamanho)}</p>
                <p className="text-gray-600">{dataUpload}</p>
            </div>
        </div>
    );
}

function formatBytes(bytes: number = 0, decimals = 2) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
}