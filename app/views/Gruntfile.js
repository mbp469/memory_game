module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'lib/styles/main.min.css': 'src/styles/main.scss'
                }
            }
        },

        haml: {
            dist: {
                files: {
                    'layouts/index.html':'layouts/index.haml',
                    'layouts/leaderBoard.html':'layouts/leaderBoard.haml',
                }
            }
        },

        babel: {
            options: {
                sourceMap: true,
                presets: ['es2015']
            },
            dist: {
                files: {
                    'lib/js/app.js': 'src/js/app.js'
                }
            }
        },

        watch: {
            css: {
                files: ['src/styles/**/*'],
                tasks: ['sass']
            },

            html: {
              files: ['layouts/*.haml'],
              tasks: ['haml']
            },
            javascript: {
              files: [
                'src/js/**/*'
              ],
              tasks: ['babel']
},
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-haml2html');
    grunt.loadNpmTasks('grunt-babel');
    grunt.registerTask('default', [
        'sass',
        'watch',
        'haml',
        'babel'
    ]);
};
