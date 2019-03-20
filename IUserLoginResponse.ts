export interface IUserLoginResponse {
    success?: boolean,
    data?: {
        token: string
    },
    errors?: string[],
    error?: string
}