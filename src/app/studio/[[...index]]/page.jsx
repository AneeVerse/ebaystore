'use client'

import { NextStudio } from 'next-sanity/studio'
import config from '../../../lib/sanityConfig'

export default function StudioPage() {
  return <NextStudio config={config} />
} 