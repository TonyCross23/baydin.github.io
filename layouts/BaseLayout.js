import React from 'react';

const BaseLayout = ({children}) => {
    return (
        <main className="container ms-auto px-4 py-8">
            {children}
        </main>
    );
};

export default BaseLayout;