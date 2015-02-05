describe('PUT api/workOffers',function(){
	var workoffer = {
		title: 'Front End Engineer at Google (Gmail Team)',
		description: 'As a front end developer at gmail team you will code awesome angular code.',
		url: 'http://www.google.com'
	};

	before(function(done){
		app.post('/api/WorkOffers')
		.send(workoffer)
		.end(function(err,res){
			workoffer.id = res.body.id;
			done();
		});
	});

	it('should update the workoffer',function(done){
		workoffer.url = 'http://www.google.com/jobs';

		app.put('/api/WorkOffers')
		.send(workoffer)
		.expect(200)
		.end(function(err,res){
			var workOffers = res.body;
			expect(workOffers).to.have.property('url',workoffer.url);
			expect(workOffers).to.have.property('id',workoffer.id);
			done();
		});
	});

});