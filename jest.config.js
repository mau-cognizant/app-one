module.exports = {
  name: 'app-one',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/app-one',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
