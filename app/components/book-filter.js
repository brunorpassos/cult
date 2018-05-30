import Component from '@ember/component';

export default Component.extend({
  classNames: ['book-filter'],
  value: '',

  init() {
    this._super(...arguments);
    this.get('filter')('').then((results) => this.set('results', results));
  },

  actions: {
    handleFilterEntry() {
      let filterInputValue = this.get('value');
      let filterAction = this.get('filter');

      filterAction(filterInputValue).then((filteredResults) => {
        this.set('results', filteredResults);
      });
    }
  }
});
