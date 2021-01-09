/*
 * GQL
 * A JavaScript template literal tag that parses GraphQL query strings into the standard GraphQL AST.
 */

import gql from 'graphql-tag';

export const GET_LOCAL_CART_ITEMS = gql`
  query GetCartItems {
    cartItems @client
  }
`;
