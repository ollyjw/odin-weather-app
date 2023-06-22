const Layout = function() {

    const outerContainer = document.createElement("div");
    outerContainer.classList.add("outer-container");

    const container = document.createElement("div");
    container.classList.add("container");
    
    const header = document.createElement("div");
    header.classList.add("header");    
    
    const heading = document.createElement("h2");
    heading.classList.add("heading");
    heading.textContent = 'Weather';

    const form = document.createElement("form");
    form.id = "weather-form";

    const input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("id", "search-input");
    input.setAttribute("placeholder", "Enter town/city");

    const submit = document.createElement("button");
    submit.setAttribute("type", "submit");
    submit.innerHTML = "Search";   
     
    
    document.body.appendChild(outerContainer);
    outerContainer.appendChild(header);
    header.appendChild(heading);
    header.appendChild(form);
    form.appendChild(input);
    form.appendChild(submit);
    outerContainer.appendChild(container);

}

export default Layout;