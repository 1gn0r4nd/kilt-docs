module.exports = {
  apps: [
    {
      type: 'autogenerated',
      dirName: 'apps',
    },
  ],
  chain: [
    {
      type: 'autogenerated',
      dirName: 'chain',
    },
  ],
  sdk: [
    'sdk/introduction',

    {
      'Core KILT Features': [
        {
          type: 'autogenerated',
          dirName: 'sdk/0-core-feature',
        },
      ],
    },
    {
      Workshop: [
        {
          type: 'autogenerated',
          dirName: 'sdk/1-workshop',
        },
      ],
    },
    {
      'Getting Started': [
        {
          type: 'autogenerated',
          dirName: 'sdk/2-getting-started',
        },
      ],
    },
  ],
}
