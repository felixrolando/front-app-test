import { useState } from "react";
import { IClient } from "../interfaces/IClient";
import { AlertDeleteClient } from "./Alert/DeleteClient";
import { UpdateClientModal } from "../screens/UpdateClientModal";

type Props = {
  data: IClient[];
};

export const TableRow = ({ data }: Props): JSX.Element => {
  const [deleteClientModal, setDeleteClientModal] = useState<boolean>(false);
  const [updateClientModal, setUpdateClientModal] = useState<boolean>(false);
  const [client, setClient] = useState<IClient>();

  const toggleModalDeleteClient = () => setDeleteClientModal((value) => !value);
  const toggleModaUpdateClient = () => setUpdateClientModal((value) => !value);

  const handleDeleteClick = (event: any, row: IClient) => {
    toggleModalDeleteClient();
    event.preventDefault();
    setClient(row);
  };

  const handleUpdateClick = (event: any, row: IClient) => {
    toggleModaUpdateClient();
    event.preventDefault();
    setClient(row);
  };

  return (
    <>
      {client && deleteClientModal && (
        <AlertDeleteClient
          closeModal={toggleModalDeleteClient}
          client={client}
        />
      )}
      {client && updateClientModal && (
        <UpdateClientModal
          closeModal={toggleModaUpdateClient}
          client={client}
        />
      )}
      {data.map((row) => {
        return (
          <tr key={row.id}>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
              <div className="flex items-center">{row.id}</div>
            </td>

            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
              <div className="text-sm leading-5 text-gray-900">{row.name}</div>
            </td>

            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
              <p>{row.phone}</p>
            </td>

            <td className="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
              <span>{row.created_at}</span>
            </td>

            <td className="text-sm font-medium leading-5 text-center whitespace-no-wrap border-b border-gray-200 ">
              <a
                rel="noreferrer"
                onClick={(event: any) => handleUpdateClick(event, row)}
                className="text-indigo-600 hover:text-indigo-900"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </a>
            </td>

            <td className="text-sm font-medium leading-5 text-center whitespace-no-wrap border-b border-gray-200 ">
              <a href="!#" className="text-gray-600 hover:text-gray-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
              </a>
            </td>
            <td className="text-sm font-medium leading-5 text-center whitespace-no-wrap border-b border-gray-200 ">
              <a href="!#" className="text-green-600 hover:text-green-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </a>
            </td>
            <td className="text-sm font-medium leading-5 whitespace-no-wrap border-b border-gray-200 ">
              <a
                rel="noreferrer"
                onClick={(event: any) => handleDeleteClick(event, row)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-red-600 hover:text-red-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </a>
            </td>
          </tr>
        );
      })}
    </>
  );
};
