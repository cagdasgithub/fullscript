//This container shows images depending on the query text
//which is received from SearchControl.js then passes it to PhotoGrid.js
//This is also where we fetch the photos and paging is supported

import React, { useState, useEffect } from "react";
import SearchControl from "../Components/UI/SearchControl/SearchControl";
import PhotoGrid from "../Components/UI/Grid/PhotoGrid";
import Button from "@material-ui/core/Button";
import axios from "axios";

const FullScriptContainer = queryText => {
  const [data, setData] = useState({ photos: [] });
  const [query, setQuery] = useState(queryText);
  const [isLoading, setIsLoading] = useState(false);
  const [isSearchSuccessful, setIsSearchSuccessful] = useState(false);
  const [pageCount, setPageCount] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      let photos = await axios
        .get(
          `https://api.unsplash.com/search/photos?page=${pageCount}&query=${query}&client_id=6700cdcba2e1a3935626eae7c2ef92de2b917e8558460025bfd9032db33c2268`
        )
        .then(res => {
          return res.data;
        });

      setData({ photos: photos.results });
      setIsLoading(false);
      setIsSearchSuccessful(true);
    };
    fetchData();
  }, [pageCount, query]);

  const handleQueryChange = queryText => {
    setQuery(queryText);
  };

  const nextPageHandle = () => {
    setPageCount(pageCount + 1);
  };

  const prevPageHandle = () => {
    if (pageCount > 2) setPageCount(pageCount - 1);
  };

  return (
    <React.Fragment>
      <SearchControl
        updateQueryHandle={handleQueryChange}
        isLoading={isLoading}
      />
      {isSearchSuccessful ? (
        <React.Fragment>
          <PhotoGrid data={data} />{" "}
          <Button onClick={prevPageHandle}>Previous Page</Button>
          <Button onClick={nextPageHandle}>Next Page</Button>
        </React.Fragment>
      ) : (
        "No Photos yet"
      )}
    </React.Fragment>
  );
};

export default FullScriptContainer;
