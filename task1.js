"use strict";

function City(nameCity, foundationDate, population, countryOfLocation) {
  return {
    nameCity: nameCity,
    foundationDate: foundationDate,
    population: population,
    countryOfLocation: countryOfLocation,

    showFullInformation() {
        return `Город ${this.nameCity} был основан в ${this.foundationDate}` +  
        ` и расположен в стране ${this.countryOfLocation}, численность населения города составляет ${this.population} человек`;
    }
  };
}

function comparisonCity(oneCity, twoCity) {
  if (oneCity.nameCity.length === twoCity.nameCity.length) {
    alert('Длина названия города ' + oneCity.nameCity + ' равна ' + twoCity.nameCity);
  }
  else if (oneCity.nameCity.length >>> twoCity.nameCity.length) {
    alert('Длина названия города ' + oneCity.nameCity + ' больше ' + twoCity.nameCity);
  }
  else {
    alert('Длина названия города ' + oneCity.nameCity + ' меньше ' + twoCity.nameCity);
  }
}

function comparisonOfFoundingDates(oneCity, twoCity) {
  if (oneCity.foundationDate === twoCity.foundationDate) {
    alert('Дата основания города ' + oneCity.nameCity + ' равна ' + twoCity.nameCity);
  }
  else if (oneCity.foundationDate >>> twoCity.foundationDate) {
    alert('Дата основания города ' + oneCity.nameCity + ' больше ' + twoCity.nameCity);
  }
  else {
    alert('Дата основания города ' + oneCity.nameCity + ' меньше ' + twoCity.nameCity);
  }
}

function comparisonOfPopulation(oneCity, twoCity) {
  if (oneCity.population === twoCity.population) {
    alert('Численность населения города ' + oneCity.nameCity + ' равна ' + twoCity.nameCity);
  }
  else if (oneCity.population >>> twoCity.population) {
    alert('Численность населения города ' + oneCity.nameCity + ' больше ' + twoCity.nameCity);
  }
  else {
    alert('Численность населения города ' + oneCity.nameCity + ' меньше ' + twoCity.nameCity);
  }
}

function showAllCitiesInformation(one, two, three, four) {
  alert(one.showFullInformation());
  alert(two.showFullInformation());
  alert(three.showFullInformation());
  alert(four.showFullInformation());
}

function sortByPopulation(cites) {
  for(let i = cites.length - 1; i >= 1; i--) {
    for (let j = 0; j < i; j++) {
      if (cites[j].population < cites[j+1].population) {
        let temp = cites[j];
        cites[j] = cites[j+1];
        cites[j+1] = temp;
      }
    }
  }
}

function my(a,b) {
  if (a > b) {
    return 1;
  }
  if (a == b) {
    return 0;
  }
  if (a < b) {
    return -1;
  }
}

alert("Задание №1");
let firstCity = new City('Moscow', 1147, 12678079, 'Russia');
let secondCity = new City('New York', '1624', 8405837, 'USA');

comparisonCity(firstCity, secondCity);
comparisonOfFoundingDates(firstCity, secondCity);
comparisonOfPopulation(firstCity, secondCity);
alert(firstCity.showFullInformation());
alert(secondCity.showFullInformation());

alert("Задание №2");
let thirdCity = new City();
for (let key in firstCity) {
  thirdCity[key] = firstCity[key];
};
let fourthCity = Object.assign({}, secondCity);

thirdCity.nameCity = 'Petersburg';
thirdCity.foundationDate = 1703;

fourthCity.nameCity = 'Washington';
fourthCity.foundationDate = 1791;

showAllCitiesInformation(firstCity, secondCity, thirdCity, fourthCity);

alert("Задание №3");
let obj = {
  method1() {
    return this;
  },
  method2() {
    return this;
  },
  method3() {
    alert('метод3');
  }
};

obj.method1().method2().method3();

alert("Задание №4");
let cites = [firstCity, secondCity, thirdCity, fourthCity];
alert('До сортировки:');
for (let i = 0; i < cites.length; i++) {
  alert(cites[i].nameCity);
};
sortByPopulation(cites);
alert('После сортировки:');
for (let i = 0; i < cites.length; i++) {
  alert(cites[i].nameCity);
};

alert("Задание №5");
let array = [45, 78, 10, 3];
array.sort(my).map(item => {
         let temp = item.toString();
         let sum = 0;

         for (let key in temp) {
             sum += Number(temp[key]);
         }

         return sum;
     });
