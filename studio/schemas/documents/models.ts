import {SchemaTypeDefinition} from 'sanity'
import {FaPersonDress} from 'react-icons/fa6'

const model: SchemaTypeDefinition = {
  name: 'models',
  type: 'document',
  title: 'Models',
  icon: FaPersonDress,
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
