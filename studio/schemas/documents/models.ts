import {SchemaTypeDefinition} from 'sanity'
import {IoWoman} from 'react-icons/io5'

const model: SchemaTypeDefinition = {
  name: 'models',
  type: 'document',
  title: 'Models',
  icon: IoWoman,
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      description: 'The name of the model.',
      validation: (Rule) => Rule.required(),
    },
  ],
}

export default model
