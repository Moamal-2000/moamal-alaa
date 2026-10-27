const Svg = ({ name, ...restProps }) => {
  return (
    <svg aria-hidden="true" {...restProps}>
      <use href={`/icons-sprite.svg#${name}`} />
    </svg>
  );
};
export default Svg;
