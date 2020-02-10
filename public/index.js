$(() => {
  // after loading html
  start("$");
  //$("#mainContainer").html(moneySpent());
});

function moneySpent(multiplier) {
  const tuition = 25000 * (multiplier || 1);
  const startDate = new Date("2020-01-29");
  const today = new Date();
  const numberOfDaysPerSemester = 107;
  const moneySpentPerMintue = tuition / (numberOfDaysPerSemester * 24 * 60);
  const timeSpentUntilNowInMins = (today - startDate) / 1000 / 60;
  const moneySpentUntilNow = (
    moneySpentPerMintue * timeSpentUntilNowInMins
  ).toFixed(2);
  return moneySpentUntilNow;
}
let intravelId;
const timeOflandingOnWebsite = new Date();
function moneySpentAfterOpeningPage(timeOfOpeningPage, multiplier) {
  const tuition = 25000 * (multiplier || 1);
  const startDate = timeOflandingOnWebsite;
  const today = new Date();
  const numberOfDaysPerSemester = 107;
  const moneySpentPerMintue = tuition / (numberOfDaysPerSemester * 24 * 60);
  const timeSpentUntilNowInMins = (today - startDate) / 1000 / 60;
  const moneySpentUntilNow = (
    moneySpentPerMintue * timeSpentUntilNowInMins
  ).toFixed(2);
  return moneySpentUntilNow;
}

function moneySpentLive(timeOfOpeningPage, multiplier, currency) {
  console.log("here");
  intravelId = setInterval(() => {
    console.log("wtf");
    let html = `
    <p style="font-size:18px">${moneySpent(multiplier)} ${currency} </p>
     <p>Money Spent after opening this website: ${moneySpentAfterOpeningPage(
       timeOfOpeningPage,
       multiplier
     )} ${currency}</p>
     <p>Time Spent on the Website : ${msToTime(
       new Date().getTime() - timeOflandingOnWebsite.getTime()
     )}</p>`;
    $("#mainContainer").html(html);
  }, 500);
}

function start(currency) {
  if (typeof intravelId != "undefined") {
    clearInterval(intravelId);
  }

  let timeOfOpeningPage = new Date();
  if (currency == "Rs") {
    moneySpentLive(timeOfOpeningPage, 72, currency);
  } else if (currency == "SR") {
    moneySpentLive(timeOfOpeningPage, 3.75, currency);
  } else if (currency == "$") {
    moneySpentLive(timeOfOpeningPage, 1, currency);
  } else if (currency == "¥") {
    moneySpentLive(timeOfOpeningPage, 7, currency);
  } else if (currency == "₩") {
    moneySpentLive(timeOfOpeningPage, 1189, currency);
  }
}

function msToTime(s) {
  var ms = s % 1000;
  s = (s - ms) / 1000;
  var secs = s % 60;
  s = (s - secs) / 60;
  var mins = s % 60;
  var hrs = (s - mins) / 60;

  return (
    hrs.toString().padStart(2, 0) +
    ":" +
    mins.toString().padStart(2, 0) +
    ":" +
    secs.toString().padStart(2, 0)
  );
}
