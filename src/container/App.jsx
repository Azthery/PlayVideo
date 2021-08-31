import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import useInitialState from '../hooks/useInitialState';
import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initalState';

const App = () => {
    const initialState = useInitialState(API);
    return(
        <div className="app">
            <Header />
            <Search />

            {initialState.myList?.length > 0 &&
                <Categories title="Mi lista">
                    <Carousel>
                    {initialState.trends.map(item =>
                        <CarouselItem key={item.id} {...item}/>
                        )}
                </Carousel>
                </Categories>
            }

            <Categories title="Tendencias">
                <Carousel>
                    {initialState.trends.map(item =>
                        <CarouselItem key={item.id} {...item}/>
                        )}
                </Carousel>
            </Categories>

            <Categories title="Originales de PlayVideo">
                <Carousel>
                    {initialState.originals.map(item =>
                        <CarouselItem key={item.id} {...item}/>
                        )}
                </Carousel>
            </Categories>

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