import React, { Component } from "react";
import { Dashboard } from "../../../";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

class DashboardContainer extends Component {
  render() {
    return this.props.total.loading ? (
      <Dashboard data={[]} loading={true} />
    ) : (
      <Dashboard data={this.props.total} loading={false} />
    );
  }
}

const DASHBOARD_QUERY = gql`
  query {
    vistors {
      id
    }
    users {
      id
    }
    projects {
      id
    }
    messages {
      id
    }
    newProject:project(filter: "new") {
      id
    }
    pending: project(filter: "pending") {
      id
    }
    completedProjects: project(filter:"complete") {
        id
    }
  }
`;

export default graphql(DASHBOARD_QUERY, { name: "total" })(DashboardContainer);
