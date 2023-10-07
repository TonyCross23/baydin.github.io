import {axiosInstance} from "@/util/axiosInstance";

export const questionLists = async (value) => {
    try {
        const res = await axiosInstance.get('/questions')
        return res.data;
    }catch (e) {
        console.log(e)
    }
}
