// const { Children } = require("react");
// 

// const { Children } = require("react");

function customRender(reactElement, container) {


    // this code is not full proof means what if there are some other properties in props or maybe these are not in those dom elements.    Ex -> h1 has not href 
    // const DomElement = document.createElement(reactElement.type);
    // DomElement.setAttribute("href", reactElement.props.href);
    // DomElement.setAttribute("target", reactElement.props.target);
    // DomElement.innerHTML = reactElement.Children;
    // container.appendChild(DomElement);



    // 2nd way to resolve the problem occured in first approach

    const DomElement = document.createElement(reactElement.type)
    for (const prop in reactElement.props) {
        if(prop ==="children") continue;
        DomElement.setAttribute(prop , reactElement.props[prop])
    }

    DomElement.innerHTML = reactElement.Children;

    container.appendChild(DomElement)

}

// An a tag element
const reactElement = {
    type: "a",
    props: {
        href: "https://google.com",
        target: "_blank"
    },
    Children: "Tap to  google.com"
}

// A paragraph element 
const newElement = {
    type : "p",
    props : {
        title : "I am a title for the paragraph."
    },
    Children : "I am just a simple paragraph that is used for testing."
}

const mainContainer = document.querySelector("#root");
customRender(reactElement, mainContainer);
customRender(newElement, mainContainer);