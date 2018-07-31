import React, { Component } from "react";
import { Orders } from "../../../";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

class OrdersContainer extends Component {
  render() {
    return this.props.orders.loading ? (
      <Orders data={[]} loading={true} />
    ) : (
      <Orders data={this.props.orders.users} loading={this.props.orders.loading} />
    );
  }
}

const ORDERS_QUERY = gql`
  query {
    users {
      id
      name
      email
      city
      uni
      project {
        description
        lang
      }
    }
  }
`;

export default graphql(ORDERS_QUERY, { name: "orders" })(OrdersContainer);
