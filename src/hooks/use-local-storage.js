import { useState } from "react";

function useLocalStorage(localStorageKey) {
  const [items, setItems] = useState(() => {
    const ItemsFromLocalStorage = localStorage.getItem(localStorageKey);

    if (ItemsFromLocalStorage) {
      return JSON.parse(ItemsFromLocalStorage);
    }

    return [];
  });

  function getItem() {
    return items;
  }

  function saveItemsToLocalStorage(items) {
    localStorage.setItem(localStorageKey, JSON.stringify(items));
    setItems(items);
  }
  return { saveItemsToLocalStorage, getItem };
}

export { useLocalStorage }