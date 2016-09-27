Package.describe({
  name: 'qtheninja:featurebox',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'This is a voting and issue tracking system. Very simple but easy to add to any startup.',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.1.1');
  api.use(['ecmascript',
    'minimongo', 
    'mongo-livedata', 
    'templating', 
    'aldeed:simple-schema', 
    'aldeed:collection2',
    'aldeed:autoform']);


  //files to add
  api.addFiles(['issues/createIssue.html', 
    'issues/listIssues.html',
    'issues/listIssues.js',
    'features/createFeature.html',
    'features/listFeatures.html',
    'features/listFeatures.js',
    'main.js']);

  api.addFiles('lib/collections/Issues.js');
  api.addFiles('lib/collections/Features.js');
  //api.mainModule('featurebox.js');
  api.export('Issues', ['client', 'server']);
  api.export('Features', ['client', 'server']);

});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('qtheninja:featurebox');
  api.mainModule('featurebox-tests.js');
});