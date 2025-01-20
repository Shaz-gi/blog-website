import { defineType, defineField, defineArrayMember } from "sanity";

export const blog = defineType({
  name: "blog",
  type: "document",
  title: "Blog",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Post Title",
      description: "The main title of the blog post.",
      validation: (Rule) => Rule.required(),
    }),

    // Slug field
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      description: "A unique identifier for the blog post, used in the URL.",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "summary",
      type: "text",
      title: "Summary",
      description: "A short summary or description of the blog post.",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "image",
      type: "image",
      title: "Image",
      description: "The main image for the blog post.",
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alt Text",
          description: "Alternative text for the image (for accessibility).",
          validation: (Rule) => Rule.required(),
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "content",
      type: "array",
      title: "Content",
      description: "The main content of the blog post.",
      of: [
        defineArrayMember({
          type: "block",
        }),
        // Add other types like images, code blocks, etc., if needed
        defineArrayMember({
          type: "image",
          fields: [
            defineField({
              name: "alt",
              type: "string",
              title: "Alt Text",
              description: "Alternative text for the image (for accessibility).",
              validation: (Rule) => Rule.required(),
            }),
          ],
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
  ],
});







// defineField({
    //     name:'author',
    //     type:'reference',
    //     title:'Author',
    //     to:[{
    //         type:'author'
    //     }]
    // })


    // {
    //     name:'gender',
    //     type:'string',
    //     title:'Gender',
    //     options:{
    //         list:[
    //             {title:'Male',value:'male'},
    //             {title:'Female',value:'female'}
    //         ],
    //         layout:'radio',
    //         direction:'horizontal'
    //     }
    // }
