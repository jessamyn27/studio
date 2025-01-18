export const heroData = [
	{
		title: 'cards',
		cards: {
			heroCard: {
				name: 'hero-card',
				element: 'card',
				title: 'Hero Card',
				subtitle: 'Subtitle text goes here...',
				description: 'Details of what this is about goes here...',
				inputs: {
					firstName: {
						name: 'firstName',
						label: 'First Name',
						placeholder: 'Enter first name',
						type: 'text',
						minLength: 3,
						maxLength: 20,
						size: 10,
						isRequired: true,
					},
					lastName: {
						name: 'firstName',
						label: 'First Name',
						placeholder: 'Enter first name',
						type: 'text',
						minLength: 3,
						maxLength: 20,
						size: 10,
						isRequired: true,
					},
					email: {
						name: 'email',
						label: 'Email',
						placeholder: 'Enter your email',
						type: 'email',
						minLength: 5,
						maxLength: 50,
						size: 5,
						isRequired: true,
					},
					dateOfBirth: {
						name: 'dateOfBirth',
						label: 'Date Of Birth',
						placeholder: 'Enter date of birth',
						type: 'date',
						minLength: 8,
						maxLength: 8,
						size: 8,
						isRequired: true,
					},
					phoneNumber: {
						name: 'phoneNumber',
						label: 'Phone Number',
						placeholder: 'Enter phone number',
						type: 'phone',
						minLength: 9,
						maxLength: 9,
						size: 9,
						isRequired: true,
					},
				},
				buttons: {
					submitRequest: {
						name: 'submitRequest',
						title: 'Submit Request',
						value: 'button',
						type: 'primary',
						validation: 'Request has been submitted.',
					},
					addName: {
						name: 'addName',
						title: 'Add Name',
						value: 'button',
						type: 'primary',
						validation: 'Name has been added.',
					},
				},
				dropdowns: {
					icons: {
						title: 'Member Type',
						element: 'dropdown',
						link: '/member-types',
						menu: [
							{
								title: 'Retiree',
								value: '/retiree',
							},
							{
								title: 'Beneficiary',
								value: '/beneficiare',
							},
							{
								title: 'Checkmark',
								value: '/checkmark',
							},
						],
					},
				},
			},
		},
	},
];

