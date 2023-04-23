export interface IAddress {
    id: number;
    country: string;
    city: string;
    street: string;
    zip_code?: string;
    is_default: boolean;
    client_id: number;
    created_at: string;
    updated_at: string;
}