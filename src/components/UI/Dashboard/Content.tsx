import React from "react";
import { List } from "@/components/UI/Dashboard/List";
import { useFetchUser } from "@/hooks/fetchUser.hook";

export const Content: React.FC = ()  => {
    const { users, loading, error } = useFetchUser();

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 mt-10">
    {loading && <div className="p-4">Loading...</div>}
    {error && (
      <div className="p-4 text-red-600">Error: {error.message}</div>
    )}
    {!loading && !error && (
      <List users={users} />
    )}
  </main>
);
}

export default Content