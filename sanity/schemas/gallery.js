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
      name: 'imagesGallery',
      title: 'Images Gallery',
      type: 'array',
      of:[{ type: 'image' }],
      description: 'Images of the gallery'
    }
  ]
}