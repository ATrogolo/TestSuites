(function(mockData) {
  describe('This is a mock test', function() {
    var one = 1;

    it('should be equal to one', function() {
      expect(one).toBe(1);
    });

    it('should be undefined', function() {
      expect(one.two).toBeUndefined();
    });
  });


  describe('Search of ristoranti in Milano (MI)', function() {
    var response = mockData.searchpgRestaurants;
    var testRunned;

    /**
    Jasmine provides some functions as beforeEach(), afterEach(), beforeAll() and afterAll().
    beforeEach function is called once before each spec in the describe in which it is called,
    and the afterEach function is called once after each spec.

    The beforeAll function is called only once before all the specs in describe are run,
    and the afterAll function is called after all specs finish.
    **/

    afterEach(function() {
      if (testRunned == undefined) testRunned = 0;
      testRunned += 1;
      console.log("Until now {testRunned} test runned".replace("{testRunned}", testRunned));
    });

    it('response should be OK', function() {
      expect(response.isOk).toBe(true);
      expect(response.isError).not.toBe(true);
      expect(response.what).toEqual("ristoranti");
    });

    // xit and xdescribe stand for a commented test
    it('response where Milano (MI)', function() {
      expect(response.where).toEqual("Milano (MI)");
    });

    /* other: toBeDefined, toBeUndefined, toBeNull, toBeTruthy, toBeFalsy,
      toContain, toBeLessThan, toBeGreaterThan, toThrow, toThrowError
    */
    it('response should present several results', function() {
      expect(response.resultsNumber).toBeGreaterThan(1);
    });

    it('matches any value', function() {
      expect({}).toEqual(jasmine.any(Object));
      expect(12).toEqual(jasmine.any(Number));
    });

    it('every result should have an id', function() {
      for (var i = 0; i < response.results.length; i++) {
        expect(response.results[i].id).toBeDefined();
      }
    });


    /** Asynchronous Support
    Calls to beforeAll, afterAll, beforeEach, afterEach, and it can take
    an optional single argument that should be called when the async work is complete.
    This spec will not start until the done function is called in the call
    to beforeEach above. And this spec will not complete until its done is called.
    **/
    describe('Async testing', function() {
      var counter = 0;

      beforeEach(function(done) {
        console.log('Async test is running...');
        setTimeout(function() {
          counter = 1;
          done();
        }, 2000);
      });

      it('shoud be async', function(done) {
        expect(counter).toBe(1);
        console.log('Async test is completed');
        done();
      });
    });
  });
})(testData);
