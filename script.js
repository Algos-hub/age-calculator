"use strict";
let currentDate = new Date();
let date = currentDate.getDate();
let month = currentDate.getMonth() + 1;
let year = currentDate.getFullYear();

document.querySelector(".check").addEventListener("click", function () {
  const birthDay = Number(document.querySelector("#day").value);
  const birthMonth = Number(document.querySelector("#month").value);
  const birthYear = Number(document.querySelector("#year").value);

  let birthDate = new Date(`${birthMonth}-${birthDay}-${birthYear}`);
  let d = birthDate.getDate();
  let m = birthDate.getMonth() + 1;
  let y = birthDate.getFullYear();
  console.log(birthDate);
  console.log(d);
  console.log(m);
  console.log(y);
  console.log(birthYear);
  const time1 = currentDate.getTime();
  const time2 = birthDate.getTime();

  if (!isNaN(birthDate) === false || birthYear === 0) {
    if (birthDay === 0) {
      document.querySelector(".dd").style.color = "hsl(0, 100%, 67%)";
      document.querySelector("#day").style.color = "hsl(0, 100%, 67%)";
      document.querySelector("#day").style.borderColor = "hsl(0, 100%, 67%)";
      document.querySelector(".d").textContent = "This field is required";
    } else {
      document.querySelector(".dd").style.color = "hsl(0, 1%, 44%)";
      document.querySelector("#day").style.color = "black";
      document.querySelector("#day").style.borderColor = "hsl(0, 1%, 44%)";
      document.querySelector(".d").textContent = "";
    }
    if (birthMonth === 0) {
      document.querySelector(".mm").style.color = "hsl(0, 100%, 67%)";
      document.querySelector("#month").style.color = "hsl(0, 100%, 67%)";
      document.querySelector("#month").style.borderColor = "hsl(0, 100%, 67%)";
      document.querySelector(".m").textContent = "This field is required";
    } else {
      document.querySelector(".mm").style.color = "hsl(0, 1%, 44%)";
      document.querySelector("#month").style.color = "black";
      document.querySelector("#month").style.borderColor = "hsl(0, 1%, 44%)";
      document.querySelector(".m").textContent = "";
    }
    if (birthYear === 0) {
      document.querySelector(".yy").style.color = "hsl(0, 100%, 67%)";
      document.querySelector("#year").style.color = "hsl(0, 100%, 67%)";
      document.querySelector("#year").style.borderColor = "hsl(0, 100%, 67%)";
      document.querySelector(".y").textContent = "This field is required";
    } else {
      document.querySelector(".yy").style.color = "hsl(0, 1%, 44%)";
      document.querySelector("#year").style.color = "black";
      document.querySelector("#year").style.borderColor = "hsl(0, 1%, 44%)";
      document.querySelector(".y").textContent = "";
      console.log("d = ", d);
      console.log("birthDay = ", birthDay);
      console.log("m = ", m);
      console.log("birthMonth = ", birthMonth);
      console.log("y = ", y);
      console.log("birthYear = ", birthYear);
    }
  } else if (time2 > time1) {
    if (birthYear > year) {
      document.querySelector(".yy").style.color = "hsl(0, 100%, 67%)";
      document.querySelector("#year").style.color = "hsl(0, 100%, 67%)";
      document.querySelector("#year").style.borderColor = "hsl(0, 100%, 67%)";
      document.querySelector(".y").textContent = "Must be in the past";
      if (birthMonth > month) {
        document.querySelector(".mm").style.color = "hsl(0, 100%, 67%)";
        document.querySelector("#month").style.color = "hsl(0, 100%, 67%)";
        document.querySelector("#month").style.borderColor =
          "hsl(0, 100%, 67%)";
        document.querySelector(".m").textContent = "Must be in the past";
      }
    }
    if (birthMonth > month) {
      document.querySelector(".mm").style.color = "hsl(0, 100%, 67%)";
      document.querySelector("#month").style.color = "hsl(0, 100%, 67%)";
      document.querySelector("#month").style.borderColor = "hsl(0, 100%, 67%)";
      document.querySelector(".m").textContent = "Must be in the past";
    }
    if (birthDay > date && birthYear <= year) {
      document.querySelector(".dd").style.color = "hsl(0, 100%, 67%)";
      document.querySelector("#day").style.color = "hsl(0, 100%, 67%)";
      document.querySelector("#day").style.borderColor = "hsl(0, 100%, 67%)";
      document.querySelector(".d").textContent = "Must be in the past";
    }
  } else if (d === birthDay && m === birthMonth && y === birthYear) {
    console.log("good");
    let elapsedTime = Math.floor(
      (currentDate - birthDate) / (1000 * 60 * 60 * 24)
    );

    let dateArray = [birthYear, birthMonth, birthDay];
    let elapsedTimeArray = [year, month, date];
    let elapsedYears;
    let elapsedMonths;
    let elapsedDays;
    let biDays = 0;

    if (birthMonth > month) {
      elapsedYears = year - birthYear - 1;
    } else {
      elapsedYears = year - birthYear;
    }

    while (elapsedTimeArray[0] >= birthYear) {
      if (elapsedTimeArray[0] % 4 === 0 || elapsedTimeArray[0] % 100 === 0) {
        biDays++;
      }
      elapsedTimeArray[0]--;
    }

    if (birthDate > date && birthMonth === month) {
      elapsedMonths = 0;
    } else if (birthMonth <= month) {
      elapsedMonths = month - birthMonth;
    } else {
      elapsedMonths = birthMonth;
    }
    elapsedDays = date - birthDay;
    let days = elapsedDays + biDays;

    if (days >= 30) {
      elapsedMonths++;
      elapsedDays = days - 30;
    } else if (days < 0) {
      elapsedMonths--;
      elapsedDays = days + 30;
    } else {
      elapsedDays = days;
    }

    let months = elapsedMonths;

    if (months >= 12) {
      elapsedYears++;
      elapsedMonths = months - 12;
    } else if (months < 0) {
      elapsedYears--;
      elapsedMonths = months + 12;
    }
    document.querySelector("#day").style.color = "black";
    document.querySelector("#day").style.borderColor = "hsl(0, 1%, 44%)";
    document.querySelector("#month").style.color = "black";
    document.querySelector("#month").style.borderColor = "hsl(0, 1%, 44%)";
    document.querySelector("#year").style.color = "black";
    document.querySelector("#year").style.borderColor = "hsl(0, 1%, 44%)";
    document.querySelector(".dd").style.color = "hsl(0, 1%, 44%)";
    document.querySelector(".d").textContent = "";
    document.querySelector(".mm").style.color = "hsl(0, 1%, 44%)";
    document.querySelector(".m").textContent = "";
    document.querySelector(".yy").style.color = "hsl(0, 1%, 44%)";
    document.querySelector(".y").textContent = "";
    document.querySelector(".years").textContent = elapsedYears;
    document.querySelector(".months").textContent = elapsedMonths;
    document.querySelector(".days").textContent = elapsedDays;
  } else {
    if (d !== birthDay) {
      if (birthMonth > 12 || birthMonth <= 0) {
        document.querySelector(".mm").style.color = "hsl(0, 100%, 67%)";
        document.querySelector("#month").style.color = "hsl(0, 100%, 67%)";
        document.querySelector("#month").style.borderColor =
          "hsl(0, 100%, 67%)";
        document.querySelector(".m").textContent = "Must be a valid month";
      } else {
        document.querySelector(".dd").style.color = "hsl(0, 100%, 67%)";
        document.querySelector("#day").style.color = "hsl(0, 100%, 67%)";
        document.querySelector("#day").style.borderColor = "hsl(0, 100%, 67%)";
        document.querySelector(".d").textContent = "Must be a valid day";
      }
    }
  }
});
