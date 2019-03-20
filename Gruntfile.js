module.exports = function(grunt) {
    require('jit-grunt')(grunt)({
        // customTasksDir: 'grunt-task',
        jitGrunt: true
    });
    require('time-grunt')(grunt);
    
    grunt.initConfig({
        cssmin:{
            my_target: {
                files: [{
                    expand: true,
                    cwd: './css',
                    src: ['*.css', '!*.min.css'],
                    dest: './css',
                    ext: '.min.css'
                }]
            }
        }
    });

    grunt.registerTask('default', ['cssmin']);
};
