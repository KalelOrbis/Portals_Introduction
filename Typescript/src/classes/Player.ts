class Player {
  constructor(
    public name: string,
    public current: number,
    public score: number,
    public currentLabel: HTMLParagraphElement,
    public scoreLabel: HTMLParagraphElement,
    public section: HTMLElement
  ) {}

  resetScores() {
    this.current = 0;
    this.score = 0;
    this.currentLabel.textContent = this.current.toString();
    this.scoreLabel.textContent = this.score.toString();
  }
}
