var chai = require('chai'),
request = require('supertest'),
app = request('http://localhost:3000');

GLOBAL.expect = chai.expect;
GLOBAL.app = app;

describe("App",function(){
	it('should be up and running',function(done){
		app
		.get('/')
		.expect(200,done);
	});
});

