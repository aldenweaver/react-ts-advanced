# Notes

## Examples: More Component Ideas
+ With the concepts covered thus far, you're already able to build some interesting non-trivial components in a type-safe way.
+ Here are some examples:

### A Card Component That Has Multiple "Slots"
+ Full code (with example usage): https://github.com/academind/react-typescript-course-resources/blob/main/examples/Card.tsx
+ A reusable Card component that does not just accept the children prop but instead also accepts an actions prop which receives JSX as value.
+ It may be used like this:

```ts
<Card
  title="My Card"
  actions={
    <button onClick={() => console.log('Button clicked!')}>
      Click Me!
    </button>
   }
  >
  <p>Some content</p>
</Card>
```

### A Button Component That Accepts Text & An Icon
+ Full code (with example usage): https://github.com/academind/react-typescript-course-resources/blob/main/examples/IconButton.tsx
+ A reusable IconButton component which will output text side-by-side next to a configurable icon (or actually any component). It accepts an icon prop which wants a component identifier as a value.
+ It may be used like this:

```ts
<IconButton icon={HeartIcon} onClick={() => console.log('Button clicked!')}>
  Like
</IconButton>
```

### A Generic List Component
+ Full code (with example usage): https://github.com/academind/react-typescript-course-resources/blob/main/examples/List.tsx
+ A reusable List component which outputs an <ul> that wraps a list that may output any kind of value (strings, numbers, objects, ...). The component accepts the items as a prop as well as a renderItem prop that expects to get a function that controls how each item should be rendered.
+ It may be used like this:

```ts
<main>
  <section>
    <h2>Users</h2>
    <List
      items={users}
      renderItem={(user) => <li key={user.id}>{user.name}</li>}
    />
  </section>
  <section>
    <h2>Hobbies</h2>
    <List
      items={hobbies}
      renderItem={(hobby) => <li key={hobby}>{hobby}</li>}
    />
  </section>
</main>
```

## Alternative: Avoiding Type Casting with "as"
+ In the previous lecture, we used "Type Casting" (also called "Type Assertion") via TypeScript's as keyword to "tell" TypeScript that a value is of a specific type.
+ This is a technique that makes sense when working with data where TypeScript has no chance of inferring the type where you on the other hand know the exact type.
+ If you're not 100% sure about the type of value you'll be dealing with at runtime (i.e., if there are multiple possible value types) or if you want to be extra safe, you can also use a combination of "Type Guards" to narrow down the type until TypeScript is able to infer the final type.

+ Here's the code from the previous lecture, now adjusted to use "Type Guards" for "Type Narrowing":

```ts
function handleSave(data: unknown) {
  // const extractedData = data as { name: string; age: string };
  if (
    !data ||
    typeof data !== 'object' ||
    !('name' in data) ||
    !('age' in data)
  ) {
      return;
  }
 
  // at this point, TypeScript knows that data MUST BE an object 
  // with a name and age property
  // otherwise, the previous if statement would have returned
  console.log(data);
  customForm.current?.clear();
}
```

## Other Notes
+ You can use props to share logic and share state