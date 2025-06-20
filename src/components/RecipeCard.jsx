import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { dataContext } from "../context/RecepiContext";
import { toast } from "react-toastify";

const RecipeCard = ({ recepie }) => {
  const { data, setData } = useContext(dataContext);
  const [isFavorite, setIsFavorite] = useState(recepie?.favorite || false);

  const toggleFavorite = (e) => {
    e.preventDefault(); // Prevent navigation when clicking heart
    e.stopPropagation();

    const newFavoriteStatus = !isFavorite;
    setIsFavorite(newFavoriteStatus);

    // Update the recipe in the data array
    const index = data.findIndex((recipe) => recipe.id === recepie.id);
    if (index !== -1) {
      const copyData = [...data];
      copyData[index] = { ...copyData[index], favorite: newFavoriteStatus };
      setData(copyData);

      toast.success(
        newFavoriteStatus
          ? "Recipe added to favorites! ❤️"
          : "Recipe removed from favorites"
      );
    }
  };
  return (
    <Link to={`/Recepies/details/${recepie.id}`}>
      <div className="relative overflow-hidden">
        <img
          src={recepie.image}
          alt={recepie.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 flex items-center space-x-2">
          <button
            onClick={toggleFavorite}
            className={`p-2 rounded-full transition-all duration-200 transform hover:scale-110 ${
              isFavorite
                ? 'bg-red-500/90 text-white shadow-lg'
                : 'bg-black/50 text-white hover:bg-red-500/70'
            }`}
          >
            <svg
              className={`w-4 h-4 transition-all duration-200 ${
                isFavorite ? 'fill-current' : 'fill-none'
              }`}
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold ${
              recepie.type === "veg"
                ? "bg-green-900/80 text-green-300 border border-green-700"
                : "bg-red-900/80 text-red-300 border border-red-700"
            }`}
          >
            {recepie.type === "veg" ? "🌱 Veg" : "🍖 Non-Veg"}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h1 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-red-400 transition-colors duration-200">
          {recepie.name}
        </h1>

        <p className="text-gray-300 text-sm mb-4 line-clamp-3 leading-relaxed">
          {recepie.description}
        </p>

        <div className="mb-4">
          <h3 className="text-sm font-semibold text-white mb-2">
            Ingredients:
          </h3>
          <div className="flex flex-wrap gap-2">
            {recepie.ingredients.split(",").map((ingredient, index) => (
              <span
                key={index}
                className="px-2 py-1 rounded-full text-xs font-semibold bg-gray-700/50 border border-gray-600"
              >
                {ingredient.trim()!==" " && ingredient.trim()}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-700">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-semibold">
                {recepie.chef.charAt(0).toUpperCase()}
              </span>
            </div>
            <div>
              <p className="text-sm font-medium text-white">
                Chef {recepie.chef}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
