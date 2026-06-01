import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import type { userI } from '../../../interfaces/user';
import { Navigate, useNavigate } from 'react-router';
import { signin } from '../../../apis/auth';
import { useContext } from 'react';
import {AuthContext} from '../../../context/AuthContext';

function SigninForm(){
const {currentUser, login} = useContext(AuthContext);

    // Schéma de validation des données
    const userSchema = yup.object({
        email: yup.string().email('Format invalide').required('Email obligatoire'),
        password: yup
            .string()
            .min(6, "Min 6 caractères")
            .max(15, "Max 15 caractères") 
    }
    );

    // Configuration du formulaire avec React Hook Form
    const defaultValues = {
        email: '',
        password: '',
    };

    const {
        register, 
        formState: {isSubmitting, errors},
        handleSubmit,
        setError,
        clearErrors
    } = useForm<userI>({
        defaultValues: defaultValues,
        resolver: yupResolver(userSchema),
        mode: 'onSubmit', // validation des données entrantes à la soumission du formulaire 
        criteriaMode:'all'
    })

    // Envoi du nouvel utilisateur à l'API
    const submit = async (credentials) => {
        console.log(`Identifiants du formulaire :`, credentials);
        clearErrors(); // nettoyer les erreurs du formulaire

        try{
            const user = await login(credentials);

        }catch(error){
            setError('root.serverError',{
                type:'server',
                message: error.message ||  'Erreur inconnue'
            })
        }
    };

    return (
        <>
        {currentUser ? 
            <Navigate to='/' /> 
                : 
            (<form action="#" method="POST" onSubmit={handleSubmit((values) => submit(values))}>
                 <div className='mt-3'>
                        <label htmlFor="email">Email</label>
                        <input  {...register('email')} type="email"  id="email" className='form-control' />    
                        {errors?.email && ( 
                            <ul className='text-danger'> 
                                {Object.keys(errors?.email?.types).map((k) => ( 
                                <li key={k}>{errors?.email?.types[k]}</li> 
                                ))} 
                            </ul> 
                        )}
                    </div>
                    <div className='mt-3'>
                        <label htmlFor="password">Mot de passe</label>
                        <input  {...register('password')} type="password"  id="password" className='form-control' />   
                        {errors?.email && ( 
                            <ul className='text-danger'> 
                                {Object.keys(errors?.password?.types).map((k) => ( 
                                <li key={k}>{errors?.password?.types[k]}</li> 
                                ))} 
                            </ul> 
                        )} 
                    </div>
                    <button type="submit" className="btn btn-primary mt-4" disabled={isSubmitting}>Soumettre</button>
                    {errors?.root?.serverError && ( 
                        <p className="text-danger mt-3"> 
                            {errors?.root?.serverError.message} 
                        </p> 
                    )} 
                </form>     )}                   
        </>
    )
}

export default SigninForm;