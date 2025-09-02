export function getHeaderClasses({ cssModule, isActive, isHidden }) {
  return [
    cssModule.header,
    isActive ? cssModule.active : "",
    isHidden ? cssModule.hidden : "",
  ].join(" ");
}
