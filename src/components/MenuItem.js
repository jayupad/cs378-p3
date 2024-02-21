import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'; 
import "bootstrap-icons/font/bootstrap-icons.css";

// This imports bootstrap css styles. You can use bootstrap or your own classes by using the className attribute in your elements.


// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuItem = ({ id, title, imgPath, desc, price, count, setCounts }) => {

    // const [count, setCount] = useState(0);

    return (
        <div id={"Item " + id} className="row">
            <div className="col-4">
                <img alt={"Image of " + title} src={"images/" + imgPath}></img>
            </div>
            <div className="col-8">
                <h3> {title} </h3>
                <h4> {desc} </h4>
                <div className="bottom">
                    <div className="row">
                        <div className="col-8"> 
                            <h3 className="cost"> {"$" + price} </h3>
                        </div>
                        <div id="button-pack" className="col-4">
                            <i onClick={() => {
                                if (count !== 0) setCounts(id, count-1)
                            }} className="bi bi-dash-circle"></i>
                            <p> {count} </p>
                            <i onClick={() => setCounts(id, count+1) } className="bi bi-plus-circle"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuItem;
