import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {markdownSchema} from 'sanity-plugin-markdown'
import {media} from 'sanity-plugin-media'

import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Valkyr Photography',

  projectId: process.env.SANITY_STUDIO_PROJECT_ID as string,
  dataset: process.env.SANITY_STUDIO_DATASET as string,

  plugins: [deskTool(), markdownSchema(), media(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
