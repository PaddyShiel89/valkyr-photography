import {SchemaTypeDefinition} from 'sanity'

const photosets: SchemaTypeDefinition = {
  name: 'photosets',
  type: 'document',
  title: 'Photosets',
  fields: [
    {
      name: 'models',
      type: 'string',
      title: 'Models',
      description: 'The models pictured in the photoset. Also used as the title of the photoset.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'date',
      type: 'date',
      title: 'Date',
      description:
        'The date the photoset was shot. The month and year is used as the subtitle of the photoset.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      type: 'markdown',
      title: 'Description',
      description:
        'A brief description of the photoset, no more than a couple of short paragraphs.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'categories',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'photoCategories'}],
        },
      ],
      validation: (Rule) => Rule.required().unique(),
    },
  ],
}

export default photosets
