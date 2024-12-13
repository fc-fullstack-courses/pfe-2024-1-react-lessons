import { useEffect, useState } from 'react';

export function useLoadData(loadData) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    loadData()
      .then((data) => {
        setData(data);
      })
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  }, []);

  return {
    data,
    isLoading,
    error,
  };
}

export function useMouseTracker(elemRef) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  function handleMouseMove({ clientX, clientY }) {
    setCoords({
      x: clientX,
      y: clientY,
    });
  }

  useEffect(() => {
    const elem = elemRef.current ? elemRef.current : document;

    elem.addEventListener('mousemove', handleMouseMove);

    return () => {
      elem.removeEventListener('mousemove', handleMouseMove);
    };
  }, [elemRef]);

  return coords;
}
