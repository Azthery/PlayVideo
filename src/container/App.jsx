import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

import '../assets/styles/App.scss';

import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import UpperCaseFirstCase from '../components/UpperCaseFirstCase';

import useInitialState from '../hooks/useInitialState';

const API = 'https://raw.githubusercontent.com/Azthery/PlayVideo/master/initalState.json';

const App = () => {
    const [videos, categories] = useInitialState(API);
    return(
        <div className="app">
            <Header />
            <Search />

            {categories.map(category => (
                videos[category].length > 0 &&
                    <Categories title={UpperCaseFirstCase(category)}>
                        <Carousel>
                        {videos.trends.map(item =>
                            <CarouselItem key={item.id} {...item}/>
                            )}
                    </Carousel>
                    </Categories>
                
            ))}

            <Footer />
        </div>
    )
};

CarouselItem.propTypes = {
    name: PropTypes.string,
    lastName: PropTypes.string,
    age: PropTypes.number,
    list: PropTypes.array,
};

export default App;