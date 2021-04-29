import React, { useEffect } from 'react';
import SimpleReactLightbox from 'simple-react-lightbox';
import { BrowserRouter, Route } from 'react-router-dom';
import indexPhoto from './components/Users/Photos.js';
import CreatePhoto from './components/Photos/Photos.js';
import showPhoto from './components/Photos/showPhotos.js';
import pixelPhoto from './components/Photos/Pixels.js';
import { useDispatch } from 'react-redux';
import {getUsers } from './actions/users.js'

const App = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
      dispatch(getUsers());
    },[dispatch]);

    return (
      <SimpleReactLightbox>
        <BrowserRouter>
          <div>
            <Route exact path='/' component={indexPhoto} /> 
            <Route path='/create' component={CreatePhoto} /> 
            <Route path='/edit/' component={showPhoto} /> 
            <Route path='/pixels' component={pixelPhoto}/>
          </div>
        </BrowserRouter>
      </SimpleReactLightbox>
    );
  };


export default App;


