import React from "react";

const NewsCard = ({ description, urlToImage, title, author }) => {
  return (
    <div className="max-w-xs rounded-md shadow-lg p-4 mx-auto border border-gray-100">
      <img
        src={
          urlToImage ||
          "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"
        }
        alt=""
        className="object-cover w-full rounded-t-md h-48"
      />
      <div className="flex flex-col justify-between space-y-8">
        <div className="space-y-2">
          <h2 className="text-lg font-black tracking-tighter ">
            {title}{" "}
            {author && <span className="font-thin text-sm underline">by : {author}</span>}
          </h2>
          <p
            id="scrollbar-hide"
            className="overflow-y-auto font-sans pr-2 h-32 shadow-sm rounded-md"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
