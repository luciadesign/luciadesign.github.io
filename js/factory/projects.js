app.factory('projects', function(){

	var projects = [
		{
			anchor: '1',
			title: '',
			img: {
				src:'',
				tooltip:''
			},
			introduction: '',
			summary: '',
			images: [
				{
					src: '',
					tooltip: ''
				}
			]
		},
		{
			anchor: '2',
			title: '',
			img: {
				src:'',
				tooltip:''
			},
			introduction: '',
			summary: '',
			images: [
				{
					src: '',
					tooltip: ''
				}
			]
		},
		{
			anchor: '3',
			title: '',
			img: {
				src:'',
				tooltip:''
			},
			introduction: '',
			summary: '',
			images: [
				{
					src: '',
					tooltip: ''
				}
			]
		},
		{
			anchor: '4',
			title: '',
			img: {
				src:'',
				tooltip:''
			},
			introduction: '',
			summary: '',
			images: [
				{
					src: '',
					tooltip: ''
				}
			]
		},
		{
			anchor: '5',
			title: '',
			img: {
				src:'',
				tooltip:''
			},
			introduction: '',
			summary: '',
			images: [
				{
					src: '',
					tooltip: ''
				}
			]
		},
		{
			anchor: '6',
			title: '',
			img: {
				src:'',
				tooltip:''
			},
			introduction: '',
			summary: '',
			images: [
				{
					src: '',
					tooltip: ''
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