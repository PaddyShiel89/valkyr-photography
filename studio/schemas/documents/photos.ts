import {SchemaTypeDefinition} from 'sanity'

const photos: SchemaTypeDefinition = {
  name: 'photos',
  type: 'document',
  title: 'Photos',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'name',
      description: 'The name of the photo.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'categories',
      type: 'array',
      description: 'The categories that apply to the photo.',
      of: [
        {
          type: 'reference',
          to: [{type: 'photoCategories'}],
        },
      ],
      validation: (Rule) => Rule.required().unique(),
    },
  ],
  options: {
    hotspot: true,
  },
}

export default photos
