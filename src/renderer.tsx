import React from 'react';
import ReactDOM from 'react-dom';
import report_web_vitals from './report_web_vitals';

ReactDOM.render(
    (<div>Hello World</div>),
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
report_web_vitals();
