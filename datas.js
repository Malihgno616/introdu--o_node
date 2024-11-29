const { DateTime, Interval } = require("luxon");

const agora = DateTime.now();
console.dir(agora);
console.log(new Date().toLocaleString());
console.log(new Date().toLocaleString("en-US"));
// console.log(new Date().getDate());

const dataDoAniversario = DateTime.fromFormat("02/01/1991", "dd/mm/yyyy");
console.dir(dataDoAniversario.day);
console.log(dataDoAniversario.month);
console.log(dataDoAniversario.year);

const idade = Interval.fromDateTimes(dataDoAniversario, agora).length("year");
console.log(Math.floor(idade));

const isoDate = "2020-11-19T21:22:00-0300";
const RFC = "Thu, 19 Nov 2020 21:22:00 -0300";

console.log(DateTime.fromISO(isoDate).toLocaleString());
console.log(DateTime.fromRFC2822(RFC).toLocaleString());
