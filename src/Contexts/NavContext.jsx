import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { NavContext } from "./Context";
const NavContentProvider = ({ children }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const params = Object.fromEntries([...searchParams]);
  const [search, setSearch] = useState(false);
  const query = searchParams.get("q");
  return (
    <NavContext.Provider value={{ query, setSearchParams, setSearch, search }}>
      {children}
    </NavContext.Provider>
  );
};

export default NavContentProvider;
