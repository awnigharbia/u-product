import React, { Component } from "react";
import { Vistors } from "../../../";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

class vistorsContainer extends Component {
  render() {
    return this.props.vistors.loading ? (
      <Vistors data={[]} loading={true} />
    ) : (
      <Vistors data={this.props.vistors.vistors} loading={false} />
    );
  }
}

const VISTORS_QUERY = gql`
  query {
    vistors {
        id
        userAgent
        ip
        city
        browser
        os
        device
        createdAt
    }
}
`;

export default graphql(VISTORS_QUERY, { name: "vistors" })(vistorsContainer);
