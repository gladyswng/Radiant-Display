export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Category Name',
      type: 'string',
      description: 'Name of the category'
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
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'Image of the category'
    },

    {
      name: 'description',
      title: 'Description',
      type: 'string',
      description: 'Description of the product'
    },
    {
      name: 'details',
      title: 'Product Details',
      type: 'array',
      of:[{ type: 'string' }],
      description: 'Details of the product'
    },
    {
      name: 'tableKeys',
      title: 'Table Keys',
      type: 'array',
      of:[{ type: 'string' }],
      description: 'Headers that needs to be displayed in the table.'
    }
  ]
}