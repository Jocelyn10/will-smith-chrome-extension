let willSmithImages = [
  '/pictures/will1.jpg',
  '/pictures/will5.jpg',
  '/pictures/will3.jpg',
  '/pictures/will4.jpg',
  '/pictures/will5.jpg',
  '/pictures/will6.jpg',
  '/pictures/will7.jpg',
];

const imgs = document.getElementsByTagName('img');

for (let i = 0; i < imgs.length; i++) {
  const randomImg = Math.floor(Math.random() * willSmithImages.length);
  imgs[i].src = willSmithImages[randomImg];
}
