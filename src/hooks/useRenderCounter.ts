import {useEffect, useRef} from 'react';

const useRenderCounter = (componentName: string) => {
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current += 1;
    console.log(`${componentName} rendered ${renderCount.current} times`);
  });
};

export default useRenderCounter;
