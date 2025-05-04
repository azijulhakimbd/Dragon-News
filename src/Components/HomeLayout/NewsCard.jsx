import React from "react";
import {
  FaStar,
  FaEye,
  FaShareAlt,
  FaRegBookmark,
} from "react-icons/fa";

const NewsCard = ({ news }) => {
  const {
    title,
    author,
    image_url,
    details,
    rating,
    total_view,
  } = news;

  return (
    <div className="card h-150 bg-white shadow rounded-lg p-4 space-y-3">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="w-10 rounded-full">
              <img src={author?.img} alt={author?.name} />
            </div>
          </div>
          <div>
            <p className="font-semibold text-sm">{author?.name}</p>
            <p className="text-xs text-gray-500">{author?.published_date}</p>
          </div>
        </div>
        <div className="flex gap-3 text-gray-500 text-md mt-1">
          <FaRegBookmark className="cursor-pointer" />
          <FaShareAlt className="cursor-pointer" />
        </div>
      </div>

      {/* Title */}
      <h2 className="font-bold text-lg leading-snug">
        {title}
      </h2>

      {/* Image */}
      <figure className="w-full h-150 overflow-hidden rounded-md">
        <img
          src={image_url}
          alt={title}
          className="w-full h-full object-cover"
        />
      </figure>

      {/* Description */}
      <p className="text-sm text-gray-600">
        {details.slice(0, 150)}...
        <span className="text-red-500 font-medium cursor-pointer ml-1">
          Read More
        </span>
      </p>

      {/* Footer: Ratings and Views */}
      <div className="flex justify-between items-center pt-2 border-t border-gray-200">
        {/* Stars */}
        <div className="flex items-center text-orange-400 gap-1 mt-2">
          {[...Array(rating?.number || 0)].map((_, i) => (
            <FaStar key={i} />
          ))}
          <span className="text-gray-700 text-sm font-semibold ml-1">
            {rating?.number}
          </span>
        </div>

        {/* Views */}
        <div className="flex items-center text-gray-600 gap-1 text-sm mt-2">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
