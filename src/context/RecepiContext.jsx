import React, { useEffect, useState } from 'react';
export const dataContext = React.createContext(null);
const RecepiContext = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem('recipes');
    if (data) {
      setData(JSON.parse(data));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem('recipes', JSON.stringify(data));
  }, [data]);

  return (
    <dataContext.Provider value={{ data, setData }}>
      {props.children}
    </dataContext.Provider>
  );
};

export default RecepiContext;