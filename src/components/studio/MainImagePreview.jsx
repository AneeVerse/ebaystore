import React from 'react';
import { Box, Text, Card, Stack } from '@sanity/ui';

/**
 * Component to display the main image in the body content as a preview
 * This helps users see that the image is automatically added to the body
 */
const MainImagePreview = (props) => {
  const { value } = props;
  
  if (!value?.mainImage?.asset?._ref) {
    return (
      <Card padding={4} radius={2} shadow={1} tone="primary">
        <Stack space={3}>
          <Text size={1} weight="semibold">Main Image Preview</Text>
          <Text size={1}>Add a main image to your post</Text>
        </Stack>
      </Card>
    );
  }
  
  // Get Sanity project ID and dataset from window object
  const projectId = window._sanityConfig?.projectId;
  const dataset = window._sanityConfig?.dataset;
  
  if (!projectId || !dataset) {
    return null;
  }
  
  // Extract image info from reference
  const ref = value.mainImage.asset._ref;
  const [, id, dimensions, format] = ref.split('-');
  
  // Build image URL
  const imageUrl = `https://cdn.sanity.io/images/${projectId}/${dataset}/${id}-${dimensions}.${format}`;
  
  return (
    <Card padding={4} radius={2} shadow={1}>
      <Stack space={3}>
        <Text size={1} weight="semibold">Main Image Preview</Text>
        <Text size={1}>Main post image</Text>
        <Box paddingTop={2}>
          <img 
            src={imageUrl} 
            alt={value.mainImage.alt || 'Main image'} 
            style={{ maxWidth: '100%', maxHeight: '200px', objectFit: 'contain' }}
          />
        </Box>
      </Stack>
    </Card>
  );
};

export default MainImagePreview; 