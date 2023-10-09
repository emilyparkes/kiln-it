export const mockResponse = [
	{
		id: 1,
		clayId: 1,
		clay: 'White',
		shapeId: 5,
		shape: 'Vase',
		statusId: 2,
		status: 'Leather Hard',
		weightLeatherHard: 0,
		weightBoneDry: 0,
		weightBisqueFired: 0,
		weightGlazed: 0,
		weightComplete: 0,
		dateCreated: '2020-06-15T13:45:30',
		dateComplete: '2020-07-15T13:45:30',
		description: 'Creations by emily is great',
		note: 'Glaze with criss-cross pattern',
		name: 'Le Vase',
		imgLeatherHard: '',
		imgBisqueFired: '',
		imgGlazed: '',
		imgComplete: '/images/vase.png',
		imgGallery: '',
		glazes: [
			{
				id: 1,
				glaze: 'Clear'
			},
			{
				id: 10,
				glaze: 'White'
			},
			{
				id: 11,
				glaze: 'Peach'
			}
		]
	},
	{
		id: 2,
		clayId: 2,
		clay: 'Grey Pebble',
		shapeId: 2,
		shape: 'Plate',
		statusId: 1,
		status: 'Wet',
		weightLeatherHard: 0,
		weightBoneDry: 0,
		weightBisqueFired: 0,
		weightGlazed: 0,
		weightComplete: 0,
		dateCreated: '2020-05-24T14:45:30',
		dateComplete: '2020-06-24T14:45:30',
		description: '',
		note: 'Glaze with criss-cross pattern',
		name: 'Le Plate',
		imgLeatherHard: '',
		imgBisqueFired: '',
		imgGlazed: '',
		imgComplete: '',
		imgGallery: '',
		glazes: [
			{
				id: 1,
				glaze: 'Clear'
			},
			{
				id: 10,
				glaze: 'White'
			}
		]
	}
]

export const newCreationResponse = {
	id: 10,
	clayId: 1,
	clay: 'White',
	shapeId: 1,
	shape: 'Coffee Cup',
	statusId: 1,
	status: 'Wet',
	weightLeatherHard: 0,
	weightBoneDry: 0,
	weightBisqueFired: 0,
	weightGlazed: 0,
	weightComplete: 0,
	dateCreated: '2020-06-15T13:45:30',
	dateComplete: '2020-07-15T13:45:30',
	description: '',
	note: 'hi',
	name: 'Espresso Mini',
	imgLeatherHard: '',
	imgBisqueFired: '',
	imgGlazed: '',
	imgComplete: '',
	imgGallery: '',
	glazes: [
		{
			id: 1,
			glaze: 'Clear'
		}
	]
}

export const newCreation = {
	clayId: 1,
	glazes: [{id: 1, glaze: 'Clear'}],
	name: 'Espresso Mini',
	note: 'hi',
	shapeId: 1,
 	statusId: 1,
	clay: 'White',
	shape: 'Coffee Cup',
	status: 'Wet',
	weightLeatherHard: 0,
	weightBoneDry: 0,
	weightBisqueFired: 0,
	weightGlazed: 0,
	weightComplete: 0,
	dateCreated: '',
	dateComplete: '',
	description: '',
	imgLeatherHard: '',
	imgBisqueFired: '',
	imgGlazed: '',
	imgComplete: '',
	imgGallery: ''
}

export const modifiedCreation = {
	id: 2,
	clayId: 2,
	clay: 'Grey Pebble',
	shapeId: 2,
	shape: 'Plate',
	statusId: 1,
	status: 'Wet',
	weightLeatherHard: 0,
	weightBoneDry: 0,
	weightBisqueFired: 0,
	weightGlazed: 0,
	weightComplete: 0,
	dateCreated: '2020-05-24T14:45:30',
	dateComplete: '2020-06-24T14:45:30',
	description: '',
	note: 'Glaze with criss-cross pattern',
	name: 'Large Gathering Plate',
	imgLeatherHard: '',
	imgBisqueFired: '',
	imgGlazed: '',
	imgComplete: '',
	imgGallery: '',
	glazes: [
		{
			id: 1,
			glaze: 'Clear'
		},
		{
			id: 10,
			glaze: 'White'
		}
	]
}
