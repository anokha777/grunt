const path = require('path');

module.exports = function(grunt) {
    require('jit-grunt')(grunt, grunt.log.writeln(path.join(process.cwd())))({
        
        jitGrunt: true,
        customTasksDir: 'grunt-task',
        // configPath: path.join(process.cwd(), 'grunt-task'),
        // init: true, 
        jitGrunt: {
            staticMappings: {
                cssmin: 'grunt-task/cssmin.js',
            }
        }
    });

    // require('load-grunt-config')(grunt, {
    //     jitGrunt: {
    //         // here you can pass options to jit-grunt (or just jitGrunt: true)
    //         staticMappings: {
    //             // here you can specify static mappings, for example:
    //             cssmin: 'grunt-task/cssmin.js'
    //         }
    //     }
    // });

    require('time-grunt')(grunt);
    
    // grunt.initConfig({
        // cssmin:{
        //     my_target: {
        //         files: [{
        //             expand: true,
        //             cwd: './css',
        //             src: ['*.css', '!*.min.css'],
        //             dest: './css',
        //             ext: '.min.css'
        //         }]
        //     }
        // }
    // });

   grunt.registerTask('default', ['cssmin']);
};
