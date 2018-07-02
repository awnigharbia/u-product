import React, { Component } from "react";
import { graphql } from "react-apollo";
import { withRouter } from 'react-router-dom'
import gql from "graphql-tag";
import Auth from "../../auth";

import {
  beg,
  like,
  strong,
  write,
  clapping,
  select,
  positive,
  SelectLang,
  BtnContainer,
  BackWrapper
} from "..";

class CreateProject extends Component {
  constructor(props){
    super(props)

    
    this.state = {
      selectValue:null,
      states: [beg, like, strong, clapping, positive],
      show: false,
      currentState: select,
      write: write,
      top: "",
      moves: ["", "10", "65", "125", "180", "240", "295", "410"],
      projectName: "",
      name: "",
      email: "",
      city: "",
      uni: "",
      password: "",
      admin: false,
      lang: "javascript",
      description: "",
      state: "Default",
      projectState:"new",
      error:"",
  }
};

  handleBlur = () => {
    this.setState({ show: !this.state.show, currentState: select });
  };

  handleFoucs = ({target:{id}}) => {
    const { moves } = this.state;

    this.setState({
      show: !this.state.show,
      currentState: select,
      top: `${moves[id]}px`
    });
  };

  afterType = input => {
    this.timer = setTimeout(e => {
      const { states } = this.state;
      const currentIndex = Math.floor(Math.random() * 4) + 1;

      input !== ""
        ? this.setState({ currentState: states[currentIndex] })
        : this.setState({ currentState: select });
    }, 1000);
  };

  _saveUserData = (token) => {
    const { history } = this.props;

    Auth.authenticateUser(token);
    this.setState({state:"Success"});
  };

  handleChange = (input, e) => {
    const { write } = this.state;
    clearTimeout(this.timer);

    this.setState(
      {
        show: true,
        currentState: write,
        [input]: e.target.value
      },
      () => this.afterType(this.state[input])
    );
  };

  handleClick = async () => {
    const {
      email,
      password,
      name,
      projectName,
      lang,
      projectState,
      description,
      selectValue,
      city,
      uni,
      admin
    } = this.state;

    const result = await this.props
      .newProject({
        variables: {
          email,
          password,
          city,
          uni,
          name,
          admin,
          project: {
            name: projectName,
            description,
            lang:selectValue,
            state:projectState,
          }
        }
      })
      .then(({data:{signup:{token, user:{project:{id}}}}}) => {
        const { history } = this.props
        
        const link = "/finished/" + id
        this._saveUserData(token)
        history.push(link);
      })
      .catch(e => this.setState({error:"Error with Signup"}));
  };

  handleValue = lang => {
    this.setState({selectValue:lang})
  }

  componentDidMount() {
    this.timer = null;
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    const {
      selectValue,
      top,
      show,
      email,
      city,
      uni,
      password,
      description,
      currentState,
      projectName,
      name,
      state,
      error,
    } = this.state;

    return (
      <BackWrapper>
        <div className="project-form">
          {show && (
            <div className="state left-move" style={{ top: top }}>
              <img src={currentState} alt={select} />
            </div>
          )}
          {
            error !== '' && 
              <ErrorMsg msg={error}  />
          }
          <Input
            type="text"
            id="1"
            placeholder="Fullname"
            onFocus={this.handleFoucs}
            onChange={e => this.handleChange("name", e)}
            onBlur={this.handleBlur}
            value={name}
          />
          <Input
            type="text"
            id="2"
            placeholder="Project Name"
            onFocus={this.handleFoucs}
            onChange={e => this.handleChange("projectName", e)}
            onBlur={this.handleBlur}
            value={projectName}
          />
          <Input
            type="email"
            id="3"
            placeholder="Email"
            onFocus={this.handleFoucs}
            onChange={e => this.handleChange("email", e)}
            onBlur={this.handleBlur}
            value={email}
          />
          <Input
            type="text"
            id="4"
            placeholder="City"
            onFocus={this.handleFoucs}
            onChange={e => this.handleChange("city", e)}
            onBlur={this.handleBlur}
            value={city}
          />
          <Input
            type="text"
            id="5"
            placeholder="Universty name"
            onFocus={this.handleFoucs}
            onChange={e => this.handleChange("uni", e)}
            onBlur={this.handleBlur}
            value={uni}
          />
          <Input
            type="password"
            id="6"
            placeholder="Password"
            onFocus={this.handleFoucs}
            onChange={e => this.handleChange("password", e)}
            onBlur={this.handleBlur}
            value={password}
          />
          <SelectLang select={selectValue} handleValue={this.handleValue} />
          <textarea
            name="beirf"
            className="input-form"
            id="7"
            cols="30"
            rows="5"
            placeholder="Describe your project..."
            onFocus={this.handleFoucs}
            onChange={e => this.handleChange("description", e)}
            onBlur={this.handleBlur}
            value={description}
            required
          />

          <BtnContainer state={state} handleValue={this.handleValue} disabled={true} handleClick={this.handleClick} />
        </div>
      </BackWrapper>
    );
  }
}

const Input = props => <input className="input-form" {...props} required />;

const NEWPROJ_MUTATION = gql`
  mutation (
    $email: String!,
    $password: String!,
    $city: String!,
    $uni: String!,
    $name: String!,
    $admin: Boolean!,
    $project: inputProject!,
  ) {
    signup(
      email: $email,
      password: $password,
      city: $city,
      uni: $uni,
      name: $name,
      admin: $admin,
      project: $project,
    ) {
      user {
        project {
          id
        }
      }
      token
    }
  }
`;

const ErrorMsg = ({msg, className}) => <div className="error-msg">{msg}</div>

export default withRouter(graphql(NEWPROJ_MUTATION, { name: "newProject" })(CreateProject));
