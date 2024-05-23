import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from 'yup';

const loginSchema = Yup.object({
    email:Yup.string().email("Please enter valid email address").required("Please fill this field"),
    password:Yup.string().required("Please fill this field").min(6,"Plese enter minimum 6 characters for password")
})

export const loginValidation = () => useForm ({
    resolver:yupResolver(loginSchema)
});

const registerSchema = Yup.object({
    email:Yup.string().email("Please enter valid email address").required("Please fill this field"),
    password:Yup.string().required("Please fill this field").min(6,"Plese enter minimum 6 characters for password"),
    cnfPassword: Yup.string().required("Please fill this field").oneOf([Yup.ref('password')],"Password does not match")
});


export const registerValidation = () => useForm ({
    resolver:yupResolver(registerSchema)
});

