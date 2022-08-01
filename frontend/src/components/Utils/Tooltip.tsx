import React from 'react';

export const Tooltip: React.FC<JSX.Element> = ({ children }) => {
  const [visible, setVisible] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && (
        <div>
          <p>tooltip</p>
        </div>
      )}
    </div>
  );
};
