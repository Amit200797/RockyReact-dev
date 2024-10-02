import React from "react";
import ReactDOM from "react-dom/client";
//Component Compositions

/* Header 
-LoGO component
-Nav Items
Body 
-Search Bar
*Restorent container
*Restorent card
Footer
-copyright
-Link
-Address
-Conatct

 */

const element =  <span>React Element</span> 
const Title =  () => (
    <h1 className="head" tabIndex="6">
        {element}
        Namaste React -Dev
        </h1>
    
    );
const HeadingComponent = () =>(
    <div id = "container">
    
   <Title />
   {Title()}
   <Title></Title>
    <h1 className="Heading">Namste react functional component</h1> 
    </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);
