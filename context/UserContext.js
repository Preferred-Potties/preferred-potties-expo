import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { getUser } from "../services/authServices.js";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchUser() {
      const data = await getUser();
      setUser(data);
      setLoading(false);
    }
    fetchUser();
  }, []);
  const contextValue = useMemo(
    () => ({ user, setUser, loading, setLoading }),
    [user, setUser, loading, setLoading]
  );
  return (
    <UserContext.UserProvider value={contextValue}>
      {children}
    </UserContext.UserProvider>
  );
};

const useCurrentUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("user called outside of UserProvider Component");
  }
  return context;
};
export { UserProvider, UserContext, useCurrentUser };
