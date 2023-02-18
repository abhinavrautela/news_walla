import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { getNews } from "../api";
import NewsCard from "../Components/NewsCard";
import LoadingSpinner from "../Components/Spinner";
import { withNavbar } from "../Contexts/withProvider";

const SportsPage = ({ search, query }) => {
  if (search) {
    return <Navigate to={`/?${new URLSearchParams({ q: query })}`} />;
  }
  const [sportsNews, setSportsNews] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getNews("sports").then(({ data }) => {
      setSportsNews(data.articles);
      setLoading(false);
    });
  }, []);
  if (loading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <LoadingSpinner className="text-5xl" />
      </div>
    );
  }
  return (
    <div className="grid grid-cols-4 grid-flow-rows w-full gap-11 px-6">
      {sportsNews.map((news) => (
        <NewsCard {...news} />
      ))}
    </div>
  );
};

export default withNavbar(SportsPage);
