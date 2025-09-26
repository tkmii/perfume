import { createContext, useState, useContext } from "react";
import { type ChildrenNodeType, SortingContextType, Sorting } from '../types'

const SortingContext = createContext<SortingContextType>({} as SortingContextType);

export function SortingProvider({ children }: ChildrenNodeType) {
  const [sorting, setSorting] = useState<Sorting>('grid')

  const toggleSorting = (type: Sorting) => {
    setSorting(type);
  }

  const value = {
    sorting,
    toggleSorting,
  };

  return (
    <SortingContext.Provider value={value}>
      {children}
    </SortingContext.Provider>
  );
}

export const useSorting = () => {
  const context = useContext(SortingContext);
  if (context === undefined) {
    throw new Error('useSorting must be used within a SortingContext');
  }
  return context;
};