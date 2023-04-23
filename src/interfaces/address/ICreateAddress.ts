export interface ICreateAddress {
    country: string;
    city: string;
    street: string;
    zip_code?: string;
    is_default: boolean;
    client_id: number;
}