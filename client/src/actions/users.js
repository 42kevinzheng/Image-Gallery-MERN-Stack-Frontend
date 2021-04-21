import * as api from '../api'

 export const getUsers = () => async (dispatch) => {
    try {
      const { data } = await api.fetchPhotos();
      dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
  
  export const createPhotoz = (post)=> async (dispatch) =>{
    try {
      const {data} = await api.createPhoto(post);
      dispatch ({type: 'CREATE', payload: data});
    }catch (error){
      console.log(error);
    }
  }

  export const updatePhoto = (id, post) => async (dispatch) => {
    try {
      const { data } = await api.updatePhoto(id, post);
  
      dispatch({ type: 'UPDATE', payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  export const deletePhoto = (id) => async (dispatch) => {
    try {
      await api.deletePhoto(id);
  
      dispatch({ type: 'DELETE', payload: id });
    } catch (error) {
      console.log(error);
    }
  };
  