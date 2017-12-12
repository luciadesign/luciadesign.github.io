app.factory('projects', function(){

	var projects = [
		{
			anchor: '',
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
			anchor: '',
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
			anchor: '',
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
			anchor: '',
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
			anchor: '',
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
			anchor: '',
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