import { gql } from '@apollo/client';

export const CREATE_USER = gql`
  mutation CreateUser($username: String!, $email: String!, $password: String!) {
  createUser(username: $username, email: $email, password: $password) {
    token
    user {
      _id
      email
      password
      username
    }
  }
}
`;

export const SAVE_BOOK = gql`
  mutation SaveBook($id: String!, $body: BookType) {
  saveBook(_id: $id, body: $body) {
    _id
    username
    savedBooks {
      _id
      authors
      bookId
      description
      image
      link
      title
    }
  }
}
`;

export const DELETE_BOOK = gql`
  mutation DeleteBook($id: String!, $deleteId: String!) {
  deleteBook(_id: $id, deleteId: $deleteId) {
    _id
    username
    savedBooks {
      _id
      authors
      bookId
      description
      image
      link
      title
    }
  }
}
`;

export const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;
