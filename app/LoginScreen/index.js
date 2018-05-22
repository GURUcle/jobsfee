import React, { Component, NativeModules } from 'react';
import Material from '../MaterialView';
import NavBar from '../NavBar';
import { Button } from 'react-native-material-ui';
import { Bubbles } from 'react-native-loader';
import {
    View,
    Text,
    StyleSheet,
    Alert,
    TextInput
} from 'react-native';
export default class  extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //UserName: '',
            loading : false,
            errorMessage : '',
            UserEmail: '',
            UserPassword: ''
        }
    }
    login() {
        // Sign in with email and pass.
        // [START authwithemail]
        this.setState({loading : true});
        global.firebase.auth().signInWithEmailAndPassword(this.state.UserEmail, this.state.UserPassword).catch((error)=> {
            // Handle Errors here.
            
            var errorCode = error.code;
            var errorMessage = error.message;
            //console.log(errorCode,errorMessage)
            // [START_EXCLUDE]
            if (errorCode === 'auth/wrong-password') {
                this.setState({loading : false,errorMessage: 'Wrong password.'});
            } else if(errorCode === 'auth/user-not-found'){
                this.setState({loading : false,errorMessage: 'User not found.'});
            }else {
                this.setState({loading : false,errorMessage: errorMessage});
            }
            // [END_EXCLUDE]
            }).then(user=>{
                //console.log(user)
            if(user){
                this.props.navigation.navigate('Main');
            }
            });
            // [END authwithemail]

    }
    register() {        
        this.props.navigation.navigate('Register');
    }
    render() {
        return <Material>
            <NavBar
                title="Sign In"
                image={require('../../Images/image-2.png')}
                />
            
                { this.state.loading && 
                    <View style={global.styles.MainContainer}>                
                        <View style={global.styles.Center}>
                            <Bubbles size={10} color="#1CAFF6"/>
                        </View>
                    </View>
                }
                { !this.state.loading &&
                    <View style={global.styles.MainContainer}>
                        { !!this.state.errorMessage && 
                            <View style={global.styles.Center}>
                                <Text>{this.state.errorMessage}</Text>
                            </View>
                        }
                        <TextInput
                            placeholder="Enter User Email"
                            keyboardType="email-address"
                            returnKeyType="next"
                            onChangeText={email => this.setState({UserEmail : email})}
                            underlineColorAndroid='transparent'
                            style={styles.TextInputStyleClass}
                            onSubmitEditing={() => { this.UserPasswordTextInput.focus(); }}
                            value={this.UserEmail}
                        />
            
                        <TextInput
                            ref={(input) => { this.UserPasswordTextInput = input; }}
                            placeholder="Enter User Password"
                            onChangeText={password => this.setState({UserPassword : password})}
                            underlineColorAndroid='transparent'
                            style={styles.TextInputStyleClass}
                            secureTextEntry={true}
                            returnKeyType="done"
                        />
                        <Button primary text='Login' onPress={()=>{this.login()}}/>
                        <Button accent text='Register' onPress={()=>{this.register()}} />
                    </View>
                }
        </Material>
    }
}