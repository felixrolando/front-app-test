import { IAddress } from "../../interfaces/address/IAddress";
import { ICreateAddress } from "../../interfaces/address/ICreateAddress";
const apiUrl = process.env.REACT_APP_API_SERVER;

export async function listAllAddress(): Promise<IAddress[]> {
    const response = await fetch(`${apiUrl}/api/V1/address`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return await response.json();
}

export async function createAddress(data: ICreateAddress, clientId: number): Promise<IAddress> {
    const body = {
        ...data,
        client_id: clientId
    }
    const response = await fetch(`${apiUrl}/api/V1/address`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })

    if (!response.ok) {
        const { error } = await response.json();
        throw new Error(error)
    }

    return await response.json();
}


export async function updateAddress(data: ICreateAddress, addressId: number): Promise<IAddress> {
    const response = await fetch(`${apiUrl}/api/V1/address/${addressId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    return await response.json();
}

export async function deleteAddress(addressId: number): Promise<boolean> {
    const response = await fetch(`${apiUrl}/api/V1/address/${addressId}`, {
        method: 'DELETE'
    })

    if (response.ok) {
        return true
    }

    return false
}




