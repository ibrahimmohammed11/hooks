import React, { Component, Fragment, useEffect, useState } from "react";

export class LoginFormClass extends Component {
  state = {
    email: "",
    password: "",
  };
  handleEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };
  handlePassword = (e) => {
    this.setState({
      password: e.target.value,
    });
  };
  componentDidMount() {
    console.log("class Component did mount");
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.email !== this.state.email) {
      console.log("class Component: email did update");
    }
    console.log("class Component did update");
  }
  componentWillUnmount() {
    console.log("class Component will unmount");
  }
  render() {
    let { email, password } = this.state;

    return (
      <Fragment>
        <div>
          <h2>Class example</h2>
          <input
            value={email}
            placeholder="Email"
            onChange={this.handleEmail}
          />
          <input
            value={password}
            placeholder="Password"
            onChange={this.handlePassword}
          />
        </div>
      </Fragment>
    );
  }
}

export function LoginFormFunction() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // useEffect(() => {
  //   console.log("function Component did mount and did update");
  //   // useEffect will call at did mount and did update because there is no varaible to listen for it when change
  // });
  // useEffect(() => {
  //   console.log("function Component did mount");
  //   // useEffect will call at did mount only because there is varaible [] to listen for it when change and [] will not change
  // }, []);
  // useEffect(() => {
  //   if (email === "") return;
  //   console.log("function Component did update");
  //   // useEffect will call at did update only and call with any update in code
  // });
  // useEffect(() => {
  //   if (email === "") return;
  //   console.log("function Component did update");
  //   // useEffect will call at did update only because there is varaible [email] to listen for it when change and will not call in the begining when email == "" and make useeffect work at update only
  // }, [email]);
  // useEffect(() => {
  //   if (password === "") return;
  //   console.log("function Component did update");
  //   // useEffect will call at did update only because there is varaible [password] to listen for it when change and will not call in the begining when password == "" and make useeffect work at update only
  // }, [password]);
  useEffect(() => {
    if (email === "" && password === "") return;
    console.log("function Component did update");
    // useEffect will call at did update only and with any change in email or password
  }, [email, password]);
  useEffect(() => {
    return () => {
      console.log("function Component will unmount");
      // useEffect will call at will unmount only because we put code inside return and that make useEffect call only when comp is not visible or we become out of this comp
    };
  }, []);
  return (
    <Fragment>
      <div>
        <h2>Function example</h2>
        <input
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
    </Fragment>
  );
}
