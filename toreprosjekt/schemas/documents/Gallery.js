const imagegallery = {
	name: 'bilder',
	title: 'Bilder',
	type: 'document',

	fields: [
		{
			name: 'image',
			title: 'Image',
			type: 'customimage',
			options: {
				hotspot: true
			},
			
		},
		{
			name: 'bildetekst',
			title: 'Bildetekst',
			type: 'string',
			options: {
				isHighLighted: true
			},
		}
	],	
}

export default imagegallery;