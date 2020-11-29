export default {
  name: 'product',
  title: 'Products',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Product Name',
      type: 'string',
      description: 'Name of the product'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100, 
      }
    },
    {
      name: 'cover',
      title: 'Cover',
      type: 'image',
      description: 'Cover of the product'
    },
    {
      name: 'imagesGallery',
      title: 'Images Gallery',
      type: 'array',
      of:[{ type: 'image' }],
      description: 'Images Gallery of the product'
    },

    {
      name: 'description',
      title: 'Description',
      type: 'string',
      description: 'Description of the product'
    },
    {
      name: 'keywords',
      title: 'Keywords',
      type: 'array',
      of:[{ type: 'string' }],
      description: 'Keywords of the product'
    },
    {
      name: 'models',
      title: 'models',
      type: 'array',
      of:[{ type: 'string' }],
      description: 'Models of the product'
    },
  ]
}