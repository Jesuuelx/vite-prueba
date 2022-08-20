import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";


export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Dragon Ball"]);

  const onNewCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    setCategories((c) => [newCategory, ...c]);
  };


  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onNewCategory={onNewCategory} />

   
    {
      categories.map( category => (
        <GifGrid key={category} category={category} />
      ))
    }


    </>
  );
};
