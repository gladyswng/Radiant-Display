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
    },{
      name: 'item',
      title: 'Product Item',
      type: 'string',
      description: 'module number of the product'
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
      name: 'feature',
      title: 'Feature',
      type: 'feature',
      
    },
    {
      name: 'mechanicalData',
      title: 'Mechanical Data',
      type: 'mechanicalData',
      
    },
    { 
      name: 'interfacePinFunction',
      title: 'Interface Pin Function',
      type: 'array',
      of:[{ type: 'pinFunction' }]
    }, {
      name: 'displayAddress',
      title: 'Display Address',
      type: 'array',
      of: [{ type: 'displayAddress' }]
    }
  ]
}