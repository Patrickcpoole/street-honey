export default {
  name: 'submissions',
  title: 'Submissions',
  type: 'document',
  fields: [
    // {
    //   name: 'image',
    //   title: 'Image',
    //   type: 'image',
    //   options: {
    //     hotspot: true,
    //   },
    // },
    {
      name: 'submissionType',
      title: 'Submission Type',
      type: 'string',
    },
    {
      name: 'firstName',
      title: 'First Name',
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