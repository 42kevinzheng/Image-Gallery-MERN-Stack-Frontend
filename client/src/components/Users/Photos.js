import React, {useState, useEffect} from 'react';
import './Photos.css';
import { SRLWrapper } from 'simple-react-lightbox';
import {useSelector, useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
import {deletePhoto} from '../../actions/users.js';

const Photos = () => {
	const [loading, setLoading] = useState(false);
	const dispatch = useDispatch();
	useEffect(()=>{
		setLoading(true);
		setTimeout(()=>{
			setLoading(false)
		}, 4000)
	},[])

	const postss = useSelector((state)=>state.users);

	return (
		<div>
			{ 
			!postss.length ?  <img className='img_loading' src='https://media.tenor.com/images/39d6060576a516f1dd437eafccafbdb1/tenor.gif' alt='alt'/>

			:

			<div>
			<div className="tags">
			<Link to="/create" >
			<button>Create</button>
			</Link>
			</div>

		<SRLWrapper >
			<div className="container">
				{postss.map(posts => (
					<div key={posts.selectedFile} className="image-card">
						<a href={`/images/${posts.selectedFile}`}>
							<figure className="wp-caption">
							<img  src={posts.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={posts._id}/> 
							<figcaption class="wp-caption-text"> 
									{posts._id}<br/>
									{posts.creator || "Default"}
								</figcaption>
							</figure>
						</a>
						<Link to= {{ pathname:`/edit/${posts._id}`, id:posts._id,}} >
							<button>Edit</button>
						</Link>
						<Link to ={{pathname:'/pixels' ,image: posts.selectedFile}}>
							<button>Pixel</button>
						</Link>

						<button onClick={()=>dispatch(deletePhoto(posts._id))}>Delete</button> 
					</div>
				))}
			</div>
		</SRLWrapper>
		</div>
			} 
		</div>
	);
}

export default Photos;