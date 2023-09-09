import {SchemaTypeDefinition} from 'sanity'

const photos: SchemaTypeDefinition = {
  name: 'photo',
  type: 'image',
  title: 'Photo',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'name',
      description: 'The name of the photo.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'altText',
      type: 'string',
      title: 'Alt text',
      description: 'The alt text used to describe the image.',
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
