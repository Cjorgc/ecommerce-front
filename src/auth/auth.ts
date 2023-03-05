export const isAuthenticated = () => {
    return localStorage.getItem("token") != null
}

export const login = (token: string) => {
    localStorage.setItem("token", token)
}

export const logout = () => {
    localStorage.removeItem("token")
}

export const getToken = (): string | null => {
    return localStorage.getItem("token")
}