import { MatchReader } from "./MatchReader";
import { MatchResult } from "./MatchResults";
import { dateStringToDate } from "./utils";

const reader = new MatchReader("football.csv");
reader.read();

const dateOfFirstMatch = reader.data[0][0];
console.log(dateOfFirstMatch);

let manUnitedWins = 0;

for (let match of reader.data) {
  if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  }

  if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(manUnitedWins);
