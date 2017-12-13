app.factory('projects', function(){

	var projects = [
		{
			anchor: '1',
			title: 'title',
			img: {
				src:'',
				tooltip:'tooltip'
			},
			introduction: 'introduction',
			summary: 'summary',
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
			anchor: '2',
			title: 'title',
			img: {
				src:'',
				tooltip:'tooltip'
			},
			introduction: 'introduction',
			summary: 'summary',
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
			anchor: '3',
			title: 'title',
			img: {
				src:'',
				tooltip:'tooltip'
			},
			introduction: 'introduction',
			summary: 'summary',
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
			anchor: '4',
			title: 'title',
			img: {
				src:'',
				tooltip:'tooltip'
			},
			introduction: 'introduction',
			summary: 'summary',
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
			anchor: '5',
			title: 'title',
			img: {
				src:'',
				tooltip:'tooltip'
			},
			introduction: 'introduction',
			summary: 'summary',
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
			anchor: '6',
			title: 'title',
			img: {
				src:'',
				tooltip:'tooltip'
			},
			introduction: 'introduction',
			summary: 'summary',
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