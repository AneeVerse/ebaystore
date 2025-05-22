import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { schemaTypes } from '../sanity/schemaTypes'

export default defineConfig({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'leph7aip',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  title: 'Aneeverse Blog',
  basePath: '/studio',
  hostname: 'blog.aneeverse.com',
  plugins: [deskTool()],
  schema: { types: schemaTypes }
}) 