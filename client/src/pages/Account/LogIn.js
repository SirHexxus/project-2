// import React, {useContext, useState, useEffect} from 'react';
// import { Route, Redirect } from 'react-router-dom';
// import { UserGenerate } from '../../Context/UserContext';
// import { AuthContext } from '../../Context/AuthContext';
// import API from "../../utils/API";
// // import  SignIn  from '../../utils/auth'
// import 'whatwg-fetch';
// // // import auth from './../../utils/auth';
// import { setInStorage } from './../../utils/storage';
// // import ThemeContextProvider, { ThemeContext } from '../../Context/ThemeContext';
// // import './Forms.css';



// function Login (props) {
//     const { isAuthorized} = useContext(AuthContext);
//     const { user, setUser} = useContext(UserGenerate)
//     const [username, setUsername] = useState({ username: ''})
// 	const [password, setPassword] = useState({ password: ''});
	
// 	const {userInput} = username
// 	const {passInput} = password
//     // const [isButtonDisabled, setIsButtonDisabled] = useState(true);
//     const [helpertext, setHelperText] = useState();
//     // const [loading, isLoading] = useState(true)
// 	const [error, setError] = useState(false);

//     const handleLogin = (event) => {
// 		if(event){
// 		event.preventDefault()	
// 		}
//         console.log("username is " + username);
//         console.log("password is " + password);
        
// 	}
// 	const SignIn = ({username, password}) => {
// 		if(username && password === ''){
// 			return;
// 		}
// 	   API.grabUser(username, password)
// 		  .then(res => res.json())
// 		  .then(json => {
// 			  if (json) {
// 				  console.log('Grabbing a token');
// 				  setInStorage('the_main_app', { token: json.token });
// 				  setError(false);
// 				  setHelperText('Login Successful');
// 			  } else {
// 				  setError(true);
// 			  setHelperText('Incorrect username or password')
// 			  }
// 		  }).catch(err => setError(err));
// 	}
    

//     if(isAuthorized){
//         return(
//             <div>Hi! {user.firstName}
// 			<Redirect to={
// 				{
// 					pathname:"/",
// 					state: {
// 						from: props.location
// 					}
// 				}
// 			} />
// 			</div>
//         )
//     }
// return (
//     <div>
//        <pre> {JSON.stringify(user, null, 2)}</pre>
// 				<div className='container'>
// 					{/* <div style={{ color: theme.ui }}>
// 						{signInError ? <p>{signInError}</p> : null} */}
// 						<div className='container'>
// 							<h2 className='center form-header'>Sign In</h2>
// 							<form
// 								onClick={handleLogin()}
// 								className='border'
// 								// style={{ backgroundColor: theme.bgc }}
// 							>
// 								<ul className='login-form center'>
// 									<div>
// 										<li>
// 											<input
// 												type='text'
// 												id='username'
// 												placeholder='Username'
//                                                 name='username'
// 												error={error}
// 												value={userInput}
// 												required
// 												onChange={ (e) =>
// 												setUsername({...username, [e.target.name]:e.target.value})
// 												}
// 											/>
// 											<input
// 												type='password'
// 												placeholder='Password'
//                                                 name='password'
// 												error={error}
// 												value={passInput}
//                                                 helpertext={helpertext}
// 												onChange={ (e) =>
// 												setPassword({...password, [e.target.name]:e.target.value})
// 												}
// 											/>
// 										</li>
// 										<br />
// 										{/* <h4>I forgot my Password!</h4> */}
										
// 										<button onSubmit={ async ({username, password}) => {const user = await SignIn()
//                                                                  setUser(user)}}>Log In</button>	
// 									</div>
// 								</ul>
// 							</form>
// 						</div>
// 					</div>

// 				</div>
       