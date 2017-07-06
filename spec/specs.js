describe("firstPartOfLyrics", function() {
  it("return first part of the lyrics with the inputted number", function() {
    var output = "<p><font color='orange'>" + 8 + "</font> bottle"+ "s" + " of beer on the wall, <font color='orange'>" + 8 + "</font> bottle"+ "s" + " of beer.<br>";
    expect(firstPartOfLyrics(8, "s")).to.equal(output);
  });

  it("return first part of the lyrics with the inputted string", function() {
    var output = "<p><font color='orange'>" + "no more" + "</font> bottle"+ "s" + " of beer on the wall, <font color='orange'>" + "no more" + "</font> bottle"+ "s" + " of beer.<br>";
    expect(firstPartOfLyrics("no more", "s")).to.equal(output);
  });
});

describe("secondPartOfLyrics", function() {
  it("return the second part of lyrics with the inputted number", function() {
    var output = "Take one down and pass it around, <font color='orange'>" + 1 + "</font> bottle"+ "" + " of beer on the wall.</p>";
    expect(secondPartOfLyrics(1, "")).to.equal(output);
  });

  it("return the second part of lyrics with the inputted String", function() {
    var output = "Take one down and pass it around, <font color='orange'>" + "no more" + "</font> bottle"+ "s" + " of beer on the wall.</p>";
    expect(secondPartOfLyrics("no more", "s")).to.equal(output);
  });
});

describe("noMoreBottleLyrics", function() {
  it("return the no more bottle lyrics with correct inputted number", function() {
    var output = "<font color='green'>Go to the store and buy some more, <font color='orange'>" + 5 + "</font> bottles of beer on the wall.</font></p>";
    expect(noMoreBottleLyrics(5)).to.equal(output);
  });
});

describe("getLyrics", function() {
  it("return the correct beer song lyrics with correct inputted number", function() {
    var output = "<p><font color='orange'>" + "no more" + "</font> bottle"+ "s" + " of beer on the wall, <font color='orange'>" + "no more" + "</font> bottle"+ "s" + " of beer.<br>" + "<font color='green'>Go to the store and buy some more, <font color='orange'>" + 0 + "</font> bottles of beer on the wall.</font></p>";
    expect(getLyrics(0)).to.equal(output);
  });
});
