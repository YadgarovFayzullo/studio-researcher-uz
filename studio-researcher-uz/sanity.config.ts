import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Researcher uz',
  projectId: 'r5zfwxgl',
  dataset: 'production',
  plugins: [
    structureTool(), // без кастомной структуры
    visionTool()
  ],
  schema: {
    types: schemaTypes,
  },
})