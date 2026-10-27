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
