import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import Breakfast from '../Breakfast/Breakfast';

import Dinner from '../Dinner/Dinner';
import FoodNav from '../FoodNav/FoodNav';
import Lunch from '../Lunch/Lunch';





const Foods = () => {
    const { user } = useAuth()
    return (
        <div>
            <BrowserRouter>
                <FoodNav />
                <Switch>
                    <Route exact path="/">
                        <Breakfast></Breakfast>
                    </Route>
                    <Route exact path="/home/">
                        <Breakfast></Breakfast>
                    </Route>
                    <Route exact path="/breakfast">
                        <Breakfast></Breakfast>
                    </Route>
                    <Route exact path="/lunch">
                        <Lunch></Lunch>
                    </Route>
                    <Route exact path="/dinner">
                        <Dinner></Dinner>
                    </Route>
                </Switch>
            </BrowserRouter>
            <div>
                {!user?.email ? <Link to="/login"><button className="btn btn-secondary  my-4">Checkout Your Food</button> </Link> :
                    <Link to="/cart"><button className="btn btn-secondary  my-4">Checkout Your Food</button> </Link>
                }
            </div>
        </div>
    );
};

export default Foods;