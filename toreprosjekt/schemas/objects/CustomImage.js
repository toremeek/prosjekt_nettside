const customimage = {
	name: 'customimage',
	type: 'object',
	title: 'Customimage',
	fields: [
		{
			name: 'image',
			title: ' ',
			type: 'image',
			validation: (Rule) => Rule.required(),
		},
		{
			name: 'alt',
			title: 'Alt text',
			type: 'string',
			description: 'Images from Sanity',
			validation: (Rule) => Rule.required(),
		}
	]
}

export default customimage