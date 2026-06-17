import { ApiErrorResponse } from "@/types/api";

export const getErrorMessage = (error: any): string => {
    const data = error?.response?.data as ApiErrorResponse;

    if (data?.errors) {
        const firstKey = Object.keys(data.errors)[0];
        const firstMessage = data.errors[firstKey]?.[0];

        return `${firstKey}: ${firstMessage}`;
    }

    return data?.message || error?.message || "Terjadi kesalahan";
};