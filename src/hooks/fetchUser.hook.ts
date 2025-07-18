import { useState, useEffect } from "react";
import { API_URL } from "@/constants/api.constants";
import { UserData } from "@/constants/user.constants";

interface UseFetchUserResult {
  users: UserData[] | null;
  loading: boolean;
  error: Error | null;
}

export const useFetchUser = (): UseFetchUserResult => {
  const [users, setUsers] = useState<UserData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`${API_URL}/user`);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const { data } = await response.json();

        setUsers(data);
      } catch (err) {
        setError(
          err instanceof Error ? err : new Error("Failed to fetch user")
        );
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return { users, loading, error };
};
