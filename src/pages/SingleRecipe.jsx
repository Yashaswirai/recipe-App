import React, { useContext, useState } from 'react'
import { dataContext } from '../context/RecepiContext';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const SingleRecipe = () => {
  const navigate = useNavigate()
  const {data,setData} = useContext(dataContext);
  const params = useParams();
  const recepie = data.find((recepie)=>recepie.id===params.id);
  const {register,handleSubmit,formState:{errors}}=useForm({defaultValues:recepie});

  // Initialize favorite state - check if recipe has favorite property, default to false
  const [isFavorite, setIsFavorite] = useState(recepie?.favorite || false);

  const toggleFavorite = () => {
    const newFavoriteStatus = !isFavorite;
    setIsFavorite(newFavoriteStatus);

    // Update the recipe in the data array
    const index = data.findIndex((recipe) => recipe.id === params.id);
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

  const updateHandler = (recepie) => {
    const index = data.findIndex((recepie)=>recepie.id===params.id);

    const copyData=[...data];
    copyData[index]={...data[index],...recepie};
    setData(copyData);
    toast.success("Recepie updated successfully");
  };

  const deleteHandler = () => {
    setData(data.filter((recepie)=>recepie.id!==params.id));
    toast.success("Recepie deleted successfully");
    navigate("/Recepies");
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            {recepie.name}
          </h1>
          <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto">
            Chef {recepie.chef}
          </p>
        </div>
        <div className="bg-gray-800 border border-gray-700 rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="lg:col-span-1 relative">
              <img
                src={recepie.image}
                alt={recepie.name}
                className="w-full h-96 lg:h-full object-cover"
              />
              <div className="absolute top-4 right-4">
                <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                  recepie.type === 'veg'
                    ? 'bg-green-900/80 text-green-300 border border-green-700'
                    : 'bg-red-900/80 text-red-300 border border-red-700'
                }`}>
                  {recepie.type === 'veg' ? '🌱 Vegetarian' : '🍖 Non-Vegetarian'}
                </span>
              </div>
            </div>
            <div className="lg:col-span-1 p-8">
              <div className="space-y-8">
                <div>
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-lg font-semibold">
                        {recepie.chef.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Created by</p>
                      <p className="text-lg font-semibold text-white">Chef {recepie.chef}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <button
                      onClick={toggleFavorite}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-200 transform hover:scale-105 ${
                        isFavorite
                          ? 'bg-red-500/20 text-red-400 border border-red-500/30 hover:bg-red-500/30'
                          : 'bg-gray-700/50 text-gray-400 border border-gray-600 hover:bg-gray-600/50 hover:text-red-400'
                      }`}
                    >
                      <svg
                        className={`w-5 h-5 transition-all duration-200 ${
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
                      <span className="text-sm font-medium">
                        {isFavorite ? 'Favorited' : 'Add to Favorites'}
                      </span>
                    </button>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <svg className="w-6 h-6 mr-2 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Description
                  </h2>
                  <div className="bg-gray-700/50 border border-gray-600 rounded-xl p-4">
                    <p className="text-gray-300 text-base leading-relaxed whitespace-pre-line">
                      {recepie.description}
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <svg className="w-6 h-6 mr-2 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                    Ingredients
                  </h2>
                  <div className="bg-gray-700/50 border border-gray-600 rounded-xl p-4">
                    <p className="text-gray-300 text-base leading-relaxed whitespace-pre-line">
                      {recepie.ingredients}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider Section */}
      <div className="max-w-4xl mx-auto my-12">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-700"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-gray-900 px-6 py-2 text-gray-400 text-sm font-medium rounded-full border border-gray-700">
              Edit Recipe
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            Update / Delete <span className="text-red-400">Recipe</span>
          </h1>
          <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto">
            Modify your culinary masterpiece or remove it from your collection
          </p>
        </div>

        <div className="bg-gray-800 border border-gray-700 rounded-2xl shadow-xl p-8 sm:p-12">
          <form className="space-y-8" onSubmit={handleSubmit(updateHandler)}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Recipe Name */}
              <div className="lg:col-span-2">
                <label className="block text-sm font-semibold text-white mb-3">
                  Recipe Name
                </label>
                <input
                  {...register("name", { required: "Enter the Title" })}
                  type="text"
                  placeholder="Enter the Recepie Name"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-600 bg-gray-700 focus:border-red-400 focus:ring-4 focus:ring-red-400/20 transition-all duration-200 text-white placeholder-gray-400"
                />
                {errors.name && (
                  <p className="mt-2 text-sm text-red-400 flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Recipe Type */}
              <div>
                <label className="block text-sm font-semibold text-white mb-3">
                  Recipe Type
                </label>
                <select
                  {...register("type", { required: "Enter the Type" })}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-600 bg-gray-700 focus:border-red-400 focus:ring-4 focus:ring-red-400/20 transition-all duration-200 text-white"
                >
                  <option value="" className="bg-gray-700 text-gray-400">Select type...</option>
                  <option value="veg" className="bg-gray-700 text-white">🌱 Vegetarian</option>
                  <option value="non-veg" className="bg-gray-700 text-white">🍖 Non-Vegetarian</option>
                </select>
                {errors.type && (
                  <p className="mt-2 text-sm text-red-400 flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {errors.type.message}
                  </p>
                )}
              </div>

              {/* Chef Name */}
              <div>
                <label className="block text-sm font-semibold text-white mb-3">
                  Chef Name
                </label>
                <input
                  {...register("chef", { required: "Chef name is required" })}
                  type="text"
                  placeholder="Enter the name of Chef"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-600 bg-gray-700 focus:border-red-400 focus:ring-4 focus:ring-red-400/20 transition-all duration-200 text-white placeholder-gray-400"
                />
                {errors.chef && (
                  <p className="mt-2 text-sm text-red-400 flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {errors.chef.message}
                  </p>
                )}
              </div>

              {/* Recipe Image URL */}
              <div className="lg:col-span-2">
                <label className="block text-sm font-semibold text-white mb-3">
                  Recipe Image URL
                </label>
                <input
                  {...register("image", { required: "provide image url" })}
                  type="url"
                  placeholder="Enter the Recepie Image url"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-600 bg-gray-700 focus:border-red-400 focus:ring-4 focus:ring-red-400/20 transition-all duration-200 text-white placeholder-gray-400"
                />
                {errors.image && (
                  <p className="mt-2 text-sm text-red-400 flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {errors.image.message}
                  </p>
                )}
              </div>

              {/* Recipe Description */}
              <div className="lg:col-span-2">
                <label className="block text-sm font-semibold text-white mb-3">
                  Recipe Description
                </label>
                <textarea
                  {...register("description", { required: "Enter the Description" })}
                  rows="4"
                  placeholder="Enter the Recepie Description"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-600 bg-gray-700 focus:border-red-400 focus:ring-4 focus:ring-red-400/20 transition-all duration-200 text-white placeholder-gray-400 resize-none"
                />
                {errors.description && (
                  <p className="mt-2 text-sm text-red-400 flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {errors.description.message}
                  </p>
                )}
              </div>

              {/* Recipe Ingredients */}
              <div className="lg:col-span-2">
                <label className="block text-sm font-semibold text-white mb-3">
                  Recipe Ingredients
                </label>
                <textarea
                  {...register("ingredients", { required: "few ingredients are required" })}
                  rows="4"
                  placeholder="Enter the Recepie Ingredients seperated by comma ( , )"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-600 bg-gray-700 focus:border-red-400 focus:ring-4 focus:ring-red-400/20 transition-all duration-200 text-white placeholder-gray-400 resize-none"
                />
                {errors.ingredients && (
                  <p className="mt-2 text-sm text-red-400 flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {errors.ingredients.message}
                  </p>
                )}
              </div>
            </div>

            {/* Update/Delete Buttons */}
            <div className="pt-6 border-t border-gray-700">
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-400/20"
                >
                  <span className="flex items-center justify-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                    Update Recipe
                  </span>
                </button>
                <button
                  onClick={deleteHandler}
                  type="button"
                  className="flex-1 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl hover:shadow-red-500/25 transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-red-400/20"
                >
                  <span className="flex items-center justify-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                    Delete Recipe
                  </span>
                </button>
              </div>

              {/* Back to Recipes Button */}
              <div className="mt-6 text-center">
                <button
                  onClick={() => navigate("/Recepies")}
                  type="button"
                  className="inline-flex items-center px-6 py-3 border border-gray-600 rounded-xl text-gray-300 hover:text-white hover:border-gray-500 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-gray-400/20"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Back to All Recipes
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SingleRecipe
