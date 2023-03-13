export default {
  name: 'photographer',
  title: 'Photographer',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'array',
      of: [{type: 'image'}],
      options: {
        hotspot: true
      }
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 90
      }
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'string'
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string'
    },
    {
      name: 'favoriteCamera',
      title: 'Favorite Camera',
      type: 'string'
    },
    {
      name: 'instagram',
      title: 'Instagram',
      type: 'string'
    },
  ]
}