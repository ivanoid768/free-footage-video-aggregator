import axios from 'axios';

const baseQuery = `tourist+attraction`;

function fromPixabay() {
	const access_key = '11215352-991ab9a42a02be2db12b85705';

	const axi = axios.create({
		baseURL: 'https://pixabay.com/api/',
		// baseURL: 'http://localhost:5000/pixabay_tourist_attraction.json',
		params: {
			key: access_key,
			q: baseQuery, // 'tourist%20attraction'
			image_type: 'photo'
		}
	})

	return axi;
}