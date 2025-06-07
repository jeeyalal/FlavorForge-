import React, { createContext, useEffect, useState } from 'react'

export const recipeContext = createContext(null)
function RecipieContext(props) {
    const [data, setdata] = useState([
        
       
    ]);

    // useEffect(()=>{
    //     setdata(JSON.parse(localStorage.getItem("recipes")) || [])
    // },[])
    useEffect(() => {
        const storedData = localStorage.getItem("recipes");
        if (storedData) {
            setdata(JSON.parse(storedData));
        }
    }, []);

    return (
        <recipeContext.Provider value={{ data, setdata }}>
            {props.children}
        </recipeContext.Provider>
    )
}

export default RecipieContext
