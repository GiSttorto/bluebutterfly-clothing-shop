import React, {useEffect} from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import HomePage from './pages/homepage/homepage.component';
import SignInAndSignUp from './pages/signIn-signUp/signIn-signUp.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import { connect }from 'react-redux';
import { selectCurrentUser } from './redux/user/user.selectors';
import CheckoutPage from './pages/checkout/checkout.component';
import { checkUserSession } from './redux/user/user.actions';

const App = ({checkUserSession, currentUser}) => {

  useEffect(() => {
    checkUserSession();
  },[checkUserSession])

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route
          exact path='/signIn'
          render={() =>
            currentUser ? (<Redirect to='/' />
            ) : (
              <SignInAndSignUp />
            )
          }
        />
      </Switch>
    </div>
  );
};

const mapStateToProps =  createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
