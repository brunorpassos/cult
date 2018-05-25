import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [{
      id: '0001',
      author: 'Machado de Assis',
      title: 'O Alienista',
      publisher: '',
      ISBN: '978-3-16-148410-0',
      owner: 'Bruno Passos',
      owner_email: 'bruno.passos@creditas.com.br',
      image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
    }, {
      id: '0002',
      author: 'Karl Marx',
      title: 'O Capital',
      publisher: '',
      ISBN: '978-3-16-148410-0',
      owner: 'Bruno Passos',
      owner_email: 'bruno.passos@creditas.com.br',
      image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
    }, {
      id: '0003',
      author: 'Design Patterns',
      title: 'GOF',
      publisher: '',
      ISBN: '978-3-16-148410-0',
      owner: 'Bruno Passos',
      owner_email: 'bruno.passos@creditas.com.br',
      image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
    }];
  }
});
