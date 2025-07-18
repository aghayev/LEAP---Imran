import React from "react";
import { UserData } from "@/constants/user.constants";

type ListProps = {
    users: UserData[] | null;
}

const HeaderRow: React.FC = () => (
        <thead className="bg-gray-50">
      <tr>
        <th
          scope="col"
          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
        >
          ID
        </th>
        <th
          scope="col"
          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
        >
          Name
        </th>
        <th
          scope="col"
          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
        >
          Permissions
        </th>
      </tr>
    </thead>
  );


const UserDataRow: React.FC<{ user: UserData }> = ({ user }) => (
    <tr key={user.id} className="hover:bg-gray-50">
    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
      {user.id}
    </td>
    <td className="px-6 py-4 whitespace-nowrap">
      <div className="flex items-center">
        <div className="ml-4">
          <div className="text-sm font-medium text-gray-900">
            {user.name}
          </div>
        </div>
      </div>
    </td>
    <td className="px-6 py-4 whitespace-nowrap">
      <span
        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
          user.permissions === "admin"
            ? "bg-blue-100 text-blue-800"
            : "bg-green-100 text-green-800"
        }`}
      >
        {user.permissions}
      </span>
    </td>
  </tr>
)


const NotFoundRow: React.FC = () => (
        <tr>
        <td colSpan={5} className="px-6 py-4 text-center text-sm text-gray-500">
        No users found.
        </td>
    </tr>
)

export const List: React.FC<ListProps> = ({ users })  => {
  return (
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <HeaderRow />
            <tbody className="bg-white divide-y divide-gray-200">
              {users && users.length > 0 ? 
                users.map((user: UserData) => (<UserDataRow user={user} key={user.id} />)) : <NotFoundRow/>}
            </tbody>
          </table>
        </div>
      </div>
    )
};

export default List