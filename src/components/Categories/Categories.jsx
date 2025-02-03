import { useEffect } from "react";
import { useState } from "react";
import Category from "../Category/Category";


const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() =>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data =>setCategories(data))
    } ,[])
    return (
        <div className="container mx-auto">
            <h1 className="text-2xl font-medium text-center mb-14">Category</h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-10">
                {
                    categories.map(category => <Category category ={category}></Category>)
                }
            </div>
        </div>
    );
};

export default Categories;