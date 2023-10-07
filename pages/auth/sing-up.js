import React, {useEffect, useState} from 'react';
import BaseLayout from "@/layouts/BaseLayout";
import {useMutation} from "@tanstack/react-query";
import {useRouter} from "next/router";
import {createUser} from '@/apis/user-api';
import {useUserSignUp} from "@/hooks/useUser";

const SingUp = () => {

    const router = useRouter()
    const [username , setUsername] = useState('')
    const [email , setEmail] = useState('')
    const [password , setPassword] =useState('')
    const [error , setError] = useState(false)


    const {useUserSignUpMutation} = useUserSignUp()
    const {mutateAsync : createUser} = useUserSignUpMutation()

    const handleSubmit = async (e) => {
       e.preventDefault()
        await createUser({name : username,email,password})
            await router.push('/auth/sing-in')
            setUsername('')
            setEmail('')
            setPassword('')
            console.table({username,email,password})
    }

    useEffect(() => {
        router.prefetch('/auth/sing-in')
    }, []);

    return (
        <BaseLayout>
            <div className="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 max-w-md mx-auto mt-20">

                <form method="POST" onSubmit={handleSubmit}>

                    <h5 className="text-xl font-medium text-gray-900 dark:text-white mb-4">
                        Sign in
                    </h5>

                    <div className="relative z-0 w-full mb-6 group">
                        <input
                            type="text"
                            name="floating_name"
                            id="floating_name"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            onChange={e => setUsername(e.target.value) }
                            required=""
                        />
                        <label
                            htmlFor="floating_email"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Name
                        </label>
                    </div>


                    <div className="relative z-0 w-full mb-6 group">
                        <input
                            type="email"
                            name="floating_email"
                            id="floating_email"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            onChange={e => setEmail(e.target.value) }
                            required=""
                        />
                        <label
                            htmlFor="floating_email"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Email
                        </label>
                    </div>

                    <div className="relative z-0 w-full mb-6 group">
                        <input
                            type="password"
                            name="floating_password"
                            id="floating_password"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            onChange={e => setPassword(e.target.value) }
                            required=""
                        />
                        <label
                            htmlFor="floating_password"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Password
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Sing Up
                    </button>
                </form>

            </div>
        </BaseLayout>
    );
};

export default SingUp;