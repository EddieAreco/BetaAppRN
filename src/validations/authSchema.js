import { object, string, ref } from 'yup';

export const authSchema = object().shape({
    email: string()
    .required('Email es requerido')
    .email('Email es invalido'),
    password: string()
    .required('Password es requerido')
    .min(6, 'El password debe tener al menos 6 caracteres'),
    repeatPassword: string()
    .oneOf([ref('password'), null], 'Los passwords no coinciden')
    .required('Confirmar password es requerido'),
})