// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

import product from './product'
import gallery from './gallery'
import category from './category'
import pinFunction from './objects/pinFunction'
import feature from './objects/feature'
import mechanicalData from './objects/mechanicalData'
import displayAddress from './objects/displayAddress'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    product,
    gallery,
    category,
    feature,
    pinFunction,
    mechanicalData,
    displayAddress
    /* Your types here! */
  ])
})
