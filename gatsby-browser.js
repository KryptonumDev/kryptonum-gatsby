import React from 'react';
import Layout from "./src/components/global/Layout"

export const wrapPageElement = ({ props, element }) => {
  return <Layout {...props}>{element}</Layout>
}