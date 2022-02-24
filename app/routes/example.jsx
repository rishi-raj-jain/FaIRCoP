const Example = () => {
  return (
    <div className="md:max-w-2xl mt-10 flex flex-col items-start">
      <h1 className="text-xl md:text-2xl font-bold">An Example Iteration Flow</h1>
      <img
        width={736}
        height={1000}
        loading="lazy"
        className="mt-5"
        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
        srcSet="https://a.storyblok.com/f/117912/736x1000/dbc50899e7/iteration.jpeg/m/filters:quality(40)"
      />
    </div>
  )
}

export default Example

export function ErrorBoundary({ error }) {
  return (
    <div>
      <h1>Error</h1>
      <p>{error.message}</p>
      <p>The stack trace is:</p>
      <pre>{error.stack}</pre>
    </div>
  )
}
