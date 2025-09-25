import { type CatalogItem } from "../types";

export const getItemNotes = (item: CatalogItem) => {
  if (!item) return [];
  if (item.notes && Array.isArray(item.notes)) {
    return item.notes;
  } else if (item.notes) {
    return [...(item.notes.top || []), ...(item.notes.middle || []), ...(item.notes.basic || [])];
  }
  return [];
}

export const getItemChords = (item: CatalogItem) => {
  return item?.chords || [];
}

export const getAllNotes = (data: CatalogItem[]) => {
  return data.flatMap(item => getItemNotes(item));
}

export const getAllChords = (data: CatalogItem[]) => {
  return data.flatMap(item => getItemChords(item));
}

export const getSearchData = (data: CatalogItem[], search: string) => {
  const searchTerm = search.toLowerCase().trim();
  return data.filter(item => item.title.toLowerCase().includes(searchTerm));
}

export const getNewFilter = (currentData: string[], item: string) => {
  console.log(item)
  return currentData.includes(item)
    ? currentData.filter(i => i !== item)
    : [...currentData, item];
}

export const getPriceSort = (priceSort: string, data: CatalogItem[]) => {
  switch (priceSort) {
    case 'ascending':
      return [...data].sort((a, b) => a.price - b.price);
    case 'descending':
      return [...data].sort((a, b) => b.price - a.price);
    default:
      return data; 
  }
}

export const itemIncludesAllFilters = (item: CatalogItem, filterArray: string[], getItemsFunction: (item: CatalogItem) => string[]) => {
  const items = getItemsFunction(item);
  return filterArray.every(filter => items.includes(filter));
}