export default {
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    {
      name: 'bannerImage',
      title: 'Banner Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'mickDesc',
      title: 'Mick Description',
      type: 'string',
    },
    {
      name: 'mickImage',
      title: 'Mick Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'patDesc',
      title: 'Pat Description',
      type: 'string',
    },
    {
      name: 'patImage',
      title: 'Patrick Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}
