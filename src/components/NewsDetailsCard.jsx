import React from "react";
import { Link } from "react-router";

function NewsDetailsCard({ news }) {
  return (
    <div className="space-y-5">
      <img
        src={news.image_url}
        alt=""
        className="w-full h-[350px] object-cover"
      />
      <h2 className="text-2xl">{news.title}</h2>

      <p>{news.details}</p>
      <Link className="btn btn-secondary" to={`/category/${news.category_id}`}>
        Back to Category
      </Link>
    </div>
  );
}

export default NewsDetailsCard;
