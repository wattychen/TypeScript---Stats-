"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const MatchResults_1 = require("./MatchResults");
const CsvFileReader_1 = require("./CsvFileReader");
//Create an object that satisfies the 'DataReader' interface
const csvFileReader = new CsvFileReader_1.CsvFileReader('football.csv');
//Create an instance of MatchReader and pass in something satisfying the 'DataReader' interface
const matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
let manUnitedWins = 0;
for (let match of matchReader.matches) {
    if (match[1] === "Man United" && match[5] === MatchResults_1.MatchResult.HomeWin) {
        manUnitedWins++;
    }
    if (match[2] === "Man United" && match[5] === MatchResults_1.MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
console.log(manUnitedWins);
