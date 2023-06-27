import highlight from "./highlight";
import Form from "./form";

const Layout = async function() {
    const outerContainer = document.createElement("div");
    outerContainer.classList.add("outer-container");
    
    const container = document.createElement("div");
    container.classList.add("container");
    
    const header = document.createElement("div");
    header.classList.add("header");  
    
    const headerInner = document.createElement("div");
    headerInner.classList.add("header-inner");
    
    const title = document.createElement("h2");
    title.classList.add("site-title");
    title.textContent = 'Weather';
    
    document.body.appendChild(outerContainer);
    outerContainer.appendChild(header);
    header.appendChild(headerInner);
    headerInner.appendChild(title);
    highlight();
    Form();
    outerContainer.appendChild(container);

}

export default Layout;