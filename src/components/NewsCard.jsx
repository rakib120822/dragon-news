import React from "react";
import { FaEye, FaStar, FaShareAlt, FaBookmark } from "react-icons/fa";

function NewsCard({ news }) {
  const { title, author, rating, total_view, details, tags, thumbnail_url } =
    news;

  // Format date nicely
  const formattedDate = new Date(author.published_date).toLocaleDateString(
    "en-US",
    { year: "numeric", month: "short", day: "numeric" }
  );

  return (
    <div className="card bg-base-100 shadow-md border border-gray-200  mx-auto transition-all duration-300 hover:shadow-lg">
      {/* Author Info + Icons */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-4 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-sm sm:text-base">
              {author.name}
            </h3>
            <p className="text-xs text-gray-500">{formattedDate}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 text-gray-600 text-lg sm:text-xl">
          <FaBookmark className="cursor-pointer hover:text-primary transition-colors duration-200" />
          <FaShareAlt className="cursor-pointer hover:text-primary transition-colors duration-200" />
        </div>
      </div>

      {/* News Title */}
      <div className="p-4">
        <h2 className="text-base sm:text-lg md:text-xl font-semibold leading-snug mb-2 hover:text-primary cursor-pointer transition-colors duration-200">
          {title}
        </h2>

        {/* Thumbnail Image */}
        <img
          src={thumbnail_url}
          alt={title}
          className="rounded-lg mb-3 w-full h-48 sm:h-56 md:h-64 object-cover"
        />

        {/* News Details */}
        <p className="text-sm sm:text-base text-gray-700 mb-2 leading-relaxed">
          {details.slice(0, 150)}...
          <span className="text-orange-500 font-semibold cursor-pointer hover:underline">
            Read More
          </span>
        </p>

        {/* Tags */}
        <div className="flex flex-wrap text-xs sm:text-sm text-gray-500 mb-3 gap-1">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="bg-gray-100 px-2 py-1 rounded-md hover:bg-gray-200 transition-colors duration-200"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Rating + Views */}
        <div className="flex flex-wrap items-center justify-between text-sm text-gray-600 mt-3 gap-2">
          <div className="flex items-center gap-1 text-orange-500">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={`${
                  i < rating.number ? "text-orange-500" : "text-gray-300"
                }`}
              />
            ))}
            <span className="ml-1 text-gray-700 font-semibold text-sm">
              {rating.number.toFixed(1)}
            </span>
          </div>
          <div className="flex items-center gap-1 text-sm sm:text-base">
            <FaEye /> <span>{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
