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