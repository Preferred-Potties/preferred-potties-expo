import { createContext, useContext, useEffect, useState } from "react";
import { getLoos, getReviews } from "../services/loosServices.js";

const LoosContext = createContext();

const LoosProvider = ({ children }) => {
  const [loos, setLoos] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchLoos = async () => {
      try {
        const data = await getLoos();
        setLoos(data);
      } catch (e) {
        console.error(e.message);
      }
    };
    fetchLoos();
  }, []);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const data = await getReviews();
        setReviews(data);
      } catch (e) {
        console.error(e.message);
      }
    };
    fetchReviews();
  }, []);
  return (
    <LoosContext.Provider
      value={{
        loos,
        setLoos,
        reviews,
        setReviews,
      }}
    >
      {children}
    </LoosContext.Provider>
  );
};

const useLoosContext = () => {
  const context = useContext(LoosContext);
  if (context === undefined) {
    throw new Error("LoosContext called outside of LoosProvider Component");
  }
  return context;
};
export { useLoosContext, LoosProvider };
