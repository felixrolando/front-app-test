import { IClient } from "../../interfaces/client/IClient";
import { ICreateClient } from "../../interfaces/client/ICreateClient";
const apiUrl = process.env.REACT_APP_API_SERVER;

export async function listAllClient(): Promise<IClient[]> {
    const response = await fetch(`${apiUrl}/clients`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return await response.json();
}

export async function createClient(data: ICreateClient): Promise<IClient> {
    const response = await fetch(`${apiUrl}/clients`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    return await response.json();
}


export async function updateClient(data: ICreateClient, clientId: number): Promise<IClient> {
    const response = await fetch(`${apiUrl}/clients/${clientId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    return await response.json();
}

export async function deleteClient(clientId: number): Promise<boolean> {
    const response = await fetch(`${apiUrl}/clients/${clientId}`, {
        method: 'DELETE'
    })

    if (response.ok) {
        return true
    }

    return false
}




