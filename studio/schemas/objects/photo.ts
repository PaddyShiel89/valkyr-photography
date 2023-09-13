import {SchemaTypeDefinition} from 'sanity'

const photos: SchemaTypeDefinition = {
  name: 'photo',
  type: 'image',
  title: 'Photo',
  fields: [
    {
      name: 'models',
      type: 'array',
      description: 'The models featured in the photo.',
      of: [
        {
          type: 'reference',
          to: [{type: 'models'}],
        },
      ],
      validation: (Rule) => Rule.unique(),
    },
    {
      name: 'featuredImage',
      type: 'boolean',
      title: 'Featured image',
      description:
        'Sets this as the featured image of the photoset. If multiple photos in a set have this set the true, the first will be used.',
      initialValue: false,
      // Only show this option if it hasn't previously been selected on a
      // different image.
      hidden: ({document, value}) => {
        if (document?.photos) {
          const photos = document?.photos as any[]
          return !value && !!photos.find((p: {featuredImage: boolean}) => p.featuredImage)
        } else {
          return true
        }
      },
    },
  ],
  options: {
    hotspot: true,
  },
}

export default photos
