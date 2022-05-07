import newFilters from '/src/view/filters.js';
import * as render from '/src/render.js';

const siteMainElement = document.querySelector('.main');

render.render(new newFilters(), siteMainElement);
