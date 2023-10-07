import {axiosInstance} from "@/util/axiosInstance";

export const numberLists = async () => {
    try {
        const res = await axiosInstance.get('/numberList')
        return res.data;
    }catch (e) {
        throw e;
    }
}
