import s from "./ImageFrame.module.scss";

const ImageFrame = ({ children, className, width, height }) => {
  return (
    <div className={`${s.imageFrame} ${className}`} style={{ width, height }}>
      {children}
    </div>
  );
};

export default ImageFrame;
