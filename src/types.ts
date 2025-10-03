import { ReactNode } from "react";

// пропсы для компонентов
export interface SortingBtnTypes {
  Svg: React.FunctionComponent<React.SVGProps<SVGSVGElement>>,
  type: Sorting
}

export interface ErrorProps {
  text?: string;
}

export interface ShowHideBtnProps {
  condition: boolean,
  handleClick: () => void
}

export interface FilterItemProps {
  type: string
}

export interface WrapperProps {
  children: ReactNode
}

export interface LogoProps {
  width: string,
  height: string
}

export interface NavItemProps {
  link: string,
  title: string,
  className?: string 
}

export interface CopyrightProps {
  year: string,
}

export interface DataBannerProps {
  data: BannerDataTypes[]
}

// переменные

interface FilterConfigItem {
  title: string;
  selector: (state: any) => any;
  filterSelector: (state: any) => any;
  handler: string;
  isCustom?: boolean;
}

export interface FilterConfig {
  [key: string]: FilterConfigItem;
}

export interface ScreenWidthConfig {
  tablet: number,
  notebook: number,
}

// данные 

interface Notes {
  basic: string[] | string,
  middle: string[] | string,
  top: string[] | string,
}

export interface CatalogItem {
  chords: string[],
  description: string,
  id: string,
  notes?: Notes,
  photo: string,
  price: number,
  title: string,
}

export interface BannerDataTypes {
  id: number, 
  link: string
}

// сторы, контекст

export interface FilterSlice {
  notesFilter: string[];
  chordsFilter: string[];
  search: string;
  priceSort: 'ascending' | 'descending' | null;
  notesItems: string[];
  chordsItems: string[];
  priceItems: { text: string; type: 'ascending' | 'descending' }[];
  filteredData: CatalogItem[];
  originalData: CatalogItem[];
  calculateNotesAndChords: () => void; 
  setSearch: (searchTerm: string) => void;
  applySearch: () => void;
  toggleNoteFilter: (note: string) => void;
  toggleChordFilter: (chord: string) => void;
  setPriceSort: (sortType: 'ascending' | 'descending' | null) => void;
  applyFilters: () => void;
  shouldShowReset: () => boolean;
  resetFilters: () => void;
}

export interface CatalogSlice {
  originalData: CatalogItem[],
  filteredData: CatalogItem[],
  isLoading: boolean,
  isError: boolean,
  errorText: string,
  fetchData: () => Promise<void>,
}

export type StoreState = FilterSlice & CatalogSlice; 

export interface ChildrenNodeType {
  children: ReactNode
}

export type Sorting = 'grid' | 'string'

export interface SortingContextType {
  sorting: Sorting,
  toggleSorting: (type: Sorting) => void,
}

export interface FiltresMobContextType {
  isActiveFilters: boolean,
  setIsActiveFilters: (isActiveFilters: boolean) => void
}