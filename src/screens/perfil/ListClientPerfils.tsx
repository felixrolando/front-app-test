import { useMutation, useQuery } from "react-query";
import { useState } from "react";
import { CreatePerfilModal } from "./Modals/CreatePerfilModal";
import { useParams } from "react-router-dom";
import { deletePerfil, listAllPerfil } from "../../api/perfil/perfil.services";
import { IPerfil } from "../../interfaces/perfil/IPerfil";
import { AlertDialog } from "../../components/AlertDialog";
import { toast } from "react-hot-toast";
import { UpdatePerfilModal } from "./Modals/UpdatePerfilModal";

export const ListClientPerfils = (): JSX.Element => {
  const { clientId } = useParams();
  const [createPerfil, setCreatePerfil] = useState<boolean>(false);
  const { data } = useQuery("listPerfil", listAllPerfil);
  const [perfil, setPerfil] = useState<IPerfil>();
  const [deletePerfilModal, setDeletePerfilModal] = useState<boolean>(false);
  const [updatePerfilModal, setUpdatePerfilModal] = useState<boolean>(false);

  const toggleModalDeletePerfil = () => setDeletePerfilModal((value) => !value);
  const toggleModalPerfil = () => setCreatePerfil((value) => !value);
  const toggleModaUpdatePerfil = () => setUpdatePerfilModal((value) => !value);

  const { mutate: deletePerfilAction } = useMutation(
    () => deletePerfil(perfil ? perfil.id : 0),
    {
      onSuccess: async (data) => {
        toast.success("Perfil deleted successfully.");
        toggleModalDeletePerfil();
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );

  const handleDeleteClick = (event: any, row: IPerfil) => {
    toggleModalDeletePerfil();
    event.preventDefault();
    setPerfil(row);
  };

  const handleUpdateClick = (event: any, row: IPerfil) => {
    toggleModaUpdatePerfil();
    event.preventDefault();
    setPerfil(row);
  };

  return (
    <div className="container max-w-7xl mx-auto mt-8">
      {createPerfil && (
        <CreatePerfilModal
          closeModal={toggleModalPerfil}
          clientId={Number(clientId)}
        />
      )}
      {perfil && deletePerfilModal && (
        <AlertDialog
          closeAlert={toggleModalDeletePerfil}
          text={`Are you sure you want to delete this perfil: ${perfil.description.toUpperCase()}?`}
          action={deletePerfilAction}
          type="Info"
          color="red"
        />
      )}
      {perfil && updatePerfilModal && (
        <UpdatePerfilModal
          closeModal={toggleModaUpdatePerfil}
          perfil={perfil}
        />
      )}
      <div className="mb-4">
        <h1 className="font-serif text-3xl font-bold underline decoration-gray-400">
          Perfils
        </h1>
        <div className="flex justify-end">
          <button
            className="px-4 py-2 rounded-md bg-sky-500 text-sky-100 hover:bg-sky-600"
            onClick={toggleModalPerfil}
          >
            Create Perfil
          </button>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {data?.map((perfil) => {
          return (
            <div key={perfil.id}>
              <a
                href="#"
                className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {perfil.description}
                </h5>
                <div className="flex items-center mb-4 space-x-2">
                  <span className="text-xs text-white"> Created At</span>
                  <span className="text-xs text-white">
                    {perfil.created_at}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="text-sm font-medium">
                    <button
                      className="text-white hover:text-indigo-900"
                      onClick={(event: any) => handleUpdateClick(event, perfil)}
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
                    </button>
                  </div>
                  <div className="text-sm font-medium">
                    <button
                      onClick={(event: any) => handleDeleteClick(event, perfil)}
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
                    </button>
                  </div>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};
