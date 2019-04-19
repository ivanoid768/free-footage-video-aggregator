import axios, { AxiosInstance, AxiosRequestConfig, AxiosPromise, AxiosResponse } from 'axios';

interface SourceAxiosInstance extends AxiosInstance {
	source_name: string;
}

function fromPixabay(): SourceAxiosInstance {
	const access_key = '11215352-991ab9a42a02be2db12b85705';

	let axi: any = axios.create({
		baseURL: 'https://pixabay.com/api/videos/',
		// baseURL: 'http://localhost:5000/pixabay_tourist_attraction.json',
		params: {
			key: access_key,
			video_type: 'film',
			per_page: 20
		}
	})

	axi.source_name = 'pixabay'

	return axi;
}

function fromPexels(): SourceAxiosInstance {
	const access_key = '563492ad6f9170000100000187d04447c7094a5c96e0dfd7119b3e7a';
	let axi: any = axios.create({
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

	axi.source_name = 'pexels'

	return axi;
}

interface SourceFootageResponse {
	footages: Array<any>;
	total: number;
	name: string;
}

function getPixabayFootages(page = 1, per_page = 20, query = '') {
	const axi = fromPixabay();

	let params: any = {
		page: page,
		per_page: per_page
	}

	if (query) {
		params.q = query;
	}

	return axi.request({
		params: params
	}).then((resp: AxiosResponse<any>): SourceFootageResponse => {
		console.log(axi.source_name, resp.data.hits[0].videos.tiny.url)
		// let name = hit.tags.replace(/,/ig,' ')
		// name = name.charAt(0).toUpperCase() + name.slice(1)
		return {
			name: axi.source_name,
			footages: resp.data.hits,
			total: resp.data.total
		}
	})

}

function getPexelsFootages(page = 1, per_page = 20, query = '') {
	const axi = fromPexels();

	const params: any = {
		max_duration: 30,
		page: page,
		per_page: per_page
	}
	if (!query) {
		axi.defaults.baseURL = 'https://api.pexels.com/videos/popular';
	} else {
		params.query = query;
	}

	return axi.request({
		params: params
	}).then((resp: AxiosResponse<any>): SourceFootageResponse => {
		console.log(resp.data.videos[0].video_files[1].link)
		// let name = video.url.match(/((?:(?![/])[\S])+)-\d+$/i)[1].replace(/-/ig, ' ');
		// name = name.charAt(0).toUpperCase() + name.slice(1)
		return {
			name: axi.source_name,
			footages: resp.data.videos,
			total: resp.data.total_results
		};
	})

}

interface FootageListItem {
	url: string,
	name: string
}

export { FootageListItem };

export default function getFootages(page: number = 1, per_page: number = 20, query: string = ''): Promise<FootageListItem[]> {
	return Promise.all([
		getPexelsFootages(page, per_page, query),
		getPixabayFootages(page, per_page, query)
	]).then((footResps: Array<SourceFootageResponse>) => {

		let footages: FootageListItem[] = [];

		for (let i = 0; i < per_page; i++) {
			footResps.forEach(f => {
				if (!f.footages[i]) return 1;

				let footage: FootageListItem = {
					name: '',
					url: ''
				};
				if (f.name == 'pexels') {
					footage.url = f.footages[i].video_files[1].link;
					let name = f.footages[i].url.match(/((?:(?![/])[\S])+)-\d+$/i)[1].replace(/-/ig, ' ');
					footage.name = name.charAt(0).toUpperCase() + name.slice(1)
				} else if (f.name == 'pixabay') {
					footage.url = f.footages[i].videos.tiny.url;
					let name = f.footages[i].tags.replace(/,/ig, ' ');
					footage.name = name.charAt(0).toUpperCase() + name.slice(1)
				}

				footages.push(footage);
			})
		}
		return footages;
	})
}

