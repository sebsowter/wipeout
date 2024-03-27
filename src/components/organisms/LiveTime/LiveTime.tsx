import { useEffect, useState } from "react";

import { useGameStore } from "../../../state";
import { Time } from "../../atoms/Time";

export function LiveTime() {
  const { isControllable, lapTimeStart } = useGameStore();

  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval!: NodeJS.Timer;

    if (isControllable) {
      interval = setInterval(() => setTime(new Date().valueOf() - lapTimeStart), 10);
    } else {
      clearInterval(interval);

      setTime(0);
    }

    return () => clearInterval(interval);
  }, [isControllable, lapTimeStart]);

  return <Time size="large" value={time / 1000} />;
}
