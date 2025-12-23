'use client';

import { Button } from "@/components/button/Button";
import { InputText } from "@/components/input/InputText"
import { Template } from "@/components/Template"
import { ArrowLeftIcon } from '@heroicons/react/24/outline'; 
import { useFormik } from "formik";
import Link from "next/link"
import { useState } from "react";
import { RenderIf } from "@/components/Template";


interface FormProps {
    nomeImagem: string;
    tags: string;
    imagem: File | null;
}


export default function FormularioPage() {

    const [ imagePreviewUrl, setImagePreviewUrl ] = useState<string | null>(null);

    const formik = useFormik<FormProps>({
        initialValues: {
            nomeImagem: "",
            tags: "",
            imagem: null
        },
        onSubmit: (values) => {
            console.log(values);
        }
    });

    function handleImageChange(event: React.ChangeEvent<HTMLInputElement>) {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            formik.setFieldValue("imagem", file);
            const imagemUrl = URL.createObjectURL(file);
            setImagePreviewUrl(imagemUrl);
        }
    }

    return (
        <Template>
            <section className="flex flex-col items-center justify-center my-8">
              <h5 className="mt-3  mb-10 text-3xl font-extrabold tracking-tight text-gray-900">Nova Imagem:</h5>    
                <form  onSubmit={formik.handleSubmit} className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md">
                    <div className="grid grid-cols-1 gap-6 mb-6">
                        <Link href="/galeria">
                            <Button type="button" style="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mb-4 flex items-center">
                                <ArrowLeftIcon className="w-5 h-5 mr-2" /> Voltar
                            </Button>
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 gap-6 mb-6">
                        <label className="block font-medium  text-gray-700 mb-2">Nome da Imagem:</label>
                        <InputText id="nomeImagem" onChange={formik.handleChange} placeholder="digite o nome da imagem" style="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" /> 
                    </div>
                    <div className="grid grid-cols-1 gap-6 mb-6">
                        <label className="block font-medium text-gray-700 mb-2">Tags:</label>
                        <InputText placeholder= "digite as tags da imagem separadas por vírgula" style="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" /> 
                    </div>
                    <div className="grid grid-cols-1 gap-6 mb-6">
                        <label className="block font-medium text-gray-700 mb-2">Imagem:</label>
                        <div className="flex items-center justify-center w-full">
                            <label className="flex flex-col border-4 border-dashed w-full h-32 hover:bg-gray-100 hover:border-blue-300 group">
                                <div className="flex flex-col items-center justify-center pt-7 ">
                                    <RenderIf condition={imagePreviewUrl == null}>
                                        <svg className="w-10 h-10 text-gray-400 group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                                        </svg>
                                    </RenderIf>
                                    <RenderIf condition={imagePreviewUrl === null}>
                                        <p className="text-sm text-gray-400 group-hover:text-blue-600 pt-1 tracking-wider">Selecione uma imagem</p>
                                    </RenderIf>
                                    <RenderIf condition={imagePreviewUrl !== null}>
                                        <img src={imagePreviewUrl!} alt="Preview" className="max-h-28 -mt-6" />
                                    </RenderIf>
                                </div>
                                <input  type="file" className="hidden" onChange={handleImageChange} />         
                            </label>
                        </div>
                    </div>
                    <Button label="Enviar" type="submit" style="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" />
                    <Button label="Cancelar" type="reset" style="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ml-4" />
                </form>
            </section>
        </Template>
    )
}