import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import MyComponent from "./MyComponent";
import UpdateState from "./UpdateState";
import MergeState from './MergeState';
import DefaultProperties from './DefaultProperties';
import MyButton from './MyButton';
import MyList from './MyList';
import MyButtonFunctional from './MyButtonFunctional';
import MyContainer from './MyContainer';
import { PermissionProvider } from './PermissionContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<MyContainer/>);
root.render(
    <PermissionProvider>
        <App />
    </PermissionProvider>
);

const appState = {
    text: "My Button",
    disabled: true,
    items: ["First", "Second", "Third"]
};

function render2(props) {
    root.render(
        <main>
            <MyButton text={props.text} disabled={props.disabled}/>
            <MyList items={props.items} />
        </main>
    )
}

function render({first, second}) {
    root.render(
        <main>
            <MyButtonFunctional text={first.text} disabled={first.disabled} />
            <MyButtonFunctional text={second.text} disabled={second.disabled} />
        </main>
    );
}

// render2(appState);
// render({
//     first: {
//         text: "My First Functional Button",
//         disabled: false
//     },
//     second: {
//         text: "Second Functional Button",
//         disabled: true
//     }
// });

setTimeout(() => {
    appState.disabled = false;
    appState.items.push("Fourth");

    // render2(appState);
}, 3000);

// root.render(<MyComponent/>);
// root.render(<UpdateState/>);
// root.render(<MergeState/>);
// root.render(<DefaultProperties/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
