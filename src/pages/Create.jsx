import { nanoid } from "nanoid";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { dataContext } from "../context/RecepiContext";

const Create = () => {
  const {data,setData} = useContext(dataContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const submitHandler = (recepie) => {
    recepie.id=nanoid();
    setData([...data,recepie]);
    reset();
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Create your own <span className="text-red-400">recepie</span>
          </h1>
          <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto">
            Share your culinary masterpiece with the world
          </p>
        </div>

        <div className="bg-gray-800 border border-gray-700 rounded-2xl shadow-xl p-8 sm:p-12">
          <form className="space-y-8" onSubmit={handleSubmit(submitHandler)}>
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

            {/* Submit Button */}
            <div className="pt-6 border-t border-gray-700">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl hover:shadow-red-500/25 transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-red-400/20"
              >
                <span className="flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  Create Recipe
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Create;
