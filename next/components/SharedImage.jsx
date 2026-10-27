import { cloneElement } from "react";

/**
 * Gives a card image and its detail hero the same view-transition-name
 * so the browser can morph one into the other. `name` must be unique on the page.
 */
export default function SharedImage({ name, children }) {
  if (!name) return children;

  return cloneElement(children, {
    className: `${children.props.className || ""} shared-media`.trim(),
    style: {
      ...children.props.style,
      viewTransitionName: name,
    },
  });
}
