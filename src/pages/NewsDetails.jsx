import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import RightAside from "../components/homelayout/RightAside";
import NewsDetailsCard from "../components/NewsDetailsCard";
import { useLoaderData, useParams } from "react-router";

function NewsDetails() {
  const data = useLoaderData();
  const { id } = useParams();


  const [news, setNews] = useState({});

  useEffect(() => {
    const newsDetails = data.find((signleNews) => signleNews.id == id);
    setNews(newsDetails);
  }, [data, id]);

 

  return (
    <div>
      <header className="py-3">
        <Header />
      </header>

      <main className="w-11/12 mx-auto grid grid-cols-12 gap-5 py-10">
        <section className="col-span-9">
          <h2 className="font-bold">News Details</h2>
          <NewsDetailsCard news={news}/>
        </section>
        <aside className="col-span-3">
          <RightAside />
        </aside>
      </main>
    </div>
  );
}

export default NewsDetails;
