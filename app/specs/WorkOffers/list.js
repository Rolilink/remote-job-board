describe('GET api/workOffers',function(){
	var workoffer = {
		title: 'Front End Engineer at Google (Gmail Team)',
		description: 'As a front end developer at gmail team you will code awesome angular code.',
		url: 'http://www.google.com'
	};

	before(function(done){
		app.post('/api/WorkOffers')
		.send(workoffer)
		.end(function(err,res){
			done();
		});
	});

	it('should return a list of work offers',function(done){
		app.get('/api/WorkOffers')
		.expect(200)
		.end(function(err,res){
			var workOffers = res.body;
			expect(workOffers).to.contain.a.thing.with.property('title',workoffer.title);
			done();
		});
	});

});