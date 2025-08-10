import s from "./ImageFrame.module.scss";

const ImageFrame = ({ children }) => {
  return <div className={s.imageFrame}>{children}</div>;
};

export default ImageFrame;
