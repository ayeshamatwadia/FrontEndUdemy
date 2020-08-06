var array = ["Banana", "Apples", "Oranges", "Blueberries"];

// remove banana

array.shift();

// sort the array

array.sort();

// put Kiwi at the end

array.push("Kiwi");

// remove apples from the array

array.splice(0,1);

// reverse the order of the current array

array.reverse();

var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];

// access Oranges

array2[1][1][0]

