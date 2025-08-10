import s from "./ImageFrame.module.scss";

const ImageFrame = ({ children, width, height }) => {
  return (
    <div className={s.imageFrame} style={{ width, height }}>
      {children}
    </div>
  );
};

export default ImageFrame;
