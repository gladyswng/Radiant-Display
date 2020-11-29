/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
import "./src/css/index.css"
import React from 'react';
import Layout from './src/components/Layout';


// our plugin - see gatsby docs
export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}

