var chai = require('chai'),
things = require('chai-things'),
request = require('supertest'),
app = request('http://localhost:3000');

chai.use(things);

GLOBAL.expect = chai.expect;
GLOBAL.app = app;

describe('App',function(){
	it('should be up and running',function(done){
		app
		.get('/')
		.expect(200,done);
	});
});

