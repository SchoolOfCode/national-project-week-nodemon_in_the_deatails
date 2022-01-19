import React from "react";

const convertMood = (mood) => {
  if (mood === 1){
    return <>😭</>
  } else if (mood === 2){
    return <>😔</>
  } else if (mood === 3){
    return <>😐</>
  } else if (mood === 4){
    return <>😊</>
  } else {
    return <>🤩</>
}}

const Post = ({ date, codeSnippet, mood, reflectionText }) => {
  return (
    <div className="post">
      <h2>{date}</h2>
      <div className="post-content">
      <pre>
        <code className="code-snippet">
          {
            //prettier-ignore
            codeSnippet
          }
        </code>
      </pre>
      <div className="mood">{convertMood(mood)}</div>
      <article className="reflection-text">{reflectionText}</article>
      </div>
    </div>
  );
};

export default Post;
