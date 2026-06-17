import api from "./axios";

export const getAccessToken = () => {
    if (typeof window !== 'undefined') {
        return localStorage.getItem("access_token");
    }
    return null;
}
export const getRefreshToken = () => {
    if (typeof window !== 'undefined') {
        return localStorage.getItem("refresh_token");
    }
    return null;
}
export const setTokens = (
    accessToken: string,
    refreshToken: string,
) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem("access_token", accessToken);
        localStorage.setItem("refresh_token", refreshToken);
    }
}

export const clearTokens = () => {
    if (typeof window !== 'undefined') {
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
    }
}

api.interceptors.request.use(
    (config) => {
        const publicPaths = ['/users/login/', '/users/register/'];
        const isPublic = publicPaths.some((p) => config.url?.includes(p));

        if (!isPublic) {
            const accessToken = getAccessToken();
            if (accessToken) {
                config.headers.Authorization = `Bearer ${accessToken}`;
            }
        }
        return config;
    },
    (error) => Promise.reject(error)
);


export const login = async (
    username: string,
    password: string,
) => {
    const response = await api.post("/users/login/", {
        username,
        password,
    });
    return response.data;
}
interface RegisterData {
    firstName: string;
    lastName: string;
    username: string;
    phone: string;
    email: string;
    password: string;
}

export const register = async (data: RegisterData) => {
    const response = await api.post("/users/register/", {
        username: data.username,
        password: data.password,
        email: data.email,
        phone: data.phone,
        first_name: data.firstName,
        last_name: data.lastName,
    });
    return response.data;
}

