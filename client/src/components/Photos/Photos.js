import React, { useState } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch} from 'react-redux';
import FileBase from 'react-file-base64';
import {createPhotoz } from '../../actions/users.js'
import { Link } from 'react-router-dom';



const Photos = () => {
const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
const dispatch = useDispatch();

const clear = () => {
  setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
};

const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(createPhotoz(postData));
};

    return (
<>
			<nav className="tags">
				<Link to="/" >
          <button>Home</button>
        </Link>     
			</nav>

      <div className='ff-header'>
      <Paper>
        <form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <Typography variant="h6">{'Creating a Photo'}</Typography>
          <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
          <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
          <TextField name="message" variant="outlined" label="Message" fullWidth multiline rows={4} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
          <TextField name="tags" variant="outlined" label="Tags (coma separated)" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
          <div><FileBase type="file" multiple={false} onDone={({ base64 }) =>   setPostData({ ...postData, selectedFile: base64 })} /></div>
          <img className='img' src={postData.selectedFile} alt='44'/>
          <Button  variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
          <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
        </form>
      </Paper>
      </div>










      </>
    );
  };
  
  export default Photos;
