const Why = () => {
  return (
    <div className="md:max-w-2xl mt-10 flex flex-col items-start">
      <h1 className="text-xl md:text-2xl font-bold">Why FaIRCoP?</h1>
      <img
        width={960}
        height={540}
        loading="lazy"
        srcSet="https://a.storyblok.com/f/117912/960x540/86ed4b4ded/method_fig.png/m/filters:quality(70)"
        className="mt-5"
        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
      />
      <h1 className="mt-5 text-md text-gray-600 break-words">
        Retrieving facial images from attributes plays a vital role in various systems such as face recognition and suspect
        identification. Compared to other image retrieval tasks, facial image retrieval is more challenging due to the high
        subjectivity involved in describing a person’s facial features. Existing methods do so by comparing specific
        characteristics from the user’s mental image against the suggested images via high-level supervision such as using natural
        language. In contrast, we propose a method that uses a relatively simpler form of binary supervision by using the user's
        feedback to label images as either similar or dissimilar to the target image. Such supervision enables us to exploit the
        contrastive learning paradigm for encapsulating each user's personalized notion of similarity. For this, we propose a
        novel loss function optimized online via user feedback. We validate the efficacy of our proposed approach using a
        carefully designed testbed to simulate user feedback and a large-scale user study. Our experiments demonstrate that our
        method iteratively improves personalization, leading to faster convergence and enhanced recommendation relevance, thereby,
        improving user satisfaction. Our proposed framework is also equipped with a user-friendly web interface with a real-time
        experience for facial image retrieval.
      </h1>
    </div>
  )
}

export default Why

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
