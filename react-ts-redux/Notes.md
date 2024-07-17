# Notes

+ `createPortal`: makes sure React code is not injected in the improper place in the DOM
    + React built in function
    + Helps with functionality such as managing cart


## How Redux Works
+ Set up a global data storage
+ Dispatch actions to that storage from any component of your choice
+ Those actions then trigger reducer functions (not useReducer, but instead managed by Redux) that then update the state
+ Can select data from the store from inside the components
+ Overall store is combination of multiple slices grouped together

## Redux Toolkit
+ Creates action types and action objects so you don't have to create custom types
+ Extra type safety when working with "thunks" - action creators that perform some (async) action before the actual action is created and dispatched



## Collectable Components

### CollectionItem
* Single Item 
* e.g., CartItem, FavoritesItem

### Collection
* List of Items
* e.g., Cart, FavoritesList

### Collector
* Item Actions (ability to add/remove items from list)
* Reducers in slice
* e.g., handleAddToCart(item), handleRemoveFromCart(item)

### Slice
* Holds state and reducers

### Dispatch & Selector
* Custom hooks extending useDispatch and useSelector

### Store
* Holds all the slices
