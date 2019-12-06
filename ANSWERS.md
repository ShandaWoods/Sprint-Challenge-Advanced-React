- [ ] Why would you use class component over function components (removing hooks from the question)?
    Due to legacy code, and the fact that React is still very new (especially hooks) we need to be competent in both class component creation as well as hooks.

- [ ] Name three lifecycle methods and their purposes.
    constructor()
        The constructor for a React component is called before it is mounted, constructors are only used for two purposes: 1. Initializing local state by assigning an object to this.state. 2. Binding event handler methods to an instance.
    render()
        The render method is the only required method in a class component. When called, it should examine this.props and this.state and return one of the following types:
                React elements. 
                Arrays and fragments.  
                String and numbers.
                Booleans or null. 
    componentDidMount()
        componentDidMount is invoked immediately after a component is mounted. Initialization that requires DOM nodes should go here. If you need to load data from a remote endpoint, this is a good place to instantiate the network request. 

- [ ] What is the purpose of a custom hook?
        Custom Hooks allow us to reuse stateful logic, but every time a custom Hook is used, all state and effects inside of it are fully isolated.

- [ ] Why is it important to test our apps?
    Decreases in bugs
    Increase in UX confidence 
    Improves code and maintainability.
    Provides quick feedback on whether or not changes worked. 
    A great safety net which can enhance confidence when its time to add features or refactor 
