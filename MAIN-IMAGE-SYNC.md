# Main Image Auto-Sync Feature

This feature automatically adds the main image to the body content of your blog posts. This saves you time and ensures consistency in your content.

## How It Works

1. Upload a main image to your blog post using the "Main Image" field
2. When you publish the post, the image will be automatically added as the first item in your body content
3. You don't need to add the image again in the body content editor
4. You can also manually trigger the sync using the "Sync Main Image to Body" action in the document menu

## Benefits

- **Time-saving**: No need to add the same image twice
- **Consistency**: Ensures the main image is always displayed in your content
- **Automatic updates**: If you change the main image, you can sync it to the body content

## User Interface

The plugin adds useful UI elements to make the sync status clear:

- A status indicator below the main image that shows whether the image is currently synced with the body content
- A document action "Sync Main Image to Body" in the document menu that lets you manually trigger the sync
- Clear instructions in the field description

## Additional Notes

- The sync happens automatically when you publish a post (if the image is not already in the body)
- You can also manually trigger the sync at any time using the document action
- If you want to position the main image differently, you can delete it from the body content and add it manually at your preferred position

## Technical Implementation

This feature is implemented using a Sanity Studio plugin that adds:

1. A document action to manually sync the image
2. A hook into the publish action to automatically sync the image before publishing
3. UI components to show the sync status

The plugin is called `mainImageBodySyncPlugin` and is defined in `src/sanity/plugins/mainImageBodySyncPlugin.js`.

### Configuration

You can configure the plugin in `sanity.config.ts`:

```js
mainImageBodySyncPlugin({
  autoSync: true // Set to false to disable automatic syncing on publish
})
```

If you need to disable this feature completely, you can remove the plugin from the Sanity configuration in `sanity.config.ts`. 