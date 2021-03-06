export default function() {
  this.namespace = '/api';

  this.get('/books', function() {
    return {
      data: [{
        type: 'books',
        id: '0001',
        attributes: {
          author: 'Machado de Assis',
          title: 'O Alienista',
          publisher: '',
          ISBN: '978-3-16-148410-0',
          owner: 'Bruno Passos',
          owner_email: 'bruno.passos@creditas.com.br',
          image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
        }
      }, {
        type: 'books',
        id: '0002',
        attributes: {
          id: '0002',
          author: 'Karl Marx',
          title: 'O Capital',
          publisher: '',
          ISBN: '978-3-16-148410-0',
          owner: 'Bruno Passos',
          owner_email: 'bruno.passos@creditas.com.br',
          image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
        }
      }, {
        type: 'books',
        id: '0003',
        attributes: {
          id: '0003',
          author: 'Design Patterns',
          title: 'GOF',
          publisher: '',
          ISBN: '978-3-16-148410-0',
          owner: 'Bruno Passos',
          owner_email: 'bruno.passos@creditas.com.br',
          image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
        }
      }]
    };
  });
}
