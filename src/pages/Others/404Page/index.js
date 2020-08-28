import React from 'react';
import {Link} from 'react-router-dom';
import imgView from './page_not_found.svg';


function NotFoundPage() {
	return (
		<>
			<p>
				It looks like you&apos;re lost...
			</p>
			<img src={imgView} alt='404 illustration'/>
			<br/>
			<p>
				<Link to='/'> Go to Home </Link>
			</p>
		</>
	); 
}

export default NotFoundPage;
