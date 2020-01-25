import React from 'react';
import MeasureImg from '../../Images/chestFront.png';
import './Measure.css';

const MeasureImage = () => {
	return (
		<div>
			<img
				src={MeasureImg}
				className='models responsive-img'
				alt='Measurement Examples 1'
				style={{ backgroundColor: 'white' }}
			/>
		</div>
	);
};

export default MeasureImage;
