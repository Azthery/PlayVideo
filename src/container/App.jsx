import React, {useState, useEffect} from 'react';

import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import '../assets/styles/App.scss';

const App = () => {
    const API = 'http://localhost:3000/initalState';
    const [videos, setVideos] = useState({ mylist: [], trends: [], originals: [] });

    useEffect(() => {
        fetch(API)
            .then(response => response.json())
            .then(data => setVideos(data));
    }, []);

    return(
        <div className="app">
            <Header />
            <Search />

            {videos.myList?.length > 0 &&
                <Categories title="Mi lista">
                    <Carousel>
                    {videos.trends.map(item =>
                        <CarouselItem key={item.id} {...item}/>
                        )}
                </Carousel>
                </Categories>
            }

            <Categories title="Tendencias">
                <Carousel>
                    {videos.trends.map(item =>
                        <CarouselItem key={item.id} {...item}/>
                        )}
                </Carousel>
            </Categories>

            <Categories title="Originales de PlayVideo">
                <Carousel>
                    {videos.originals.map(item =>
                        <CarouselItem key={item.id} {...item}/>
                        )}
                </Carousel>
            </Categories>

            <Footer />
        </div>
    )
};

export default App;