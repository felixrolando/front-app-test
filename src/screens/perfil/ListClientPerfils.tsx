export const ListClientPerfils = (): JSX.Element => {
  return (
    <div className="container max-w-7xl mx-auto mt-8">
      <div className="mb-4">
        <h1 className="font-serif text-3xl font-bold underline decoration-gray-400">
          Perfils
        </h1>
        <div className="flex justify-end">
          <button
            className="px-4 py-2 rounded-md bg-sky-500 text-sky-100 hover:bg-sky-600"
            onClick={() => {}}
          >
            Create Perfil
          </button>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <div>
          <a
            href="#"
            className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <div className="flex items-center mb-4 space-x-2">
              <span className="text-xs text-gray-500"> Created At</span>
              <span className="text-xs text-gray-500">20/12/22</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
