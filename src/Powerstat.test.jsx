import React from "react";
import ReactDOM from "react-dom";
import Powerstat from "./Powerstat";
import renderer from "react-test-renderer"

// import {render} from 'react-dom';
import "@testing-library/jest-dom/extend-expect"

it("renders without crashing", ()=>{
    const div = document.createElement("div");
    ReactDOM.render(<Powerstat></Powerstat>, div)
})


it("matches snapshot",()=>{
    const tree = renderer.create(<Powerstat></Powerstat>).toJSON();
    expect(tree).toMatchSnapshot();
})