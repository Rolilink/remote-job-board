describe('DELETE api/workOffers',function(){
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

		app.del('/api/WorkOffers/' + workoffer.id)
		.send(workoffer)
		.expect(204,done);
	});

});