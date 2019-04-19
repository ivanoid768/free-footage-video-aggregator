import axios, { AxiosInstance, AxiosRequestConfig, AxiosPromise } from 'axios';

interface SourceAxiosInstance extends AxiosInstance {
	name: string;
}

function fromPixabay() {
	const access_key = '11215352-991ab9a42a02be2db12b85705';

	const axi: SourceAxiosInstance = axios.create({
		baseURL: 'https://pixabay.com/api/videos/',
		// baseURL: 'http://localhost:5000/pixabay_tourist_attraction.json',
		params: {
			key: access_key,
			video_type: 'film',
			per_page: 20
		}
	})

	axi.name = 'pixabay'

	return axi;
}

function fromPexels() {
	const access_key = '563492ad6f9170000100000187d04447c7094a5c96e0dfd7119b3e7a';

	const axi: SourceAxiosInstance = axios.create({
		baseURL: 'https://api.pexels.com/videos/search',
		// baseURL: 'http://localhost:5000/pixabay_tourist_attraction.json',
		params: {
			per_page: 20
		},
		headers: {
			common: {
				Authorization: access_key
			}
		}
	})

	axi.name = 'pexels'

	return axi;
}