import React, { Component } from "react"
import { Button, TextField } from "@material-ui/core"
import Dashboard from "./Dashboard"
class Login extends Component {
    state = {
        user: "",
        pass: "",
        loggedIn: false
    }
    handleChange = e => {
        const copy = { ...this.state }
        copy[e.target.id] = e.target.value
        this.setState(copy)
    }
    login = (e) => {
        e.preventDefault()
        this.setState({ loggedIn: true })
      }
    submit = e => {
        e.preventDefault();
        if (this.state.pass == "password") {
        this.setState({ loggedIn: true })
        }
        console.log(this.state)
    };
    render() {
        if (this.state.loggedIn) {
            return <Dashboard />
                } else {
                    return (
                        <div style={{ width: "30%", margin: "0 auto" }}>
                        <form
                            style={{
                            display: "flex",
                            flexDirection: "column",
                            aligncontent: "center"
                }}
                onSubmit={this.submit}
            >
                <TextField
                    id="user"
                    label="Username*"
                    value={this.state.user}
                    onChange={this.handleChange}
                    />
                <TextField
                id="pass"
                label="Password*"
                type="password"
                value={this.state.pass}
                onChange={this.handleChange}
                ></TextField>
                <Button
                onClick={this.login}
                style={{ background: "green", color: "black", marginTop: "10px" }}
                variant="contained"
                type="Submit"
                >
                Login
                </Button>
            </form>
            </div>
        )
        }
    }
}
export default Login