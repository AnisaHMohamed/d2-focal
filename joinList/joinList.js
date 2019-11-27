
const joinList = (itemList) => {
  let final = "";
  let item = "";

  if (itemList.length === 0) {
    return item;

  }
  for (let i = 0; i < itemList.length - 1; i++) {
    item = itemList[i];
    final = final + item + ", ";
  }
  item = itemList[itemList.length - 1];// final = final + itemList[itemList.length];
  return final + item;
};

// Test / Driver Code below...
const conceptList = ["gists", "types", "operators", "iteration", "problem solving"];
const concepts = joinList(conceptList);
console.log(`Today I learned about ${concepts}.`);
