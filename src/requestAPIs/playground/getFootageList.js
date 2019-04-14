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