import React from 'react'
export const dataContext = React.createContext(null)
const RecepiContext = (props) => {
    const [data,setData]=React.useState([])
    console.log(data);
    
  return (
    <dataContext.Provider value={{data,setData}}>
      {props.children}
    </dataContext.Provider>
  )
}

export default RecepiContext
