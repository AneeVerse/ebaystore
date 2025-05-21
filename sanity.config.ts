'use client'

/**
 * This configuration is used to for the Sanity Studio that's mounted on the `\src\app\studio\[[...tool]]\page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './src/sanity/env'
import {schema} from './src/sanity/schemaTypes'
import {structure} from './src/sanity/structure'
import {customComponents} from './src/sanity/components'
import {pastePlugin} from './src/sanity/plugins/pastePlugin'
import {directPastePlugin} from './src/sanity/plugins/directPastePlugin'
import {faqDashboardPlugin} from './src/sanity/plugins/faqDashboardPlugin'
import {mainImageBodySyncPlugin} from './src/sanity/plugins/mainImageBodySyncPlugin'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema,
  plugins: [
    structureTool({structure}),
    // Vision is for querying with GROQ from inside the Studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({defaultApiVersion: apiVersion}),
    // Custom components including the table editor
    customComponents,
    // Plugin for handling paste operations
    pastePlugin,
    // Enhanced direct paste functionality
    directPastePlugin,
    // FAQ Dashboard Widget
    faqDashboardPlugin,
    // Auto-sync main image to body content
    // @ts-ignore - Type definitions are complex for plugin functions
    mainImageBodySyncPlugin({
      autoSync: true
    }),
  ],
})
