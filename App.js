// import React from 'react';
// import ReactDOM from 'react-dom/client';

const parent = React.createElement(
    'div', 
    {id : 'parent'},
    [
        React.createElement(
            'div',
            {id : 'child1', key: 'child1'},
            React.createElement('h1', {className: 'child', id : "languages"}, 'Languages')
        )
    ]
);
console.log(parent);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);
