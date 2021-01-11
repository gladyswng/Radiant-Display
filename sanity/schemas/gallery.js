export default {
  name: 'gallery',
  title: 'Gallery',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Gallery Name',
      type: 'string',
      description: 'Name of the gallery'
    },
    {
      name: 'imageGallery',
      title: 'Image Gallery',
      type: 'array',
      of:[{ type: 'image' }],
      description: 'Images of the gallery'
    }
  ]
}