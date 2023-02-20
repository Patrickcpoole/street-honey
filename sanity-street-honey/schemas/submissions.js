export default {
  name: 'submissions',
  title: 'Submissions',
  type: 'document',
  fields: [
    {
      name: 'submissionImage',
      title: 'Submissions Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'firstName',
      title: 'first Name',
      type: 'string',
    },
    {
      name: 'lastName',
      title: 'Last Name',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'instagramHandle',
      title: 'Instagram Handle',
      type: 'string',
    },
    {
      name: 'notes',
      title: 'Notes',
      type: 'string',
    }
  ]
}