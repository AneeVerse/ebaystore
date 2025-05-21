import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import {postType} from './postType'
import {authorType} from './authorType'
import {faqType} from './faqType'
import {customerStoryType} from './customerStoryType'
import {portfolioWorkType} from './portfolioWorkType'

export const schemaTypes = [
  blockContentType, 
  categoryType, 
  postType, 
  authorType,
  faqType,
  customerStoryType,
  portfolioWorkType
]

export const schema: { types: SchemaTypeDefinition[] } = {
  types: schemaTypes,
}
