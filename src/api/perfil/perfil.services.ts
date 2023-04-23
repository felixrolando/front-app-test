import { ICreatePerfil } from "../../interfaces/perfil/ICreatePerfil";
import { IPerfil } from "../../interfaces/perfil/IPerfil";
const apiUrl = process.env.REACT_APP_API_SERVER;

export async function listAllPerfil(): Promise<IPerfil[]> {
    const response = await fetch(`${apiUrl}/api/V1/perfil`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return await response.json();
}

export async function createPerfil(data: ICreatePerfil, clientId: number): Promise<IPerfil> {
    const body = {
        ...data,
        client_id: clientId
    }
    const response = await fetch(`${apiUrl}/api/V1/perfil`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
    return await response.json();
}


export async function updatePerfil(data: ICreatePerfil, perfilId: number): Promise<IPerfil> {
    const response = await fetch(`${apiUrl}/api/V1/perfil/${perfilId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    return await response.json();
}

export async function deletePerfil(perfilId: number): Promise<boolean> {
    const response = await fetch(`${apiUrl}/api/V1/perfil/${perfilId}`, {
        method: 'DELETE'
    })

    if (response.ok) {
        return true
    }

    return false
}




