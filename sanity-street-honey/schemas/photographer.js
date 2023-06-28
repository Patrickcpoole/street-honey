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
      name: 'question1',
      title: 'Question 1',
      type: 'string'
    },
    {
      name: 'answer1',
      title: 'Answer 1',
      type: 'string'
    },
    {
      name: 'question2',
      title: 'Question 2',
      type: 'string'
    },
    {
      name: 'answer2',
      title: 'Answer 2',
      type: 'string'
    },
    {
      name: 'question3',
      title: 'Question 3',
      type: 'string'
    },
    {
      name: 'answer3',
      title: 'Answer 3',
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