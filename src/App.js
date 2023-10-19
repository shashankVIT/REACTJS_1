import React from 'react';

function WordCounter() {
  const [state, setState] = React.useState({
    wordCount: 0,
  });

  const handleKeyPress = (e) => {
    const count = e.target.value;

    const countWords = (count) => {
      if (count.length === 0) {
        return 0;
      } else {
        count = count.replace(/(^\s*)|(\s*$)/gi, "");
        count = count.replace(/[ ]{2,}/gi, " ");
        count = count.replace(/\n /, "\n");
        return count.split(" ").length;
      }
    };

    setState({
      wordCount: countWords(count),
    });
  };

  return (
    <div
      id="container"
      style={{
        position: "absolute",
        top: "20%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        border: "1px solid lightgray",
        padding: "10px",
      }}
    >
      <h1>
        Responsive Paragraph Word<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Counter
      </h1>
      <textarea
        placeholder="Type here"
        onChange={handleKeyPress}
        style={{ width: "97%", height: "100px", padding: "5px" }}
      ></textarea>
      <div>
        <strong>Word Count:</strong> <span className="num">{state.wordCount}</span>
      </div>
    </div>
  );
}

export default WordCounter;
