# Connect Redux to React Project

 ## Actions

#### Create 'actionTypes.js' file
> create and export all action types in this file

 ``` javascript 
 export const ADD_USER = 'ADD_USER';
 export const REMOVE_USER = 'REMOVE_USER'
 export const UPDATE_USER = 'REMOVE_USER'
 etc...
```
 #### Create 'actions.js' file

 ``` javascript
 import * as ActionTypes from './actionTypes'
export const addUser = user => {
    return {
        type: ActionTypes.ADD_USER,
        payload: {
            name, 
            age,
        }
    }
};

export const removeUser = index => {
    return {
        type: ActionTypes.REMOVE_USER,
        payload: { index }
    };
};

export const updateUser = (name, age) => {
    return {
        type: ActionTypes.UPDATE_USER,
        payload: {
            name,
            age,
        }
    };
};
 ```

 ## Reducers

 #### Create 'reducer.js' file

 ``` javascript
 import * as ActionTypes from './actionTypes'

 const initialState = [
     {
         name: 'Darius',
         age: 25,
     }
 ]

 function UserReducer(state=initialState, action) {
     switch(action.type) {
        case actionTypes.ADD_USER:
             return [
                 ...state,
                 {
                     name: action.payload.name,
                     age: action.payload.age,
                 }
             ];
        
        case actionTypes.REMOVE_USER:
            return [
                ...state.slice(0, actin.payload.index),
                ...state.slice(action.payload.index + 1)
            ];

        case actionTypes.UPDATE_USER:
            return state.map((user, index) => {
                if (index === action.payload.index) {
                    return {
                        ...user,
                        name: action.payload.name,
                        age: action.payload.age,
                    };
                }
                return user;
            });
        default:
            return state;
     }
 }

 export default UserReducer;
 ```

##  store

#### Create 'store.js' file

``` javascript
import { createStore } from 'redux';
import UserReducer from './reducers';

const store = createStore(
    UserReducer,
    window.devToolsExtension && window.devToolsExtension()
);

export default store;
```


## connect to react files
#### in 'index.js' file
```javascript
import store from './redux/store';
import { Provider } from 'react-redux';
...

render(
    render(
        <Provider store={store}> 
            <App />
        </Provider>,
    document.getElementById('root'));
)

#### in 'index.js' file
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ActionCreaters from './redux/actions';
...

class App extends Component {
    
    static propTypes = {
        users: propTypes.array.isRequired,
    };

    render() {
        const {dispatch, users} = this.props;
        const addUser = bindActionCreaters(ActionCreaters.addUser, dispatch);
        const removeUser = bindActionCreators(ActionCreaters.removeUser, dispatch);
        const updateUser = bindActionCreaters(ActionCreaters.updateUser, dispatch);

        const userComponents = users.map((user, index) {
            <User 
            index={index}
            name={user.name}
            age={user.age}
            updatePlayer={updateUser}
            removeUser={removeUser}
            />
        });

        return (
            <div>
                <div name="users"> 
                    { userComponents }
                </div>
                <AddUserForm addUser={addUser} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    users: state,
}
```