export const TableHead = (): JSX.Element => {
  return (
    <thead>
      <tr>
        <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
          ID
        </th>
        <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
          First Name
        </th>
        <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
          Last Name
        </th>
        <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
          Phone
        </th>
        <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
          Created_At
        </th>
        <th
          className="px-6 py-3 text-sm text-left text-gray-500 border-b border-gray-200 bg-gray-50"
          colSpan={4}
        >
          Action
        </th>
      </tr>
    </thead>
  );
};
