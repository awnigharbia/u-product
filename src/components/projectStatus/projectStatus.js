import React, { Component } from "react";
import { BackWrapper, user, support, rightArrow, locked, Auth } from "..";
import { withRouter } from "react-router-dom";
import { graphql, compose } from "react-apollo";
import gql from "graphql-tag";



class ProjectStatus extends Component {
  constructor(props) {
    super(props);

    this.state = {
      msg: "",
      send:true,
    };
  }

  handleChange = ({ target: { value } }) => {
    this.setState({ msg: value });
  };

  _logout = () => {
    const { history } = this.props;
    Auth.deauthenticateUser();
    history.push("/project/lock");
  };

  _subscribeToNewMessages = () => {

    this.props.getMsgs.subscribeToMore({
      document: gql`
        subscription {
          newMsg {
            node {
              sender {
                id
              }
              receiver {
                id
              }
              body
            }
          }
        }
      `,
      updateQuery: (previous, { subscriptionData }) => {
        const newAllMsgs = [...previous.msg, subscriptionData.data.newMsg.node,]

        const result = {
          ...previous,
          msg:newAllMsgs,
        }
        return result
      }
    });
  };

  _sendMsg = async () => {
    const { msg, send } = this.state;
  
    const res = await this.props
      .newMsg({
        variables: {
          body: msg,
          send,
        }
      })
      .then(res => this.setState({ success: true, msg:"" }))
      .catch(e => this.setState({ success: false }));
  };

  componentDidMount() {
      this._subscribeToNewMessages()
  }

  render() {
    const {
      userInfo: { loading, currentUser = {}, newMsg = {}}
    } = this.props;

    const roles = !loading
      ? [
          { cat: "Email", val: currentUser[0].email },
          { cat: "City", val: currentUser[0].city },
          { cat: "Project Name", val: currentUser[0].project.name },
          { cat: "Universty", val: currentUser[0].uni }
        ]
      : [
          { cat: "Email", val: "loading.." },
          { cat: "City", val: "loading.." },
          { cat: "Project Name", val: "loading.." },
          { cat: "Universty", val: "loading.." }
        ];
    const { msg } = this.state;
    const result = !this.props.getMsgs.loading ? this.props.getMsgs.msg : []
    
    return (
      <BackWrapper>
        <div className="support-wrapper">
          <div className="user-wrapper">
            <img src={user} alt={user} />
            <h4>{!loading ? currentUser[0].name : "loading.."}</h4>
            {roles.map((item, key) => <InfoRole key={key} {...item} />)}
            <img src={locked} alt={locked} onClick={this._logout} id="locked" />
          </div>
          <div className="chat-wrapper">
            <div className="top-info">
              <img src={support} alt={support} id="user-img" />
              <h4>Support</h4>
            </div>
            <div className="body-msgs">
                {
                    result !== undefined && result.map(({body, send}, key) => !send ? <div key={key} className="sender">{body}</div> : <div key={key} className="receiver">{body}</div>)
                }
            </div>
            <div className="bottom-send">
              <div className="bottom-wrapper">
                <input
                  type="text"
                  value={msg}
                  onChange={this.handleChange}
                  placeholder="Type a message.."
                  autoFocus
                />
                <button onClick={this._sendMsg}>
                  <img src={rightArrow} alt={rightArrow} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </BackWrapper>
    );
  }
}

const InfoRole = ({ cat, val }) => (
  <div className="infoRole">
    <div className="cat">{cat} :</div>
    <div className="val">{val}</div>
  </div>
);

const INFO_QUERY = gql`
  query {
    currentUser {
      id
      name
      uni
      email
      city
      project {
        id
        name
      }
    }
  }
`;

const NewMsg = gql`
  mutation($body: String!, $send:Boolean!) {
    newMsg(body: $body, send:$send) {
      id
      send
    }
  }
`;

const getMsg = gql`
query {
  msg(first:3, orderBy:updatedAt_ASC) {
    sender {
      id
    }
    receiver {
      id
    }
    body
  }
}`

export default withRouter(
  compose(
    graphql(INFO_QUERY, { name: "userInfo" }),
    graphql(NewMsg, { name: "newMsg" }),
    graphql(getMsg, {name:"getMsgs"}),
  )(ProjectStatus)
);
