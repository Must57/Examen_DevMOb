import React, { useState } from "react";
import { useSelector } from "react-redux";

const [recipeD, setrecipeD] = useState([]);

const RecipeDatas = useCallback(async (path) => {
  const response = await fetch(path, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    }
  });
  const data = await response.json();
  setProjects(data);
}, []);

useEffect(() => {
  fetchJSONDataFrom("./search_pasta-1.json");
}, [RecipeDatas]);