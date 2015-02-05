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
	grunt.registerTask('api:test',['mochaTest:test']);
	grunt.registerTask('app:test',['api:test']);

};