const baseQuery = `tourist+attraction`;

function fromPixabay() {
	const access_key = '11215352-991ab9a42a02be2db12b85705';

	const axi = axios.create({
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

function getPixabayFootages(page = 1, per_page = 20) {
	const axi = fromPixabay();
	axi.request({
		params: {
			page: page,
			per_page: per_page
		}
	}).then(resp => {
		console.log(resp.data.hits[0].videos.tiny.url)
		document.getElementById('video01').src = resp.data.hits[0].videos.tiny.url;
		console.log(resp.data)
		const listCntr = document.getElementsByClassName('list-cntr')[0];
		listCntr.innerHTML = '';
		resp.data.hits.forEach(hit => {
			let tmpl = `<div class="list-item">
	<video muted loop autoplay preload="metadata" class="list-item" src="${hit.videos.tiny.url}"></video>
</div>`;
			listCntr.innerHTML += tmpl;
		})
	})

}

function fromPexels() {
	const access_key = '563492ad6f9170000100000187d04447c7094a5c96e0dfd7119b3e7a';

	const axi = axios.create({
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

function getPexelsFootages(page = 1, per_page = 20, query = '') {
	const axi = fromPexels();

	const params = {
		max_duration: 30,
		page: page,
		per_page: per_page
	}
	if (!query) {
		axi.defaults.baseURL = 'https://api.pexels.com/videos/popular';
	} else {
		params.query = query;
	}

	axi.request({
		params: params
	}).then(resp => {
		console.log(resp.data.videos[0].video_files[1].link)
		document.getElementById('video01').src = resp.data.videos[0].video_files[1].link;
		console.log(resp.data)
		const listCntr = document.getElementsByClassName('list-cntr')[0];
		listCntr.innerHTML = '';
		resp.data.videos.forEach(video => {
			let name = video.url.match(/((?:(?![/])[\S])+)-\d+$/i)[1].replace(/-/ig, ' ');
			name = name.charAt(0).toUpperCase() + name.slice(1)
			let tmpl = `<div class="list-item">
			<span class="item-name" >${name}</span>
			<video muted loop autoplay preload="metadata" class="list-item" src="${video.video_files[1].link}"></video>
		</div>`;
			listCntr.innerHTML += tmpl;
		})
	})

}