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
		imgLeatherHard: null,
		imgBisqueFired: null,
		imgGlazed: null,
		imgComplete: "/images/vase.png",
		imgGallery: null,
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
		imgLeatherHard: null,
		imgBisqueFired: null,
		imgGlazed: null,
		imgComplete: "",
		imgGallery: null,
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
  weight_leather_hard: null,
  weight_bone_dry: null,
  weight_bisque_fired: null,
  weight_glazed: null,
  weight_complete: null,
  date_created: null,
  date_complete: null,
  description: null,
  note: 'hi',
  name: 'Emily Test 1 not Deployed',
  img_leather_hard: null,
  img_bisque_fired: null,
  img_glazed: null,
  img_complete: null,
  img_gallery: null
}
export const mockNewCreationResult = {
  id: 12,
  clayId: 1,
  clay: 'White',
  shapeId: 1,
  shape: 'Coffee Cup',
  statusId: 1,
  status: 'Wet',
  weightLeatherHard: null,
  weightBoneDry: null,
  weightBisqueFired: null,
  weightGlazed: null,
  weightComplete: null,
  dateCreated: null,
  dateComplete: null,
  description: null,
  note: 'hi',
  name: 'Emily Test 1 not Deployed',
  imgLeatherHard: null,
  imgBisqueFired: null,
  imgGlazed: null,
  imgComplete: null,
  imgGallery: null,
	glazes: [
		{
			id: 1,
			glaze: 'Clear'
		}
	]
} 

export const mockNewGlazesResult = [
		{
			id: 1,
			glaze: 'Clear'
		}
	]

export const mockGlazes = [
  {
    id: 1,
    glaze: 'Clear',
  },
  {
    id: 10,
    glaze: 'White',
  },
  {
    id: 11,
    glaze: 'Peach',
  },
]