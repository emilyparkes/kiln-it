export const mockCreations = [
	{
		id: 1,
		clayId: 1,
		clay: "White",
		shapeId: 5,
		shape: "Vase",
		statusId: 2,
		status: "Leather Hard",
		weightLeatherHard: 0,
		weightBoneDry: 0,
		weightBisqueFired: 0,
		weightGlazed: 0,
		weightComplete: 0,
		dateCreated: "2020-06-15T13:45:30",
		dateComplete: "2020-07-15T13:45:30",
		description: "Creations by emily is great",
		note: "Glaze with criss-cross pattern",
		name: "Le Vase",
		imgLeatherHard: '',
		imgBisqueFired: '',
		imgGlazed: '',
		imgComplete: "/images/vase.png",
		imgGallery: '',
		glazes: [
			{
				id: 1,
				glaze: "Clear"
			},
			{
				id: 10,
				glaze: "White"
			},
			{
				id: 11,
				glaze: "Peach"
			}
		]
	},
	{
		id: 2,
		clayId: 2,
		clay: "Grey Pebble",
		shapeId: 2,
		shape: "Plate",
		statusId: 1,
		status: "Wet",
		weightLeatherHard: 0,
		weightBoneDry: 0,
		weightBisqueFired: 0,
		weightGlazed: 0,
		weightComplete: 0,
		dateCreated: "2020-05-24T14:45:30",
		dateComplete: "2020-06-24T14:45:30",
		description: "",
		note: "Glaze with criss-cross pattern",
		name: "Le Plate",
		imgLeatherHard: '',
		imgBisqueFired: '',
		imgGlazed: '',
		imgComplete: "",
		imgGallery: '',
		glazes: [
			{
				id: 1,
				glaze: "Clear"
			},
			{
				id: 10,
				glaze: "White"
			}
		]
	},
]

export const mockNewCreationId = [10]

export const mockFormCreation = {
	clayId: 1,
	glazes: [{id: 1, glaze: 'Clear'}],
	name: 'Espresso mini',
	note: 'hi',
	shapeId: 1,
 	statusId: 1,
	weight: '123'
}

export const mockNewCreation = {
  id: 12,
  clayId: 1,
  clay: 'White',
  shapeId: 1,
  shape: 'Coffee Cup',
  statusId: 1,
  status: 'Wet',
  weight_leather_hard: 0,
  weight_bone_dry: 0,
  weight_bisque_fired: 0,
  weight_glazed: 0,
  weight_complete: 0,
  date_created: '',
  date_complete: '',
  description: '',
  note: 'hi',
  name: 'Emily Test 1 not Deployed',
  img_leather_hard: '',
  img_bisque_fired: '',
  img_glazed: '',
  img_complete: '',
  img_gallery: ''
}
export const mockNewCreationResult = {
  id: 12,
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
  dateCreated: '',
  dateComplete: '',
  description: '',
  note: 'hi',
  name: 'Emily Test 1 not Deployed',
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
