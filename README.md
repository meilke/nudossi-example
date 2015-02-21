# nudossi-example

Use [nudossi]() to bump versions for NuGet dependencies in *.csproj and packages.config files.

## Getting started

The following `Gruntfile` will allow you to run it from the command line as well as from inside a Grunt pipeline:

```js
module.exports = function (grunt) {
  
  var packageName = grunt.option('packageName');
  var newVersion = grunt.option('newVersion');
  var path = grunt.option('path');

  grunt.initConfig({
    nudossi: {
      options: {
        packageName: packageName,
        newVersion: newVersion,
        path: path
      },
      cli: {},
      fromConfig: {
        options: {
          packageName: 'My.Message',
          newVersion: '1.2.3-test',
          path: 'path/to/project/files'
        }
      }
    }
  });

  grunt.loadNpmTasks('nudossi');

  grunt.registerTask('default', [ 'nudossi:cli' ]);
}
```

## Command line

To run it from the command line, do the following:

```bash
$ npm install
$ grunt --packageName="My.Message" --newVersion="2.7.0" --path="test/data/destination/"
```

## From within Grunt

To run it from within Grunt:

```bash
$ npm install
$ grunt nudossi:fromConfig
```