import { useState, useCallback } from "react";

export type RetryHandler = {
  dependency: number;
  handler?: VoidFunction;
};

export function useRetryHandler(): RetryHandler {
  const [time, setTime] = useState<number>(new Date().valueOf());
  const handler = useCallback(() => setTime(new Date().valueOf()), []);
  return { dependency: time, handler };
}
