(function(mockData, mocha, chai) {
  mocha.setup('bdd');
  var assert = chai.assert;
  var expect = chai.expect;

  /**
  For a more complete reference start with Jasmine project
  This is a test with Mocha test runner based on Chai library
  For TDD / BDD development there's an entry point named "expect"
  For Assertion testing there's another entry point called "assert"
  **/


  // Chains words: to, be, been, is, that, which, and, has, have, with, at, of, same

  describe('This is a mock test', function() {
    var one = 1;
    var response = mockData.searchpgRestaurants;

    it('Assert test to be equal to one', function() {
      /** first parameter is the actual value
          second one the expected
          third is an optional message
      **/
      assert.equal(one, 1, 'one should be equal to 1');
    });


    // TDD / BDD tests
    it('Not', function() {
      expect(response.isError).to.not.equal(true);
    });

    it('Any', function() {
      expect(response).to.have.any.keys('status', 'detailpg');
    });

    it('Type check', function() {
      expect(response.status).to.be.a('string');
      expect(response.resultsInPage).to.be.a('number');
    });

    it('Contain', function() {
      expect(response.where).to.contain('Milano');
    });

    it('Value check', function() {
      expect(response.isLastPage).to.be.false;
      expect(response.status).to.exist;
      expect(response.results[1].comments.comments).to.be.empty;
    });

    it('Sizes', function() {
      expect(response.resultsNumber).to.be.above(1);
      expect(response.resultsNumber).to.be.at.least(1);
      expect(response.resultsNumber).to.be.below(5000);
      expect(response.resultsNumber).to.be.within(1, 10000);

      expect(response.results).to.have.lengthOf(2);
    });
  });



  mocha.run();
})(testData, mocha, chai);
