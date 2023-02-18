import React, { useEffect, useState } from "react";
import { getNews } from "../api";
import { Navigate } from "react-router-dom";
import NewsCard from "../Components/NewsCard";
import LoadingSpinner from "../Components/Spinner";
import { withNavbar } from "../Contexts/withProvider";

const WeatherPage = ({ search, query }) => {
  if (search) {
    return <Navigate to={`/?${new URLSearchParams({ q: query })}`} />;
  }
  const [wratherNews, setWeatherNews] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getNews("weather").then(({ data }) => {
      setWeatherNews(data.articles);
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
      {wratherNews.map((news) => (
        <NewsCard {...news} />
      ))}
    </div>
  );
};

export default withNavbar(WeatherPage);
