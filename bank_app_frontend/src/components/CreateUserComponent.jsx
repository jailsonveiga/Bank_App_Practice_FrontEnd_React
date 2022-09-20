import React, { Component } from "react";

class CreateUserComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Name: "",
      Email: "",
      Age: "",
      AccountBalance: "",
    };

    this.changeNameHandler = this.changeNameHandler.bind(this);
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.changeAgeHandler = this.changeAgeHandler.bind(this);
    this.changeAccountBalanceHandler = this.changeAccountBalanceHandler.bind(
      this
    );
    this.saveUser = this.saveUser.bind(this);
  }

  changeNameHandler = (event) => {
    this.setState({ Name: event.target.value });
  };

  changeEmailHandler = (event) => {
    this.setState({ Email: event.target.value });
  };

  changeAgeHandler = (event) => {
    this.setState({ Age: event.target.value });
  };

  changeAccountBalanceHandler = (event) => {
    this.setState({ AccountBalance: event.target.value });
  };

  saveUser = (e) => {
    e.preventDefault();
    let user = {
      Name: this.state.Name,
      Email: this.state.Email,
      Age: this.state.Age,
      AccountBalance: this.state.AccountBalance,
    };
    console.log("user => " + JSON.stringify(user));
  };

  cancel = () => {
    this.props.history.push("/getall");
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <br />
              <h3 className="text-center" color="DeepSkyBlue ">
                Create New User
              </h3>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label color="yellow"> Name: </label>
                    <input
                      placeholder="Name"
                      name="tName"
                      className="form-control"
                      value={this.state.Name}
                      onChange={this.changeNameHandler}
                    />
                  </div>
                  <br />
                  <div className="form-group">
                    <label color="yellow"> Email: </label>
                    <input
                      placeholder="Email"
                      name="tEmail"
                      className="form-control"
                      value={this.state.Email}
                      onChange={this.changeEmailHandler}
                    />
                  </div>
                  <br />
                  <div className="form-group">
                    <label color="yellow"> Age: </label>
                    <input
                      placeholder="Age"
                      name="tAge"
                      className="form-control"
                      value={this.state.Age}
                      onChange={this.changeAgeHandler}
                    />
                  </div>
                  <br />
                  <div className="form-group">
                    <label color="yellow"> Account Balance: </label>
                    <input
                      placeholder="Account Balance"
                      name="tAccountBalance"
                      className="form-control"
                      value={this.state.AccountBalance}
                      onChange={this.changeAccountBalanceHandler}
                    />
                  </div>

                  <br />
                  <button
                    className="btn btn-outline-success me-2"
                    onClick={this.saveUser}
                  >
                    Save
                  </button>

                  <button
                    className="btn btn-outline-danger me-2"
                    onClick={this.cancel.bind(this)}
                    style={{ marginLeft: "10px" }}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateUserComponent;
