import React from 'react';
import { useMediaQuery } from 'react-responsive';

const PC = ({ children }) => {
  const isPc = useMediaQuery({
    query: '(min-width:1024px)',
  });

  return <>{isPc && children}</>;
};

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });
  return <>{isMobile && children}</>;
};

export { PC, Mobile };
