/**
 * Grid Triangle
 * 
 * @author Beplus
 * @version 1.0 
 */

export default class GridTriangle {

  constructor(el, params) {
    this.el = el;
    this.params = params;
    this.render();
    
    return this;
  }

  _mockup() {
    let _t = `<div class="grid-triangle">
      <div class="grid-triangle--box">
        <div class="grid-triangle--box-inner">
          <div class="grid-triangle--image grid-triangle--u"></div>
          <div class="grid-triangle--image grid-triangle--d"></div>
        </div>
      </div>
      <div class="grid-triangle--box">
        <div class="grid-triangle--box-inner">
          <div class="grid-triangle--image grid-triangle--u"></div>
          <div class="grid-triangle--image grid-triangle--d"></div>
        </div>
      </div>
      <div class="grid-triangle--box">
        <div class="grid-triangle--box-inner">
          <div class="grid-triangle--image grid-triangle--u"></div>
          <div class="grid-triangle--image grid-triangle--d"></div>
        </div>
      </div>
      <div class="grid-triangle--box">
        <div class="grid-triangle--box-inner">
          <div class="grid-triangle--image grid-triangle--u"></div>
        </div>
      </div>
      <div class="grid-triangle--box">
        <div class="grid-triangle--box-inner">
          <div class="grid-triangle--image grid-triangle--u"></div>
        </div>
      </div>
    </div>`;
 
    return _t;
  }

  setImage(num, url) {
    this.triangleImageArr[num].style.backgroundImage = `url(${url})`;
  }

  render() {
    let mockupHtml = this._mockup();

    let parser = new DOMParser();
    let doc = parser.parseFromString(mockupHtml, "text/html");
    let triangleImage = doc.querySelectorAll('.grid-triangle--image');
    this.triangleImageArr = [...triangleImage];

    this.params.images.forEach((item, _index) => {
      this.setImage(_index, item.url)
    })

    this.el.appendChild(doc.querySelector('.grid-triangle'));
  }
}   

window.GridTriangle = GridTriangle;