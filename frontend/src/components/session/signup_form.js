import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom'; 
import './session.css';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            handle: '',
            password: '',
            password2: '',
            errors: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearedErrors = false;
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.signedIn === true) {
            this.props.history.push('/login');
        }

        this.setState({ errors: nextProps.errors })
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        let user = {
            email: this.state.email,
            handle: this.state.handle,
            password: this.state.password,
            password2: this.state.password2
        };

        this.props.signup(user, this.props.history);
    }

    renderErrors() {
        return (
            <ul>
                {Object.keys(this.state.errors).map((error, i) => (
                    <li key={`error-${i}`}>
                        {this.state.errors[error]}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div className="session-form-container">
                <form onSubmit={this.handleSubmit}>

                    <div className="session-form-content">
                        <p id="signup-message">Sign up and start learning, for free!</p>

                        <br />
                        <input type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                            placeholder="Email"
                            className="session-input-field"
                        />
                        <br />
                        <input type="text"
                            value={this.state.handle}
                            onChange={this.update('handle')}
                            placeholder="Handle"
                            className="session-input-field"
                        />
                        <br />
                        <input type="password"
                            className="session-input-field"
                            value={this.state.password}
                            onChange={this.update('password')}
                            placeholder="Password"
                            className="session-input-field"
                        />
                        <br />
                        <input type="password"
                            value={this.state.password2}
                            onChange={this.update('password2')}
                            placeholder="Confirm Password"
                            className="session-input-field"
                        />
                       
                        <br/>
                        <input type="submit" value="Sign Up" className="session-submit-button"/>
                        {this.renderErrors()}

                    </div>
                </form>
            </div>
        ); 
    }
}

export default withRouter(SignupForm);