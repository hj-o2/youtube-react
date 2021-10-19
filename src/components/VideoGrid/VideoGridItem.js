import { Link } from "react-router-dom";

import Style from "./VideoGridItem.module.scss";

const VideoGridItem = ({ id, src, title }) => {
  return (
    <Link to={{ pathname: "watch", search: `?v=${id}` }} className={Style.item}>
      <div>
        <img src={src} alt={title}></img>
        <span>{id}</span>
      </div>
    </Link>
  );
};

export default VideoGridItem;
