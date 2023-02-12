export default {
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'title',
      title: 'title',
      type: 'string',
    },
    {
      name: 'shortDesc',
      title: 'Short Description',
      type: 'string',
    },
    {
      name: 'longDesc',
      title: 'Long Description',
      type: 'string',
    },
    {
      name: 'geoPoint',
      title: 'Geo Point',
      type: 'geopoint',
    },
    {
      name: 'dateTime',
      title: 'Date & Time',
      type: 'datetime',
    }
  ]
}
