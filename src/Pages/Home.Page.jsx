import React, { useEffect, useState } from "react";
import { getNews } from "../api";
import NewsCard from "../Components/NewsCard";
import LoadingSpinner from "../Components/Spinner";
import { withNavbar } from "../Contexts/withProvider";

const HomePage = ({ query, search, setSearch }) => {
  console.log(query);
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (!search) {
      setLoading(true);
      getNews("news").then(({ data }) => {
        setLoading(false);
        setNews(data.articles);
      });
    }
  }, []);

  useEffect(() => {
    if (search) {
      setLoading(true);
      getNews(query).then(({ data }) => {
        setSearch(false);
        setLoading(false);
        setNews(data.articles);
      });
    }
  }, [search]);

  if (loading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <LoadingSpinner className="text-5xl" />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-4 grid-flow-rows w-full gap-11 px-6 translate-y-16">
      {news.map((news) => (
        <NewsCard {...news} />
      ))}
    </div>
  );
};

export default withNavbar(HomePage);
