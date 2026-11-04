const css = `
@media (prefers-reduced-motion: no-preference) {
  @view-transition {
    navigation: auto;
  }

  ::view-transition {
    pointer-events: none;
  }

  ::view-transition-old(root),
  ::view-transition-old(.page-move) {
    animation: 220ms cubic-bezier(0.4, 0, 1, 1) both page-out;
  }

  ::view-transition-new(root),
  ::view-transition-new(.page-move) {
    animation: 320ms cubic-bezier(0.22, 1, 0.36, 1) both page-in;
  }

  ::view-transition-group(.page-move) {
    animation: none;
    z-index: 1;
  }

  ::view-transition-group(.media) {
    animation-duration: 320ms;
    animation-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
    z-index: 5;
  }

  ::view-transition-old(.media),
  ::view-transition-new(.media) {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }

  ::view-transition-group(site-header) {
    animation: none;
    z-index: 10;
  }

  ::view-transition-old(site-header) {
    display: none;
  }

  ::view-transition-new(site-header) {
    animation: none;
  }

  html.modal-vt::view-transition-group(root),
  html.modal-vt::view-transition-group(site-header),
  html.modal-vt::view-transition-group(modal-backdrop),
  html.modal-vt::view-transition-group(modal-panel) {
    animation: none;
  }

  html.modal-vt::view-transition-old(root),
  html.modal-vt::view-transition-old(site-header) {
    display: none;
  }

  html.modal-vt::view-transition-new(root),
  html.modal-vt::view-transition-new(site-header) {
    animation: none;
  }

  html.modal-vt::view-transition-group(.media) {
    animation-duration: 280ms;
    z-index: 40;
  }

  html.modal-vt::view-transition-old(.media),
  html.modal-vt::view-transition-new(.media) {
    mix-blend-mode: normal !important;
  }

  html.modal-vt-open::view-transition-group(.media) {
    animation-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
  }

  html.modal-vt-close::view-transition-group(.media) {
    animation-timing-function: cubic-bezier(0.4, 0, 0.15, 1);
  }

  html.modal-vt::view-transition-old(modal-backdrop),
  html.modal-vt::view-transition-new(modal-backdrop),
  html.modal-vt::view-transition-old(modal-panel),
  html.modal-vt::view-transition-new(modal-panel) {
    height: 100%;
    width: 100%;
    mix-blend-mode: normal;
  }

  html.modal-vt::view-transition-new(modal-backdrop) {
    animation: 200ms ease-out both modal-backdrop-in;
  }

  html.modal-vt::view-transition-old(modal-backdrop) {
    animation: 200ms ease-out both modal-backdrop-out;
  }

  html.modal-vt::view-transition-new(modal-panel) {
    animation: 280ms cubic-bezier(0.22, 1, 0.36, 1) both modal-panel-in;
    transform-origin: center center;
  }

  html.modal-vt::view-transition-old(modal-panel) {
    animation: 200ms ease-out both modal-panel-out;
    transform-origin: center center;
  }

  html.modal-vt::view-transition-group(modal-backdrop) {
    z-index: 20;
    overflow: visible;
  }

  html.modal-vt::view-transition-group(modal-panel) {
    z-index: 30;
    overflow: visible;
  }
}

@keyframes page-out {
  to {
    opacity: 0;
    translate: 0 -10px;
  }
}

@keyframes page-in {
  from {
    opacity: 0;
    translate: 0 12px;
  }
}

@keyframes modal-backdrop-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes modal-backdrop-out {
  from { opacity: 1; }
  to { opacity: 0; }
}

@keyframes modal-panel-in {
  from {
    opacity: 0;
    translate: 0 12px;
    scale: 0.96;
  }
  to {
    opacity: 1;
    translate: 0 0;
    scale: 1;
  }
}

@keyframes modal-panel-out {
  0% {
    opacity: 1;
    translate: 0 0;
    scale: 1;
  }
  70% {
    opacity: 0;
    translate: 0 10px;
    scale: 0.97;
  }
  100% {
    opacity: 0;
    translate: 0 12px;
    scale: 0.96;
  }
}

@media (prefers-reduced-motion: reduce) {
  ::view-transition-group(*),
  ::view-transition-old(*),
  ::view-transition-new(*) {
    animation-duration: 0s !important;
    animation-delay: 0s !important;
  }
}

.shared-media {
  view-transition-class: media;
}
`

export default function ViewTransitionStyles() {
  return <style dangerouslySetInnerHTML={{ __html: css }} />
}
