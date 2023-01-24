import { createContext, useState, useEffect } from "react";
import { getCategoryDocs } from "../utils/firebase/firebase.utils";

export const CategoriesContext = createContext({
  categories: {}
})

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({})

  useEffect(() => {
    const getCategoryMap = async() => {
      const categoryMap = await getCategoryDocs()
      setCategoriesMap(categoryMap)
    }
    getCategoryMap()
  }, [])

  const value = { categoriesMap }
  return (
    <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
  )
}