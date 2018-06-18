module.exports = function(grunt) {

    grunt.initConfig({
        concat: {
            options: {
            separator: ';',
          },
          dist: {
            src: ['node_modules/aos/dist/aos.js', 'js/app.js'],
            dest: 'js/min.js',
          },
        },

        uglify: {
            my_target: {
              files: {
                'js/min.js': ['js/min.js']
              }
            }
          },

        browserSync: {
            dev: {
                bsFiles: {
                    src : ['*.html,', 'img/*.jpg','./img/*.png', 'js/*.js', 'css/*.css']
                },
                server: {
                    baseDir: "./",
                    index: "index.html",
                    directory: true
                }
            }
        }
      });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-browser-sync');
    

    grunt.registerTask('default', ['concat:dist','uglify']);
    grunt.registerTask('dev', ['browserSync:dev']);
}