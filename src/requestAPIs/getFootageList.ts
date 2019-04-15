import axios, {AxiosInstance, AxiosRequestConfig, AxiosPromise} from 'axios';

interface SourceAxiosInstance extends AxiosInstance{
	name: string;
}

function fromPixabay() {
	const access_key = '11215352-991ab9a42a02be2db12b85705';

	const axi:SourceAxiosInstance = axios.create({
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