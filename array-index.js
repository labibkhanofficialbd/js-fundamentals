
var bookPages = ['hablu', 'bolod', 'choddogusti', 'bettery', 'peracitamol', 'gymnesium'];

var bettayIndex = bookPages.indexOf('bettery');
var secondIndex = bookPages[2];
bookPages[1] = "labib khan"

console.log(bettayIndex);
console.log(secondIndex);
console.log(bookPages);



var nums = [57, 60, 60];

var totalSum = 0;
for(var i in nums) {
    totalSum += nums[i];
}

var numsCnt = nums.length;

var average = totalSum / numsCnt;

console.log('Average is: ' + average);

