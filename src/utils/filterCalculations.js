export const getItemNotes = (item) => {
  if (!item) return [];
  if (item.notes && Array.isArray(item.notes)) {
    return item.notes;
  } else if (item.notes) {
    return [...(item.notes.top || []), ...(item.notes.middle || []), ...(item.notes.basic || [])];
  }
  return [];
}

export const getItemChords = (item) => {
  return item?.chords || [];
}

export const getAllNotes = (data) => {
  return data.flatMap(item => getItemNotes(item));
}

export const getAllChords = (data) => {
  return data.flatMap(item => getItemChords(item));
}

export const getSearchData = (data, search) => {
  const searchTerm = search.toLowerCase().trim();
  return data.filter(item => item.title.toLowerCase().includes(searchTerm));
}

export const getNewFilter = (currentData, item) => {
  return currentData.includes(item)
    ? currentData.filter(i => i !== item)
    : [...currentData, item];
}

export const getPriceSort = (priceSort, data) => {
  switch (priceSort) {
    case 'ascending':
      return data.toSorted((a, b) => a.price - b.price);
    case 'descending':
      return data.toSorted((a, b) => b.price - a.price);
    default:
      return data; 
  }
}

export const itemIncludesAllFilters = (item, filterArray, getItemsFunction) => {
  const items = getItemsFunction(item);
  return filterArray.every(filter => items.includes(filter));
}