import { createContext, useState, useContext } from "react";
import { type ChildrenNodeType, FiltresMobContextType } from '../types'

const FiltresMobContext = createContext<FiltresMobContextType>({} as FiltresMobContextType);

export function FiltresMobProvider({ children }: ChildrenNodeType) {
  const [isActiveFilters, setIsActiveFilters] = useState<boolean>(false)

  const value = {
    isActiveFilters,
    setIsActiveFilters,
  };

  return (
    <FiltresMobContext.Provider value={value}>
      {children}
    </FiltresMobContext.Provider>
  );
}

export const useFiltresMob = () => {
  const context = useContext(FiltresMobContext);
  if (context === undefined) {
    throw new Error('useFiltresMob must be used within a FiltresMobContext');
  }
  return context;
};