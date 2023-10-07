import {useMutation} from "@tanstack/react-query";
import {createUser, loginUser} from "@/apis/user-api";

const useUserSignUpMutation = () => {
    return useMutation({
        mutationKey: ['post', 'users'],
        mutationFn: createUser,
    });
}

const useUserSignInMutation = () => {
    return useMutation({
        mutationKey: ['post', 'login'],
        mutationFn: loginUser,
    });
}

export const useUserSignUp = () => {
    return {
        useUserSignUpMutation,
        }
    }

export const useUserSignIn = () => {
    return {
        useUserSignInMutation,
    }
}
