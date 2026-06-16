import React from 'react';

const Title = ({children}) => {
    return (
        <div>
              <h1 className="text-3xl font-bold"> {children}  </h1>
        </div>
    );
};

export default Title;