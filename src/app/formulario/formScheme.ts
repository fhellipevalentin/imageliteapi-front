import * as Yup from "yup";

export interface FormProps {
  name: string;
  tags: string;
  file: File | null;
}

export const initialValues: FormProps = {
  name: "",
  tags: "",
  file: null,
};

export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .required("* Nome é obrigatório")
    .max(50, "* Nome deve ter no máximo 50 caracteres"),
  tags: Yup.string().trim().required("* Tags são obrigatórias"),
  file: Yup.mixed()
    .required("* Arquivo é obrigatório")
    .test(
      "is-file-or-blob",
      "* O arquivo deve ser um File ou Blob válido",
      (value) => value instanceof File || value instanceof Blob,
    )
    .test(
      "file-size",
      "* O arquivo deve ter no máximo 5MB",
      (value) => !value || (value as File).size <= 5 * 1024 * 1024, // 5MB em bytes
    )
    .test(
      "file-type",
      "* Apenas imagens são permitidas (JPEG, PNG, GIF)",
      (value) => {
        if (!value) return true;
        const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
        return allowedTypes.includes((value as File).type);
      },
    ),
});
