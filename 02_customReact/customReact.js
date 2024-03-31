let container = document.querySelector("#root");

// Below element shows that how actually the react sees the element
const reactElement = {
    type: "a",
    props: {
        href: "https://google.com",
        target: "_blank"
    },
    children: "Click here to visit Google"
}

// Using the below function one can inject the element to the page, but there is a problem in the below code that is is there are more number of props then number of lines will be increased.

// function customRender(reactEle, cont){
//     let domElement = document.createElement(reactEle.type);
//     domElement.innerHTML = reactEle.children;
//     domElement.setAttribute("href", reactEle.props.href);
//     domElement.setAttribute("target", reactEle.props.target);

//     container.appendChild(domElement)
// }

// customRender(reactElement, container);


// To solve that problem using "----- for loop ------"
function customRender(reactEle, cont){
    let domElement = document.createElement(reactEle.type);
    domElement.innerHTML = reactEle.children;
    for (const prop in reactEle.props) {
        // Below if statement is used, if bychance someone has written children in the props then is should let it go.
        if (prop === "children") continue
        
        domElement.setAttribute(prop, reactEle.props[prop]);
        container.appendChild(domElement);
    }
}

customRender(reactElement, container);