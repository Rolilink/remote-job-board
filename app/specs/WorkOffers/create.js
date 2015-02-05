describe("POST /api/WorkOffers",function(){
	var workoffer = {
		title: "Front End Engineer at Google (Gmail Team)",
		description: "As a front end developer at gmail team you will code awesome angular code.",
		url: "http://www.google.com"
	};

	it("should create the workoffer",function(done){
		app.post('/api/WorkOffers')
		.send(workoffer)
		.expect(200)
		.end(function(err,res){
			expect(res.body).to.have.property('title',workoffer.title);
			expect(res.body).to.have.property('description',workoffer.description);
			expect(res.body).to.have.property('url',workoffer.url);
			done();
		});
	});

});