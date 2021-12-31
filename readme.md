# Grid Triangle 

#### Setup
```javascript
<script src="./dist/grid-triangle.bundle.js"></script>
```

---

```css
.grid-triangle {
  display: flex;
  flex-wrap: wrap;
  margin: -5px 0;
}

.grid-triangle--box {
  width: calc(100% / 2 - 10px);
  margin: 0 5px;
  box-sizing: border-box;
  /* background: black; */
  margin-bottom: 10px;
}

.grid-triangle--box-inner {
  display: block;
  position: relative;
  width: 100%;
  padding-bottom: 100%;
}

.grid-triangle--image {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

.grid-triangle--u {
  clip-path: polygon(0 0, calc(100% - 7px) 0, 0 calc(100% - 7px));
  background-size: cover;
}

.grid-triangle--d {
  clip-path: polygon(100% 100%, 100% 7px, 7px 100%);
  background-size: cover;
}
```

---

#### Usage
```javascript
const Grid = new GridTriangle(document.querySelector('#my-grid'), {
  images: [
    {url: 'https://source.unsplash.com/random/500x500/?city,night'},
    {url: 'https://source.unsplash.com/random/500x500/?city,night'},
    {url: 'https://source.unsplash.com/random/500x500/?city,night'},
    {url: 'https://source.unsplash.com/random/500x500/?city,night'},
    {url: 'https://source.unsplash.com/random/500x500/?city,night'},
    {url: 'https://source.unsplash.com/random/500x500/?city,night'},
    {url: 'https://source.unsplash.com/random/500x500/?city,night'},
    {url: 'https://source.unsplash.com/random/500x500/?city,night'},
  ]
});

---

/**
 * setImage 
 * 
 * Params
 * - Position number
 * - Image Url
 */
Grid.setImage(1, 'https://source.unsplash.com/user/wsanter');
```
