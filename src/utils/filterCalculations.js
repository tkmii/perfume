export const getAllNotes = (data) => {
  return data.flatMap(item => {
    if (item.notes && Array.isArray(item.notes)) {
      return item.notes;
    } else if (item.notes) {
      return [...(item.notes.top || []), ...(item.notes.middle || []), ...(item.notes.basic || [])];
    }
    return [];
  })
}

export const getAllChords = (data) => {
  return data.flatMap(item => item.chords || [])
}

export const getSearchData = (data, search) => {
  const searchTerm = search.toLowerCase().trim();
  let filtered = data;
  
  return filtered.filter(item =>
    item.title.toLowerCase().includes(searchTerm)
  );
}

export const getNewFilter = (currentData, item) => {
  return currentData.includes(item)
    ? currentData.filter(i => i !== item)
    : [...currentData, item];
}

export const getPriceSort = (priceSort, data) => {
  switch (priceSort) {
    case 'ascending':
      return data.sort((a, b) => a.price - b.price);
    case 'descending':
      return data.sort((a, b) => b.price - a.price);
    default:
      return data; 
  }
}

export const filterByInclusion = (item, filterArray, getItemsFunction) => {
  const items = getItemsFunction([item]);
  return filterArray.every(filter => items.includes(filter));
}