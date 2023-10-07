import {axiosInstance} from "@/util/axiosInstance";
import questionNo from "@/pages/dashboard";

export const questionByName = async (questionName) => {
    try {
        const res = await axiosInstance.get(`/questions/${questionName}`)
        return res.data;
    }catch (e) {
        console.log(e)
    }
}