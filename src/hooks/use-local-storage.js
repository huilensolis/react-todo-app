import { useState } from "react";
import { ErrorHandler } from "./index";
function useLocalStorage(localStorageKey) {
  const [getError, setErrorState] = new ErrorHandler()

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
    try{
      localStorage.setItem(localStorageKey, JSON.stringify(items));
      setItems(items);
    } catch(error){
      setErrorState('there has been an error saving your data, if the issue persist, contact us in email@example.com')
    }
  }
  return { saveItemsToLocalStorage, getItem, getError, setErrorState };
}

export { useLocalStorage }