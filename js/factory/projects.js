app.factory('projects', function(){

	var projects = [
		{
			anchor: 'winnie-the-pooh',
			title: 'Winnie The Pooh',
			img: {
				src:'img/winnie-the-pooh/cover.jpg'
			},
			introduction: 'introduction',
			summary: 'Handmade book cover',
			description : '',
			images: [
				{ src: 'img/winnie-the-pooh/1.jpg' },
				{ src: 'img/winnie-the-pooh/2.jpg' },
				{ src: 'img/winnie-the-pooh/3.jpg' },
				{ src: 'img/winnie-the-pooh/4.jpg' }
			]
		},
		{
			anchor: 'bratislava',
			title: 'Bratislava',
			img: {
				src:'img/bratislava/cover.jpg'
			},
			introduction: 'introduction',
			summary: 'City identity',
			description : 'Bratislava is a city...',
			images: [
				{ src: 'img/bratislava/1.jpg' },
				{ src: 'img/bratislava/2.jpg' },
				{ src: 'img/bratislava/3.jpg' },
				{ src: 'img/bratislava/4.jpg' }
			]
		},
		{
			anchor: 'oups',
			title: 'Oups!',
			img: {
				src:'img/oups/cover.jpg'
			},
			introduction: 'introduction',
			summary: 'Small business identity',
			description : '',
			images: [
				{ src: 'img/oups/1.jpg' },
				{ src: 'img/oups/2.jpg' },
				{ src: 'img/oups/3.jpg' },
				{ src: 'img/oups/4.jpg' }
			]
		},
		{
			anchor: 'the-space-race',
			title: 'The Space Race',
			img: {
				src:'img/the-space-race/cover.jpg'
			},
			introduction: 'introduction',
			summary: 'Film festival',
			description : '',
			images: [
				{ src: 'img/the-space-race/1.jpg' },
				{ src: 'img/the-space-race/2.jpg' },
				{ src: 'img/the-space-race/3.jpg' },
				{ src: 'img/the-space-race/4.jpg' }
			]
		},
		{
			anchor: 'marvel',
			title: 'Marvel',
			img: {
				src:'img/marvel/cover.jpg'
			},
			introduction: 'introduction',
			summary: 'Travel magazine',
			description : '',
			images: [
				{ src: 'img/marvel/1.jpg' },
				{ src: 'img/marvel/2.jpg' },
				{ src: 'img/marvel/3.jpg' },
				{ src: 'img/marvel/4.jpg' }
			]
		},
		{
			anchor: 'transcend',
			title: 'Transcend',
			img: {
				src:'img/transcend/cover.jpg'
			},
			introduction: 'introduction',
			summary: 'Art exhibition',
			description : '',
			images: [
				{ src: 'img/transcend/1.jpg' },
				{ src: 'img/transcend/2.jpg' },
				{ src: 'img/transcend/3.jpg' },
				{ src: 'img/transcend/4.jpg' }
			]
		}
	]

	return {

		get: function(anchor) {
			for (var i = 0; i < projects.length; i++) {
				if (projects[i].anchor == anchor) {
					return projects[i]
				}
			}
		},

		getAll: function() {
			return projects
		}
		
	}

})