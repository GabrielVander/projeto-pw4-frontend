import React from 'react';
import {Link} from 'react-router-dom';
import imgView from './page_not_found.svg';


function NotFoundPage() {
	return (
		<>
			<p>
				It looks like you&apos;re lost...
			</p>
			<img src={imgView} alt='fixed alt text in the 404 page'/>
			<br/>
			<p>
				<Link to='/dashboard'> Go to Home </Link>
			</p>
		</>
	); 
}

export default NotFoundPage;
