import { useLoaderData } from "react-router";
import { useEffect, useState } from "react";
import { signin, signout } from "../../apis/auth";
import { AuthContext } from "../../context/AuthContext";

function AuthProvider({ children }) {
  const initialUser = useLoaderData();
  const [currentUser, setCurrentUser] = useState(initialUser?.user ?? null);

  useEffect(() => {
    setCurrentUser(initialUser?.user ?? null);
    console.log("Utilisateur courant", initialUser?.user);
  }, [initialUser]);

  // Fonction de login
  const login = async (credentials) => {
    const newUser = await signin(credentials);
    // `signin` peut renvoyer soit l'objet user, soit { user }
    setCurrentUser(newUser?.user ?? newUser ?? null);
    return newUser;
  };

  // Fonction de logout
  const logout = async () => {
    await signout();
    setCurrentUser(null);
  };

  return (
    <>
      {/** Injecter au contexte l'utilisateur courant, le login avec mise à jour de l'état local, et logout et mise à jour de l'état local */}
      <AuthContext.Provider value={{ currentUser, login, logout }}>
        {/** retourner l'ensemble de l'application */}
        {children}
      </AuthContext.Provider>
    </>
  );
}

export default AuthProvider;
