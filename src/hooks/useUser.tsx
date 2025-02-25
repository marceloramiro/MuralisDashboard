import { getUser } from "@/services/user";
import { createContext, useContext, useState } from "react";

interface UserProviderProps {
  children: React.ReactNode;
}

const UserContext = createContext({
  user: {
    name: "",
    email: "",
  },
  handleGetUser: () => {},
});

const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  const handleGetUser = async () => {
    try {
      const userResponse = await getUser();
      setUser(() => ({ ...userResponse.data }));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <UserContext.Provider value={{ user, handleGetUser }}>
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUser must be used within an UserProvider");
  }

  return context;
};

export { UserProvider, useUser };
