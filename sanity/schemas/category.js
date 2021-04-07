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
      name: 'headerOptions',
      title: 'Category Table Header Options',
      type: 'array',
      of: [{ type: 'headerOption' }],
      description: 'Please choose the header options. Place them in order that you would like it to be displayed',
    },
    {
      name: 'tableHeaders',
      title: 'Table Headers',
      type: 'array',
      of:[{ type: 'string' }],
      description: 'Header text that needs to be displayed in the table header. Set them in same order as header options'
    }, 
    // {
    //   name: 'tableOptions',
    //   title: 'Category Table Options',
    //   type: 'array',
    //   of:[{type: 'string'}],
    //   options: {
    //     list: [
    //       {title: 'Display', value: 'display'},
    //       {title: 'Item', value: 'item'},
    //       {title: 'Viewing Area', value: 'viewingArea'},
    //       {title: 'Outline Dimension', value: 'outlineDimension'},
    //       {title: 'Dot Size', value: 'dotSize'},
    //       {title: 'Dot Pitch', value: 'dotPitch'},
    //       {title: 'driver IC', value: 'driverIC'},
    //       {title: 'Character Size', value: 'characterSize'}
    //     ]
    //   },
    //   description: 'Please click the header options in the same order of Table Headers. If click wrong you would need to clear all checked items and click again',
    //   sortable: true
    // }
  ]
}