import { createElement } from '../render';

const creatNewFilters = () => '<button class="visually-hidden" type="submit">Accept filter</button>';

export default class newFilters {
  getTemplate(){
    return creatNewFilters();
  }

  getElement(){
    if(this.element){
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  removeElement(){
    this.element = null;
  }
}
