import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import useStyles from './styles';
import {updatePhoto } from '../../actions/users.js'
import { Link } from 'react-router-dom';
import {getUsers } from '../../actions/users.js'

const ShowPhotos = (props) => {
  const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
  const postsx = useSelector((state) => (props.location.id ? state.users.find((message) => message._id === props.location.id) : null));
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(()=>{
    dispatch(getUsers());
  },[dispatch]);

  useEffect(() => {
    if (postsx) setPostData(postsx);
  }, [postsx]);

const clear = () => {
  setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
};

const handleSubmit = async (e) => {
  e.preventDefault();
    dispatch(updatePhoto(props.location.id, postData));
    clear();
};

    return (
<>
			<nav className="tags">
				<Link to="/" className="btn btn-outline-warning float-right">
            <button>Home</button>
        </Link>    
			</nav>

      <Paper>
        <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
          <Typography variant="h6">{`Editing: ${props.location.id}`}</Typography>
          <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
          <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
          <TextField name="message" variant="outlined" label="Message" fullWidth multiline rows={4} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
          <TextField name="tags" variant="outlined" label="Tags (coma separated)" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
          <div><FileBase type="file" multiple={false} onDone={({ base64 }) =>   setPostData({ ...postData, selectedFile: base64 })} /></div>
          <Button  variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
          <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
        </form>
      </Paper>
      </>
    );
  };

  export default ShowPhotos;


