import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    filterByTitle(param) {
      if (param !== '') {
        return this.get('store').query('book', { title: param })
      } else {
        return this.get('store').findAll('book');
      }
    }
  }
});
