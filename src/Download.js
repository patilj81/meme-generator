import React from "react";
import domtoimage from "dom-to-image";

function Download() {
  return (
    <button type="button" class="download-btn" onClick={downloadImage}>
      Download
    </button>
  );
}

function downloadImage() {
  console.log(document.getElementsByClassName("meme-creator"));
  domtoimage
    .toPng(document.getElementsByClassName("meme-creator")[0])
    .then(function(dataUrl) {
      var link = document.createElement("a");
      link.download = "my-image-name.jpeg";
      link.href = dataUrl;
      link.click();
    })
    .catch(function(error) {
      console.error("oops, something went wrong!", error);
    });
}

export default Download;
