app.factory('projects', function(){

	var projects = [
		{
			anchor: 'winnie-the-pooh',
			title: 'Winnie The Pooh',
			img: {
				src:'',
				tooltip:'tooltip'
			},
			introduction: 'introduction',
			summary: 'Handmade book cover',
			description : '',
			images: [
				{
					src: '',
					tooltip: 'tooltip'
				},
				{
					src: '',
					tooltip: 'tooltip'
				},
				{
					src: '',
					tooltip: 'tooltip'
				},
				{
					src: '',
					tooltip: 'tooltip'
				}
			]
		},
		{
			anchor: 'bratislava',
			title: 'Bratislava',
			img: {
				src:'',
				tooltip:'tooltip'
			},
			introduction: 'introduction',
			summary: 'City identity',
			description : 'Bratislava is a city...',
			images: [
				{
					src: '',
					tooltip: 'tooltip'
				},
				{
					src: '',
					tooltip: 'tooltip'
				},
				{
					src: '',
					tooltip: 'tooltip'
				},
				{
					src: '',
					tooltip: 'tooltip'
				}
			]
		},
		{
			anchor: 'oups',
			title: 'Oups!',
			img: {
				src:'',
				tooltip:'tooltip'
			},
			introduction: 'introduction',
			summary: 'Small business identity',
			description : '',
			images: [
				{
					src: '',
					tooltip: 'tooltip'
				},
				{
					src: '',
					tooltip: 'tooltip'
				},
				{
					src: '',
					tooltip: 'tooltip'
				},
				{
					src: '',
					tooltip: 'tooltip'
				}
			]
		},
		{
			anchor: 'the-space-race',
			title: 'The Space Race',
			img: {
				src:'',
				tooltip:'tooltip'
			},
			introduction: 'introduction',
			summary: 'Film festival',
			description : '',
			images: [
				{
					src: '',
					tooltip: 'tooltip'
				},
				{
					src: '',
					tooltip: 'tooltip'
				},
				{
					src: '',
					tooltip: 'tooltip'
				},
				{
					src: '',
					tooltip: 'tooltip'
				}
			]
		},
		{
			anchor: 'marvel',
			title: 'Marvel',
			img: {
				src:'',
				tooltip:'tooltip'
			},
			introduction: 'introduction',
			summary: 'Travel magazine',
			description : '',
			images: [
				{
					src: '',
					tooltip: 'tooltip'
				},
				{
					src: '',
					tooltip: 'tooltip'
				},
				{
					src: '',
					tooltip: 'tooltip'
				},
				{
					src: '',
					tooltip: 'tooltip'
				}
			]
		},
		{
			anchor: 'transcend',
			title: 'Transcend',
			img: {
				src:'',
				tooltip:'tooltip'
			},
			introduction: 'introduction',
			summary: 'Art exhibition',
			description : '',
			images: [
				{
					src: '',
					tooltip: 'tooltip'
				},
				{
					src: '',
					tooltip: 'tooltip'
				},
				{
					src: '',
					tooltip: 'tooltip'
				},
				{
					src: '',
					tooltip: 'tooltip'
				}
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