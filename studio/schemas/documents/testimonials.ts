import {SchemaTypeDefinition} from 'sanity'
import {FaQuoteLeft} from 'react-icons/fa6'

const testimonials: SchemaTypeDefinition = {
  name: 'testimonials',
  type: 'document',
  title: 'Testimonials',
  icon: FaQuoteLeft,
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      description: 'The name of the person who gave the testimonial.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'role',
      type: 'string',
      title: 'Role',
      description:
        'The role of the person who gave the testimonial in the photoshoot, e.g. model, makeup artist, etc.',
      initialValue: 'model',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'date',
      type: 'date',
      title: 'Date',
      description: 'The date of the photoshoot relating to the testimonial.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      type: 'photo',
      title: 'Image',
      description: 'The image that will be displayed alongside the testimonial.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'quote',
      type: 'markdown',
      title: 'Quote',
      description: 'The testimonial.',
      validation: (Rule) => Rule.required(),
    },
  ],
}

export default testimonials
