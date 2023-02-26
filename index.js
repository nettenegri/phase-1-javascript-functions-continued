function saturdayFun(firstActivity = "roller-skate") {
  console.log(`This Saturday, I want to ${firstActivity}!`);
  return `This Saturday, I want to ${firstActivity}!`;
}

saturdayFun();
saturdayFun("bathe my dog");

const mondayWork = function (secondActivity = "go to the office") {
  console.log(`This Monday, I will ${secondActivity}.`);
  return `This Monday, I will ${secondActivity}.`;
};
mondayWork();

function wrapAdjective(outterFunction = "*") {
  return function (innerFunction = "special") {
    return `You are ${outterFunction}${innerFunction}${outterFunction}!`;
  };
}
wrapAdjective("*")("a hard worker!");
