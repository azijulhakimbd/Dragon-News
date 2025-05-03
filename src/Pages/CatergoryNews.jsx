import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../Components/HomeLayout/NewsCard";

const CatergoryNews = () => {
  const { id } = useParams();
  const newsData = useLoaderData();
  const [categoriesNews, setCategoriesNews] = useState([]);

  useEffect(() => {
    if (id == "0") {
      setCategoriesNews(newsData);
      return;
    } else if (id == "1") {
      const filtaredNews = newsData.filter(
        (news) => news.others.is_today_pick == true
      );
      setCategoriesNews(filtaredNews);
    } else {
      const filtaredNews = newsData.filter((news) => news.category_id == id);
      setCategoriesNews(filtaredNews);
    }
  }, [id, newsData]);

  return (
    <div>
      <h2 className="text-xl font-bold"> {categoriesNews.length} News Found</h2>
      <div className="grid grid-cols-1 gap-5">
        {categoriesNews.map((news) => (
          <NewsCard key={news.id} news={news}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default CatergoryNews;
