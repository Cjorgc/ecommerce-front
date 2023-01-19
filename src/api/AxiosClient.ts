import axios, { AxiosError, AxiosHeaders } from "axios";

const axiosClient = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
})

export async function get<T>(url: string, headers?: AxiosHeaders) {
    try {
        let response = await axiosClient.get<T>(url, {headers});
        return response.data
    } catch (error: unknown) {
        if (error instanceof AxiosError) throw Error(error.response?.data.message)
        throw error
    }
}

export async function post<T>(url: string, payload: any, headers?: AxiosHeaders) {
    try {
        let response = await axiosClient.post<T>(url, payload, { headers });
        return response.data
    } catch (error: unknown) {
        if (error instanceof AxiosError) throw Error(error.response?.data.message)
        throw error
    }
}
