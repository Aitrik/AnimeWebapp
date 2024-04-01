import axios from "axios"

const adminUrl="https://api.jikan.moe"

export const baseURL=adminUrl

const axiosInstance=axios.create({
    baseURL,
})
export default axiosInstance