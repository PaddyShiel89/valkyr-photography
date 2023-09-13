import {SchemaTypeDefinition} from 'sanity'
import {FaImages} from 'react-icons/fa6'

const photosets: SchemaTypeDefinition = {
  name: 'photosets',
  type: 'document',
  title: 'Photosets',
  icon: FaImages,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'The title of the photoset.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'altTitle',
      type: 'string',
      title: 'Alternative title',
      description:
        "An alternative title for the set. This is used in cases such as where all model names can't fit into a title.",
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
    },
    {
      name: 'categories',
      type: 'array',
      description: 'The media tags that apply to the photoset.',
      of: [
        {
          type: 'reference',
          to: [{type: 'media.tag'}],
        },
      ],
      validation: (Rule) => Rule.unique(),
    },
    {
      name: 'photos',
      type: 'array',
      of: [{type: 'photo'}],
      description: 'The photos in the photoset.',
      options: {
        layout: 'grid',
      },
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
