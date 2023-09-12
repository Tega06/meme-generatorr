const generateMemeBtn = document.querySelector(
    ".meme-generator .generate-meme-btn"
  );
  const memeImage = document.querySelector(".meme-generator img");
  const memeTitle = document.querySelector("meme-title")

  
  const updateDetails = (url, title, author) => {
    memeImage.setAttribute("src", url);
    memeTitle.innerHTML = title;
    memeAuthor.innerHTML = `Meme by: ${author}`;
  };
  
  const generateMeme = () => {
    fetch("https://meme-api.com/gimme/memes")
      .then((response) => response.json())
      .then((data) => {
        updateDetails(data.url, data.title, data.author);
      });
  };
  AnalyserNode
  generateMemeBtn.addEventListener("click", generateMeme);
  
  generateMeme();