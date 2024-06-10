import { BufferWriter } from "../Utils/BufferWriter";

export class PlayerTribute {
    private epicPlayers = " "; 
    private exceptionalMentors = " "; 
    private charityChampions = " "; 
    private growPassLeaders = " ";

    constructor() {};

    public getEpicPlayers() { return this.epicPlayers; }
    public getExceptionalMentors() { return this.exceptionalMentors; }
    public getCharityChampions() { return this.charityChampions; }
    public getGrowPassLeaders() { return this.growPassLeaders; }
    
    public setEpicPlayers(str: string) {
        this.epicPlayers = str;
        return this;
    }

    public setExceptionalMentors(str: string) {
        this.exceptionalMentors = str;
        return this;
    }

    public setCharityChampions(str: string) {
        this.charityChampions = str;
        return this;
    }

    public setGrowPassLeaders(str: string) {
        this.growPassLeaders = str;
        return this;
    }

    public compress() {
        const bw = new BufferWriter(
            (this.epicPlayers.length + 2) +
            (this.exceptionalMentors.length + 2) +
            (this.charityChampions.length + 2) +
            (this.growPassLeaders.length + 2)
        ) // +2 for string length uint16

        bw.write(this.epicPlayers.length, 2, true);
        bw.writeString(this.epicPlayers);

        bw.write(this.exceptionalMentors.length, 2, true);
        bw.writeString(this.exceptionalMentors);

        bw.write(this.charityChampions.length, 2, true);
        bw.writeString(this.charityChampions);

        bw.write(this.growPassLeaders.length, 2, true);
        bw.writeString(this.growPassLeaders);

        return bw.get();
    }
}