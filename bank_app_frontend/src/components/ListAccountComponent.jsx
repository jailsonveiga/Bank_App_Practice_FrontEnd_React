// import means to include the code from another file
// React is the default export from the react module
// Component is a named export from the react module
// from means to import from the module
// react is the name of the module
import React, { Component } from 'react'
import AccountService from '../services/AccountService';

// class is a keyword to define a class
// ListAccountComponent is the name of the class
// extends means to inherit from another class
// Component is the name of the class to inherit from
class ListAccountComponent extends Component {
    // constructor is called when the component is created
    // constructor(props) - props is used to pass data to the component
    constructor(props) {
        // super means to call the parent class constructor
        super(props)

       // 2. this.state is used to define the state of the component
        this.state = {
            accounts: []

        }
    }

    componentDidMount() {
        AccountService.getAccounts().then((res) => {
            this.setState({ accounts: res.data});
        }); 
    }
    // render means to display the component
    // render()  - render method is called when the component is rendered
  render() {
    // return means to return the component
    return (
        // <div> is a tag to define a div element
      <div>
            {/* // <h2> is a tag to define a h2 element */}
            {/* // className is used to define the class of the element - class in regular HTML */}
            {/* // "text-center" is the class name */}
           <h2 className = "test-center" > Users Account List </h2>
              <div className = "row" >
                <table className = "table table-striped table-bordered" >
                    <thead>
                        <tr>
                            <th color="red"> Id:</th>
                            <th color="red"> Name:</th>
                            <th color="red"> Email:</th>
                            <th color="red"> Age:</th>
                            <th color="red"> Street Address:</th>
                            <th color="red"> City:</th>
                            <th color="red"> State:</th>
                            <th color="red"> Country:</th>
                            <th color="red"> Phone Number:</th>
                            <th color="red"> Account Number:</th>
                            <th color="red"> Account Type:</th>
                            <th color="red"> Amount Deposited:</th>
                            <th color="red"> Amount Withdrawed:</th>
                            <th color="red"> Account Balance:</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            // this.state.accounts is the state of the component
                            // map is used to iterate through the array
                            this.state.accounts.map(
                                // account is the name of the variable
                                // => is the arrow function
                                account =>
                                <tr key = {account.id} >
                                    <td> { account.id} </td>
                                    <td> { account.name } </td>
                                    <td> { account.email } </td>
                                    <td> { account.age } </td>
                                    <td> { account.streetAddress } </td>
                                    <td> { account.city } </td>
                                    <td> { account.state } </td>
                                    <td> { account.country } </td>
                                    <td> { account.phoneNumber } </td>
                                    <td> { account.accountNumber } </td>
                                    <td> { account.accountType } </td>
                                    <td> { account.amountDeposited } </td>
                                    <td> { account.amountWithdrawn } </td>
                                    <td> { account.accountBalance } </td>
                                    {/* <td>
                                        <button onClick = { () => this.editAccount(account.id)} className = "btn btn-info"> Update </button>
                                        <button style = {{marginLeft: "10px"}} onClick = { () => this.deleteAccount(account.id)} className = "btn btn-danger"> Delete </button>
                                        <button style = {{marginLeft: "10px"}} onClick = { () => this.viewAccount(account.id)} className = "btn btn-info"> View </button>
                                    </td> */}
                                </tr>
                            )
                        }
                    </tbody>
                </table>
              </div>
      </div>
    )
  }

}



// export means to make the component available to other components
// default means to make the component available without the name
// ListAccountComponent is the name of the component
export default ListAccountComponent
