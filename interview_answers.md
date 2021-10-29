# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?
A: Statefull components manages state for itself and its stateless children, functional components rely on the use of hooks to manage state.

2. When does a componentWillMount function be called? What about a componentWillUpdate?
A: componentWillMount is called just before render is called(now its called UNSAFE_componentWillMount)
  componentWillUpdate is called just before render what new props and state is being received, it will not be called in the initial render(its now called UNSAFE_componentWillUpdate)

3. Define stateful logic.
A: Stateful logic is any code logic that uses state

4. What are the three step of creating a successful test? What is done in each phase?
A: Arrange -----> this step is to render the component and find the elements of interest
Act -----> simulate some sort of user interaction
Assert ------> theorize about what should happen when the user 'Act' and test that your theory is right

