import React from "react";
const codeString = `const sum = (x,y) => x + y`;

const Post = ({ date, codeSnippet, mood, reflectionText }) => {
  return (
    <div>
      <h2>{date}</h2>
      <pre>
        <code>
          {
            //prettier-ignore
            codeSnippet
          }
        </code>
      </pre>
      <div>{mood}</div>
      <article>{reflectionText}</article>
    </div>
  );
};

export default Post;
