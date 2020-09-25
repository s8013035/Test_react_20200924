import React, {useState} from 'react';
// import LikeButton from './LikeButton';


const Article = (props) => {
  //hook 公開状態
  const [isPublished, togglePublished] = useState(false);
  return (
    <div>
      <h2>{props.title}</h2>
      <label htmlFor="check">公開状態：</label>
      <input type="checkbox" checked={isPublished} id="check" onClick={() => togglePublished(!isPublished)}/>
      {/* <LikeButton count={props.count}/> */}
    </div>
  )
}

export default Article