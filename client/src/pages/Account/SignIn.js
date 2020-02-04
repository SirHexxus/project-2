import React, { Component, useContext } from 'react';
import 'whatwg-fetch';
import Auth from './../../utils/auth';
import { getFromStorage, setInStorage } from './../../utils/storage';
import { ThemeContext } from '../../Context/ThemeContext';
import './Forms.css';
import Dashboard from '../Dashboard/Dashboard';
import AuthContextProvider, {toggleAuth, AuthContext} from '../../Context/AuthContext';




export default class SignIn extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoading: true,
			isAuthorized: false,
			signInError: '',
			signInUsername: '',
            signInPassword: '',
            data: '',
            user: ''
		};
		this.onChangeSignInUsername = this.onChangeSignInUsername.bind(this);
		this.onChangeSignInPassword = this.onChangeSignInPassword.bind(this);

        this.onSignIn = this.onSignIn.bind(this);
       
	}

	componentDidMount() {
		const obj = getFromStorage('the_main_app');
		if (obj && obj.token) {
			const { token } = obj;
			//verify token
			fetch('/api/account/verify?token' + token)
				.then(res => res.json())
				.then(json => {
					if (json.success) {
						this.setState({
							token,
							isLoading: false
						});
					} else {
						this.setState({
							isLoading: false
						});
					}
				});
		} else {
			this.setState({
				isLoading: false
			});
		}
	}

	onChangeSignInUsername(event) {
		this.setState({
			signInUsername: event.target.value
		});
	}
	onChangeSignInPassword(event) {
		this.setState({
			signInPassword: event.target.value
		});
    }
    // user(data){
    //     const {getUser} = useContext(UserGenerate)
    //     getUser(data)
    // }
    
	onSignIn(props) {
        
		//Grab State
		const { signInUsername, signInPassword,  } = this.state;

		this.setState({
			isLoading: true
		});
		console.log(signInUsername);
		console.log(signInPassword);

		//Post request to backend
		fetch('/api/users/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				username: signInUsername,
				password: signInPassword
			})
		})
			.then(res => res.json())
			.then(json => {
				if (json) {
					console.log('Grabbing a token');
					setInStorage('the_main_app', { token: json.token });
					this.setState({
						signInError: json.message,
						isLoading: false,
						signInUsername: '',
						signInPassword: '',
                        token: json.token,
                        data: json.data
                    });
				} else {
					this.setState({
						isLoading: false
					});
				}
			});
    }
    handleUser = () => {
        const user = this.state.data
        this.setState({user: user})
        console.log(user)
    }

	validateForm() {
		return (
			this.state.signInUsername.length > 0 &&
			this.state.signInPassword.length > 0
		);
	}

	handleChange = event => {
		this.setState({
			[event.target.id]: event.target.value
		});
	};
    static contextType = AuthContext
	handleSubmit = event => {
        event.preventDefault();
        const {isAuthorized} = this.state
        console.log(isAuthorized)
        this.setState({isAuthorized: true})    
    
	};
	static contextType = ThemeContext;
	render() {
		const { isLightTheme, light, dark } = this.context;
		const theme = isLightTheme ? light : dark;

		const {
			isLoading,
			token,
            signInError
		} = this.state;

		if (isLoading) {
			return (
				<div>
					<p>Loading...</p>
				</div>
			);
        }
        

		if (!token) {
			return (
				<div className='container'>
					<div style={{ color: theme.ui }}>
						{signInError ? <p>{signInError}</p> : null}
						<div className='container'>
							<h2 className='center form-header'>Sign In</h2>
							<form
								onClick={this.handleSubmit}
								className='border'
								style={{ backgroundColor: theme.bgc }}
							>
								<ul className='login-form center'>
									<div>
										<li>
											<input
												type='text'
												id='username'
												placeholder='Username'
												name='username'
												value={this.signInUsername}
												required
												onChange={
													this.onChangeSignInUsername
												}
											/>
											<input
												type='password'
												placeholder='Password'
												name='password'
												value={this.signInPassword}
												onChange={
													this.onChangeSignInPassword
												}
											/>
										</li>
										<br />
										{/* <h4>I forgot my Password!</h4> */}
										<input
											className='btn'
											type='submit'
											onClick={this.onSignIn}
											defaultValue='Login'
											style={{
												backgroundColor: '#5558aa'
											}}
										/>
									</div>
								</ul>
							</form>
						</div>
					</div>	
				</div>
			);
		}
		
		return (
			<div>
                <Dashboard user = {this.state.data}/>
			</div>
			
		);
	}
}
