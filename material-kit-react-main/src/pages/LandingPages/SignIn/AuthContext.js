import { createContext, useState, useMemo } from "react";

export const AuthenticateContexte = createContext({
  authInfo: "",
  setAuthInfo: () => {},
});
export const AuthProvider = (props) => {
  const [authInfo, setAuthInfo] = useState({ token: "", isAuthenticated: false });
  const value = useMemo(() => ({ authInfo, setAuthInfo }), [authInfo]);
  return (
    <AuthenticateContexte.Provider value={value}>
      {useMemo(
        () => (
          <>{props.children}</>
        ),
        []
      )}
    </AuthenticateContexte.Provider>
  );
};
