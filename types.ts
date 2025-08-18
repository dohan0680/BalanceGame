
export interface Question {
  id: number;
  question: string;
  optionA: string;
  optionB: string;
}

export enum GameState {
  Start,
  Playing,
  End,
}
