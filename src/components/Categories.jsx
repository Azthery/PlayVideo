import React from 'react';
import '../assets/styles/components/Categories.scss';

const Categories = (prop) => (
    <div className="categories">
        <h3 className="categories__title">{prop.name}</h3>
        {prop.children}
    </div>
)

export default Categories;