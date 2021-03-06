var speller = require('./speller');
var completion = require('./completion');

class searchTool {
    train(string1) {
        speller.train(string1);
        completion.train(string1);
    }
    predict(input) {

        let output = [];
        for (var key in speller.correct(input)) {
            if (key != "isEmpty") {
                output.push(key);
            }
        }
        output = output.concat(completion.predictWord(input));
        return output.filter(function (item, index, inputArray) {
            return inputArray.indexOf(item) == index;
        });
    }
}

var search = new searchTool();
module.exports = search;
