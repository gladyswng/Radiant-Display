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
      name: 'category',
      title: 'Category',
      type: 'string',
    },
    {
      name: 'cover',
      title: 'Cover',
      type: 'image',
      description: 'Cover of the product'
    },
    {
      name: 'imageGallery',
      title: 'Image Gallery',
      type: 'array',
      of:[{ type: 'image' }],
      
      description: 'Images Gallery of the product'
    },
    {
      name: 'dimensionalDrawing',
      title: 'Dimensional Drawing',
      type: 'image'
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
      name: 'size',
      title: 'Size',
      type: 'string'
    }, 
    {
      name: 'resolution',
      title: 'Resolution',
      type: 'string'
    },
    {
      name: 'pixel',
      title: 'Pixel',
      type: 'string'
    },
    {
      name: 'item',
      title: 'Item',
      type: 'string'
    },
    {
      name: 'displayColor',
      title: 'Display Color',
      type: 'string'
    },
    {
      name: 'activeArea',
      title: 'Active Area',
      type: 'string'
    },
    {
      name: 'viewingArea',
      title: 'Viewing Area',
      type: 'string'
    },
    {
     name: 'outlineDimension',
     title: 'Outline Dimension',
     type: 'string' 
    },
    {
      name: 'dotsSize',
      title: 'Dots Size',
      type: 'string'
    },
    {
      name: 'controller',
      title: 'Controller',
      type: 'string'
    },
    {
      name: 'interface',
      title: 'Interface',
      type: 'string'
    }
  ]
}