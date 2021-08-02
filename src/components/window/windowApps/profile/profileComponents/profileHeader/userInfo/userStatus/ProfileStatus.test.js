import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
  test("status from props should be in the state", () => {
    const component = create(<ProfileStatus status="TEST STATUS" />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("TEST STATUS");
  });
  test("after creation <span> should be displayed", () => {
    const component = create(<ProfileStatus status="TEST STATUS" />);
    const instance = component.root;
    let span = instance.findByType("span");
    expect(span).not.toBeNull();
  });
  test("after creation <span> should has correct inner", () => {
    const component = create(<ProfileStatus status="TEST STATUS" />);
    const instance = component.root;
    let span = instance.findByType("span");
    expect(span.children[0]).toBe("TEST STATUS");
  });
  test("after creation <input> should be not displayed", () => {
    const component = create(<ProfileStatus status="TEST STATUS" />);
    const instance = component.root;
    expect(() => {
      let input = instance.findByType("input");
    }).toThrow();
  });
  test("callback should be called", () => {
    const mockCallback = jest.fn();
    const component = create(
      <ProfileStatus status="TEST STATUS" updateStatus={mockCallback} />
    );
    const instance = component.getInstance();
    instance.updateStatus();
    expect(mockCallback.mock.calls.length).toBe(1);
  });
});
