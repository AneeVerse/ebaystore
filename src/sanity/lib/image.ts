import createImageUrlBuilder from '@sanity/image-url'
import { dataset, projectId } from '../env'

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || '',
  dataset: dataset || '',
})

export const urlForImage = (source: any) => {
  // Check if the source exists and has the required asset reference
  if (!source || !source.asset || !source.asset._ref) {
    console.warn('Invalid image source provided to urlForImage', source);
    return {
      url: () => '/images/placeholder.jpg',
      width: () => 1200,
      height: () => 630,
      format: () => 'jpg',
      toString: () => '/images/placeholder.jpg',
    }
  }
  
  try {
    return imageBuilder.image(source)
  } catch (error) {
    console.error('Error creating image URL:', error);
    return {
      url: () => '/images/placeholder.jpg',
      width: () => 1200,
      height: () => 630,
      format: () => 'jpg',
      toString: () => '/images/placeholder.jpg',
    }
  }
}
