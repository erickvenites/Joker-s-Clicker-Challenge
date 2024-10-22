import Lives from "./lives/lives";
import Score from "./score/score";
import Time from "./time/time";
import "./mainMenu.scss";

interface MenuProps {
  score: number;
  lives: number;
  time: number;
}

export function MainMenu({ score, lives, time }: MenuProps) {
  return (
    <header>
      <Time time={time} />
      <Score score={score} />
      <Lives lives={lives} />
    </header>
  );
}
