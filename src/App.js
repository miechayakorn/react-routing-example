import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Home from './routes/home'
import Login from './routes/login'

const App = () => {

    const validateAuth = () => {
        return localStorage.getItem('auth') !== null
    }

    const PrivateRoute = ({path, component: Component, ...rest}) => {
        return (
            <Route
                {...rest}
                render={(props) => validateAuth() === true
                    ? <Component {...props} />
                    : <Redirect to={{pathname: '/login', search: path, state: {from: props.location}}}/>}
            />
        )
    }

    return (
        <Switch>
            <Route path="/" exact component={Home}/>
            <PrivateRoute path="/admin" component={Home}/>
            <Route path="/login" component={Login}/>
        </Switch>
    )

}

export default App
