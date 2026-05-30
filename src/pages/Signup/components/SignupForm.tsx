import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import type { userI } from '../../../interfaces/user';
import { createUser } from '../../../apis';
import { useNavigate } from 'react-router';

function SignupForm(){
    const navigate = useNavigate();

    // Schéma de validation des données
    const userSchema = yup.object({
        firstname: yup
                .string()
                .typeError('Chaîne de caractères obligatoire')
                .required('Prénom obligatoire')
                .min(3, 'Minimum 3 caractères')
                .max(20, 'Maximum 20 caractères'),
        lastname:yup
                .string()
                .typeError('Chaîne de caractères obligatoire')
                .required('Prénom obligatoire')
                .min(3, 'Minimum 3 caractères')
                .max(20, 'Maximum 20 caractères'),
        email: yup.string().email('Format invalide').required('Email obligatoire'),
        password: yup
            .string()
            .min(6, "Min 6 caractères")
            .max(15, "Max 15 caractères"),
        confirmPassword: yup
            .string()
            .min(6, "Min 6 caractères")
            .max(15, "Max 15 caractères")
            .oneOf(
                [yup.ref("password", "")],
                "Les mots de passe ne correspondent pas",
            ),   
    }
    );

    // Configuration du formulaire avec React Hook Form
    const defaultValues = {
        lastname: '',
        firstname: '',
        email: '',
        password: '',
        confirmPassword: ''
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
    const submit = async (values) => {
        console.log(`Formulaire soumis :`, values);
        clearErrors(); // nettoyer les erreurs du formulaire

        try{
            const {confirmPassword, ...payload} = values;

            const user = await createUser(payload);
            
            if(user){
                navigate('/');
            }

        }catch(error){
            console.log('Erreur');
            setError('root.serverError',{
                type:'server',
                message: error.message ||  'Erreur inconnue'
            })
        }
    };

    return (
        <>
                <form action="#" method="POST" onSubmit={handleSubmit((values) => submit(values))}>
                    <div>
                        <label htmlFor="lastname">Nom</label>
                        <input {...register("lastname")}  type="text"  id="lastname" className='form-control' />    
                        {errors?.lastname && ( 
                            <ul className='text-danger'> 
                                {Object.keys(errors.lastname.types).map((k) => ( 
                                <li key={k}>{errors.lastname.types[k]}</li> 
                                ))} 
                            </ul> 
                        )} 
                    </div>
                    <div className='mt-3' >
                        <label htmlFor="firstname" className="form-label">Prénom</label>
                        <input {...register('firstname')} type="text" id="firstname" className='form-control' />
                        {errors?.firstname && ( 
                            <ul className='text-danger'> 
                                {Object.keys(errors.firstname.types).map((k) => ( 
                                <li key={k}>{errors.firstname.types[k]}</li> 
                                ))} 
                            </ul> 
                        )}
                    </div>
                    <div className='mt-3'>
                        <label htmlFor="email">Email</label>
                        <input  {...register('email')} type="email"  id="email" className='form-control' />    
                        {errors?.email && ( 
                            <ul className='text-danger'> 
                                {Object.keys(errors.email.types).map((k) => ( 
                                <li key={k}>{errors.email.types[k]}</li> 
                                ))} 
                            </ul> 
                        )}
                    </div>
                    <div className='mt-3'>
                        <label htmlFor="password">Mot de passe</label>
                        <input  {...register('password')} type="password"  id="password" className='form-control' />   
                        {errors?.password && ( 
                            <ul className='text-danger'> 
                                {Object.keys(errors.password.types).map((k) => ( 
                                <li key={k}>{errors.password.types[k]}</li> 
                                ))} 
                            </ul> 
                        )} 
                    </div>
                    <div className='mt-3'>
                        <label htmlFor="confirmPassword" className='ms-3'>Confirmation de mot de passe</label>
                        <input {...register('confirmPassword')} type="password"  id="confirmPassword" className='form-control'/>    
                        {errors?.confirmPassword && ( 
                            <ul className='text-danger'> 
                                {Object.keys(errors.confirmPassword.types).map((k) => ( 
                                <li key={k}>{errors.confirmPassword.types[k]}</li> 
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
                </form>           
        </>
    )
}

export default SignupForm;