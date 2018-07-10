import React, { Component } from "react";
import { BackWrapper, user, support, rightArrow, locked, Auth } from "..";
import { withRouter } from "react-router-dom";
import { graphql, compose, withApollo } from "react-apollo";
import gql from "graphql-tag";



class ProjectStatus extends Component {
  constructor(props) {
    super(props);

    this.state = {
      msg: "",
      result: [],
    };
  }

  handleChange = ({ target: { value } }) => {
    this.setState({ msg: value });
  };

  onKeyPress = ({ key }) => {
    key === 'Enter' ? this._sendMsg() : false
  }

  _logout = () => {
    const { history } = this.props;
    Auth.deauthenticateUser();
    history.push("/project/lock");
  };

  _subscribeToNewMessages = () => {
    const email = this.props.location.state ? this.props.location.state.email : 'support@support.com'
    this.props.getMsgs.subscribeToMore({
      document: gql`
        subscription ($filter:String) {
          newMsg(filter:$filter) {
            node {
              sender {
                id
              }
              receiver {
                id
              }
              body
              send
            }
          }
        }
      `,
      variables: {filter:email},
      updateQuery: (previous, { subscriptionData }) => {
        const newAllMsgs = [...this.state.result, subscriptionData.data.newMsg.node,]

        return  this.setState({result:newAllMsgs})
      }
    });
  };

  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: "auto" });
  }


  componentDidUpdate() {
    this.scrollToBottom();
  }

  _sendMsg = async () => {
    const { msg } = this.state;

    const mail = this.props.location.state ? this.props.location.state.email : false
    const send = mail ? false : true
    const email = mail || ''

    const res = await this.props
      .newMsg({
        variables: {
          body: msg,
          send,
          email,
        }
      })
      .then(res => this.setState({ success: true, msg: "" }))
      .catch(e => this.setState({ success: false }));
  };

  _getMsgs = async () => {
   
    const email = this.props.location.state ? this.props.location.state.email : 'support@support.com'
    
    const result = await this.props.client.query({
      query: getMsg,
      variables: {filter:email},
    })

    this.setState({result:result.data.msg})
  }

  componentDidMount() {
    this._getMsgs();
    this._subscribeToNewMessages()
    this.scrollToBottom();
  }

  componentWillUnmount() {
    this.setState({result:''})
  }
  render() {
    const {
      userInfo: { loading, currentUser = {}, newMsg = {} }
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
    const { msg, result } = this.state;

    return (
      <div className="support-wrapper">
        <div className="user-wrapper">
          <img src={user} alt={user} />
          <h4>{!loading ? currentUser[0].name : "loading.."}</h4>
          {roles.map((item, key) => <InfoRole key={key} {...item} />)}
          <div id="locked" onClick={this._logout}>
            <img src={locked} alt={locked}  />
            <span>Logout</span>
          </div>
        </div>
        <div className="chat-wrapper">
          <div className="top-info">
            <img src={support} alt={support} id="user-img" />
            <h4>Support</h4>
          </div>
          <div className="body-msgs-container">
            <div className="body-msgs">
              {
                result && result.map(({ body, send }, key) => send ? <div key={key} className="sender">{body}</div> : <div key={key} className="receiver">{body}</div>)
              }
              <div style={{ float: "left", clear: "both" }}
                ref={(el) => { this.messagesEnd = el; }}>
              </div>
            </div>
          </div>
          <div className="bottom-send">
            <div className="bottom-wrapper">
              <input
                type="text"
                value={msg}
                onKeyDown={this.onKeyPress}
                onChange={this.handleChange}
                placeholder="Type a message.."
                autoFocus
              />
              <button onClick={this._sendMsg} >
                <img src={rightArrow} alt={rightArrow} />
              </button>
            </div>
          </div>
        </div>
      </div>
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
  mutation($body: String!, $send:Boolean!, $email:String) {
    newMsg(body: $body, send:$send, email:$email) {
      id
      send
    }
  }
`;

const getMsg = gql`
query ($filter:String) {
  msg (filter:$filter){
    body
    send
    sender {
      id
    }
    receiver {
      id
    }
  }
}`

export default withRouter(withApollo(
  compose(
    graphql(INFO_QUERY, { name: "userInfo" }),
    graphql(NewMsg, { name: "newMsg" }),
    graphql(getMsg, { name: "getMsgs" }),
  )(ProjectStatus)))

