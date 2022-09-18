import React, { Component } from 'react'

class FooterComponent extends Component {
    constructor (props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                    <footer className = "footer">
                        <spam className="text-muted">All Rights Reserved 2022 @BankApp</spam>
                    </footer>
            </div>
        )
    }
}

export default FooterComponent 