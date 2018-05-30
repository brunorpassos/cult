export default function() {
  this.namespace = '/api';

  let books = [{
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
    id: '0004',
    attributes: {
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
    id: '0005',
    attributes: {
      author: 'GOF',
      title: 'Design Patterns',
      publisher: '',
      ISBN: '978-3-16-148410-0',
      owner: 'Bruno Passos',
      owner_email: 'bruno.passos@creditas.com.br',
      image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
    }
  }];

  this.get('/books', function(db, request) {
    if(request.queryParams.title !== undefined) {
      let filteredBooks = books.filter(function(i) {
        return i.attributes.title.toLowerCase().indexOf(request.queryParams.title.toLowerCase()) !== -1;
      });
      return { data: filteredBooks };
    } else {
      return { data: books };
    }
  });
}
