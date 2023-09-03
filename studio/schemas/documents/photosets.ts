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
      description: 'The categories that apply to the photoset.',
      of: [
        {
          type: 'reference',
          to: [{type: 'photoCategories'}],
        },
      ],
      validation: (Rule) => Rule.required().unique(),
    },
    {
      name: 'photos',
      type: 'array',
      description: 'The photos in the photoset.',
      of: [
        {
          type: 'reference',
          to: [{type: 'photos'}],
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'featuredPhoto',
      type: 'reference',
      to: [{type: 'photos'}],
      description:
        "The photo that will be displayed as the photoset's feature image where appropriate.",
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      type: 'string',
      title: 'Page slug',
      description: 'The url slug for the photoset page.',
      validation: (Rule) => Rule.required(),
    },
  ],
}

export default photosets
