// import { type SchemaTypeDefinition } from 'sanity'
// import blog from '../blog';
// import news from '../[slug]/news';

// export const schema: { types: SchemaTypeDefinition[] } = {
//   types: [blog], [news] 

// }

// gemini type error resolve

import { type SchemaTypeDefinition } from 'sanity'
import {blog} from '../blog';
import { post } from '../post';


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blog,post] // Use a comma to separate array elements
};

// grog *[_type == 'post']  | order() {
//   summary,title,image,
//   "slug":slug.current
// }