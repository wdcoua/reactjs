import React from "react";
import {create} from "react-test-renderer";
import ProfileStatus from "./ProfileStatus__unused";

describe("profile status unused --- ", () => {
    test(" setting profile status is successful", () => {
        const component = create(<ProfileStatus status="test111"/>);
        const instance = component.getInstance();


        // const button = create(<Button />);
        // expect(instance.state.tempStatusText).toBe('test111');
        expect(instance.state.tempStatusText).toBe('test111');
    });
    test("no input, only span", () => {
        const component = create(<ProfileStatus status="test111"/>);
        const instance = component.root;
        let span = instance.findByType('span');

        // expect(span.children.length).toBe(1);
        expect(span).not.toBeNull();
    });
    test("no input", () => {
        const component = create(<ProfileStatus status="test111"/>);
        const instance = component.root;


        // expect(span.children.length).toBe(1);
        expect(()=>{
            let input = instance.findByType('input');
        }).toThrow();
    });
    test(" span is with status", () => {
        const component = create(<ProfileStatus status="test111"/>);
        const instance = component.root;
        let span = instance.findByType('span');

        // const button = create(<Button />);
        // expect(instance.state.tempStatusText).toBe('test111');
        expect(span.children[0]).toBe('test111');
    });
    test("doubleClick on span toggles editMode", () => {
        const component = create(<ProfileStatus status="test111"/>);
        const instance = component.getInstance();
        const root = component.root;
        let span = root.findByType('span');
        span.props.onDoubleClick();
        // const button = create(<Button />);
        // expect(instance.state.tempStatusText).toBe('test111');
        expect(instance.state.editMode).toBeTruthy();
    });
    test("doubleClick on span shows input", () => {
        const component = create(<ProfileStatus status="test111"/>);
        const instance = component.getInstance();
        const root = component.root;
        let span = root.findByType('span');
        span.props.onDoubleClick();
        let input = root.findByType('input');

        expect(input.props.value).toBe('test111');
        // expect(input).not.toBeNull();

    });
    test("doubleClick on span shows input and doubleClick once more hides input", () => {
        const component = create(<ProfileStatus status="test111"/>);
        const instance = component.getInstance();
        const root = component.root;
        let span = root.findByType('span');
        span.props.onDoubleClick();
        let input = root.findByType('input');
        input.props.onBlur()
        // const button = create(<Button />);
        // expect(instance.state.tempStatusText).toBe('test111');
        // expect(instance.state.editMode).toBeTruthy();
        // expect(input).not.toBeNull();
        expect(()=>{
            let input = root.findByType('input');
        }).toThrow();

    });

    test('callback should be called', () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status="test111" setStatus={mockCallback}/>);
        const instance = component.getInstance();
        instance.toggleEditMode();
        instance.toggleEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    });


});