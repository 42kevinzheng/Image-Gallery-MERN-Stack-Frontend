import axios from 'axios';

const url = 'http://localhost:5000/photos';;

export const fetchPhotos = () => axios.get(url);
export const createPhoto = (newPhoto) =>axios.post(url, newPhoto);
export const updatePhoto = (id, postData) => axios.patch(`${url}/${id}`, postData);
export const deletePhoto = (id) => axios.delete(`${url}/${id}`);