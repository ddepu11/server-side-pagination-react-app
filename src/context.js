import { createContext, useContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [term, setTerm] = useState("js");
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <AppContext.Provider
      value={{ term, setTerm, news, setNews, loading, setLoading }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => useContext(AppContext);

export { AppProvider, useGlobalContext };
