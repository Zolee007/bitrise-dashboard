import { useState, useEffect, useRef } from "react";

import { token } from "services/AuthService";

export type FetchResult<T> = {
  isLoading: boolean;
  data?: T;
  error?: Error;
};

export function useFetchData<TResponseData, TResultData>(
  url: string,
  transformer: (data: TResponseData) => TResultData,
  depends: unknown[],
): FetchResult<TResultData> {
  const savedTransformer = useRef(transformer);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [isTransforming, setIsTransforming] = useState<boolean>(false);
  const [response, setResponse] = useState<TResponseData>();
  const [data, setData] = useState<TResultData>();
  const [error, setError] = useState<Error>();

  useEffect(() => {
    savedTransformer.current = transformer;
  }, [transformer]);

  useEffect(() => {
    setIsFetching(true);
    setResponse(undefined);
    setData(undefined);
    setError(undefined);

    fetch(url, { headers: { Authorization: token() } })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`${res.status}: ${res.statusText}`);
        }
        return res.json();
      })
      .then((data: TResponseData) => {
        setResponse(data);
      })
      .catch((reason) => {
        setError(reason);
      })
      .finally(() => {
        setIsFetching(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, ...depends]);

  useEffect(() => {
    if (response && savedTransformer.current) {
      setIsTransforming(true);
      const data = savedTransformer.current(response);
      setData(data);
      setIsTransforming(false);
    }
  }, [response]);

  return { isLoading: isFetching || isTransforming, data, error };
}
