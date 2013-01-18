/*global module:false*/
module.exports = function(grunt) {

  'use strict';

  // Project configuration.
  grunt.initConfig({
    lint: {
      files: ['grunt.js', 'src/**/*.js', 'test/**/*.js']
    },
    watch: {
      files: '../frozen/src/**/*.js',
      tasks: 'dojo:frozen copy:frozen'
    },
    dojo: {
      frozen: {
        dojo: 'deps/dojo/dojo.js',
        profile: 'frozen.profile.js',
        'package': '../frozen',
        cwd: '../frozen'
      }
    },
    copy: {
      frozen: {
        files: {
          "./": "../frozen/dist/*.js"
        }
      }
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        browser: true,
        laxcomma: true,
        expr: true,
        strict: true
      },
      globals: {
        define: true,
        require: true,
        alert: true,
        Box2D: true,
        console: true
      }
    }
  });

  grunt.loadNpmTasks('grunt-dojo');

  grunt.loadNpmTasks('grunt-contrib-copy');

  // Default task.
  grunt.registerTask('default', 'watch');

};
