const navigation = {
	name: 'navigation',
	title: 'Navigation',
	type: 'document',

	fields: [
		{
			name: 'location',
			title: 'Location',
			type: 'string',
			description: 'Topnav',
			validation: (Rule) => Rule.required(),
		},
		{
			name: 'link',
			title: 'Link',
			type: 'array',
			of: [{type: 'link'}],
			validation: (Rule) => Rule.required(),
		},
	]
}

export default navigation;