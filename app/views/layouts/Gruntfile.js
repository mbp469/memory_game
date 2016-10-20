module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'src/styles/main.min.css': 'src/styles/main.scss'
                }
            }
        },

        haml: {
            dist: {
                files: {
                    'index.html':'index.haml',
                    'leaderBoard.html':'leaderBoard.haml'
                }
            }
        },

        watch: {
            css: {
                files: ['src/styles/**/*'],
                tasks: ['sass']
            },

            html: {
              files: ['*.haml'],
              tasks: ['haml']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-haml2html');
    grunt.registerTask('default', [
        'sass',
        'watch',
        'haml'
    ]);
};
