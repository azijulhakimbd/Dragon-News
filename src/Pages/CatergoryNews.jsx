import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";

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

  return <div>{categoriesNews.length} News Found</div>;
};

export default CatergoryNews;
