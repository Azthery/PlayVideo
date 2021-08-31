import { useState, useEffect } from 'react';

const useInitialState = (API) => {
     const [videos, setVideos] = useState({ 
         mylist: [],
         trends: [],
         originals: []
         });
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch(API)
            .then(response => response.json())
            .then(data =>{
                 setVideos(data);
                 setCategories(Object.keys(data));
                })
            .catch(err => console.error(err));
        
        
    }, []);

    return [videos, categories];
}

export default useInitialState;