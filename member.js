function skillsMember() {
  return {
    name: 'skillsMember',
    type: 'object',
    properties: {
      id: {
        type: 'string',
        required: true,
        unique: true
      },
      name: {
        type: 'string',
        required: true
      },
      skills: {
        type: 'array',
        items: {
          type: 'string'
        }
      }
    }
  };
}