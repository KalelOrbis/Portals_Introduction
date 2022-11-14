"use strict";
class Player {
    constructor(name, current, score, currentLabel, scoreLabel, section) {
        this.name = name;
        this.current = current;
        this.score = score;
        this.currentLabel = currentLabel;
        this.scoreLabel = scoreLabel;
        this.section = section;
    }
    resetScores() {
        this.current = 0;
        this.score = 0;
        this.currentLabel.textContent = this.current.toString();
        this.scoreLabel.textContent = this.score.toString();
    }
}
