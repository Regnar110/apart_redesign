import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        // opcja służy do generowania SLUG na bazie title.
        //np jak title to Max to przy nacisnieciu generate
        // w polu slug pojawi nam się slug o treści Max
        source: "title",
        maxLength: 96
      }
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "array",
      of: [{ type: "image" }],
      options: {
          hotspot: true
      }
  }),
  ],
})
