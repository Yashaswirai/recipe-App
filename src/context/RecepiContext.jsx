import React from "react";
export const dataContext = React.createContext(null);
const RecepiContext = (props) => {
  const [data, setData] = React.useState([
    {
      chef: "Yashaswi Rai",
      description:
        "Tandoori butter chicken masala is a lip smacking recipe with the crispness of chicken and the tangy and spicy flavour of gravy which compliments well as a main dish..\nThis recipe is the fav. in my family..\nDo try it.",
      id: "p7_qCNAv9W7x9PudSTXq8",
      image:
        "https://img-global.cpcdn.com/recipes/51e4d8d720317260/1360x1928cq90/tandoori-butter-chicken-masala-recipe-main-photo.webp",
      ingredients:
        "400 gm chicken,\nTo taste Salt,\n2 pinch Black pepper,\n2 tsp Lemon juice,\n1 tsp Coriander powder,\n1 tsp cumin powder\n",
      name: "Tandoori Butter Masala",
      type: "non-veg",
    },
  ]);


  return (
    <dataContext.Provider value={{ data, setData }}>
      {props.children}
    </dataContext.Provider>
  );
};

export default RecepiContext;
