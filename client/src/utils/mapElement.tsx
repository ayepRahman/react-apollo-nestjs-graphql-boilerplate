import React from 'react';

export default (ele: React.ReactElement, count: number, name: string): React.ReactElement[] => {
  return Array.from({ length: count }, (_, i) => React.cloneElement(ele, { key: `${name}-${i}` }));
};
