import { useQuery } from "react-query";
import { listAllClient } from "../../api/client/client.services";
import { TableRow } from "../../components/TableRow";
import { TableHead } from "../../components/TableHead";
import { CreateClientModal } from "./CreateClientModal";
import { useState } from "react";

export const ListClient = (): JSX.Element => {
  const { data } = useQuery("listClient", listAllClient);
  const [createClient, setCreateClient] = useState<boolean>(false);

  const toggleModalClient = () => setCreateClient((value) => !value);

  return (
    <div className="container max-w-7xl mx-auto mt-8">
      <div className="mb-4">
        <h1 className="font-serif text-3xl font-bold underline decoration-gray-400">
          Clients
        </h1>
        <div className="flex justify-end">
          <button
            className="px-4 py-2 rounded-md bg-sky-500 text-sky-100 hover:bg-sky-600"
            onClick={toggleModalClient}
          >
            Create Client
          </button>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
            <table className="min-w-full">
              <TableHead />
              <tbody className="bg-white">
                {data && <TableRow data={data} />}
              </tbody>
            </table>
          </div>
          {createClient && <CreateClientModal closeModal={toggleModalClient} />}
        </div>
      </div>
    </div>
  );
};
