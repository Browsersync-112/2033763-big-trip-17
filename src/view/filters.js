import * as render from '/src/render.js';

const creatNewFilters = () => '';

export default class newFilters {
  getTemplate(){
    return creatNewFilters();
  }

  getElement(){
    if(this.element){
      this.element = render.createElement(this.getTemplate());
    }
    return this.element;
  }

  removeElement(){
    this.element = null;
  }
}
