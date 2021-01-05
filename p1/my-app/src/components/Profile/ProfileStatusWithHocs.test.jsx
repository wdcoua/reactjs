import React from "react";
import {create, act} from 'react-test-renderer';
import configureStore from 'redux-mock-store'

import ProfileStatusWithHocs from "./ProfileStatusWithHocs";
// рендер компонента


describe("   profile status with HOCs *** ", () => {
    test('callBack called',()=>{
        const mockCallback = jest.fn(); // fake Callback function

        // const setStatusFake = jest.fn();
        const initialState = {status: 'test111'};
        const mockStore = configureStore(); // fake store
        let store,root;

        store = mockStore(initialState);

        act(() => {
            root = create(<ProfileStatusWithHocs store={store} setStatus={mockCallback}/>)
        });

//        todo зробити можливим тестування STATE-у


// проверка утверждений
//        todo доробити пошук тегів
//         expect(root.toJSON().find('span').length).toBe(1);

// обновление с некоторыми отличающимися пропсами
//         act(() => {
//             root.update(<ProfileStatusWithHocs status="eeddddee"/>);
//         })

// проверка утверждений
        expect(mockCallback.mock.calls.length).toBe(1);


    })
})














// import React, { useState } from "react";
// import ReactDOM from "react-dom";
// import { act } from "react-dom/test-utils";
// import {create} from "react-test-renderer";
// import configureStore from 'redux-mock-store'
// // import { shallow } from 'enzyme'
// //
// // import { configure } from 'enzyme';
// // import Adapter from 'enzyme-adapter-react-16';
//
// import TestRenderer from 'react-test-renderer';
// // const TestRenderer = require('react-test-renderer');
//
// // configure({ adapter: new Adapter() });
//
//
//
// import ProfileStatusWithHocs from "./ProfileStatusWithHocs";
//
//
// const initialState = { status:'test111' };
// const mockStore = configureStore();
// let store,container;
//
// store = mockStore(initialState);
//
//
// test('эавапв',()=>{
//     let focused = false;
//     TestRenderer.create(
//         <ProfileStatusWithHocs store={store} />,
//         {
//             /*createNodeMock: (element) => {
//                 if (element.type === 'input') {
//                     // возвращаем фиктивную функцию "focus"
//                     return {
//                         focus: () => {
//                             focused = true;
//                         }
//                     };
//                 }
//                 return null;
//             }*/
//         }
//     );
//     expect(focused).toBe(true);
//
// })
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// /*
//
//
//
//
// // let container;
// //
// // beforeEach(() => {
// //     container = document.createElement("div");
// //     document.body.appendChild(container);
// // });
// //
// // afterEach(() => {
// //     document.body.removeChild(container);
// //     container = null;
// // });
//
//
//
// describe("profile status", () => {
//
//
//     const initialState = { status:'test111' };
//     const mockStore = configureStore();
//     let store,container;
//
//     store = mockStore(initialState);
//     // container = shallow(<ConnectedHome store={store} /> );
//     container = shallow(<ProfileStatusWithHocs store={store} />);
//     // beforeEach(()=>{
//     //     store = mockStore(initialState);
//     //     // container = shallow(<ConnectedHome store={store} /> );
//     //     container = shallow(<ProfileStatusWithHocs store={store} />);
//     // })
//
//
// /*
//     it('+++ render the connected(SMART) component', () => {
//         expect(component.length).toEqual(1);
//     });
//     */
// /*
//     test("profile status setting is successful", () => {
//         // const component = create(<ProfileStatusWithHocs status="test111" />);
//         const instance = container.length;
//         // act(() => {
//         //     ReactDOM.render(<ProfileStatusWithHocs status="test111" />, container);
//         // });
//
//         // const button = create(<Button />);
//         expect(container.prop('tempStatus')).toEqual('test111');
//         // expect(instance.state.tempStatus).toBe('test111');
//         //
//         // const button = container.getElementsByTagName("button")[0];
//         // expect(button.textContent).toBe("SUBSCRIBE TO BASIC");
//
//
//     });
// });
//
//
//  */