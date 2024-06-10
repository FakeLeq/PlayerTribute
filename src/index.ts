import { writeFileSync } from "fs";
import { PlayerTribute } from "./PlayerTribute/PlayerTribute"

(async() => {
    const playerTribute = new PlayerTribute();

    playerTribute.setEpicPlayers("`4github.com/FakeLeq");
    playerTribute.setExceptionalMentors("`8Hello<CR>`3There!");
    // use <CR> for new line

    writeFileSync("player_tribute.dat", playerTribute.compress());
})()