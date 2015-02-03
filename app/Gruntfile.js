module.exports = function(grunt){
	grunt.initConfig({
		mochaTest:{
			test:{
				options:{
					reporter: 'spec'
				},
				src: ['specs/**/*.js']
			}
		}
	});

	grunt.loadNpmTasks('grunt-mocha-test');
	grunt.registerTask('app:test',['mochaTest:test']);

};