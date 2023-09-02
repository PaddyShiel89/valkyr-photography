import {SchemaTypeDefinition} from 'sanity'

const photoCategories: SchemaTypeDefinition = {
  name: 'photoCategories',
  type: 'document',
  title: 'Photo categories',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      description: 'The name of the category.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'level',
      type: 'string',
      title: 'Level',
      description: 'The content level of the category.',
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          {title: 'adult', value: 'adult'},
          {title: 'not safe for work', value: 'nsfw'},
          {title: 'safe for work', value: 'sfw'},
        ],
      },
    },
  ],
}

export default photoCategories
