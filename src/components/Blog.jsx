import React from 'react'
import { Link } from 'react-router-dom'

const Blog = () => {
  return (
    <section className='p-6'>
       <h1 className='font-bold'>when should use context api?</h1>
       <p>Context is primarily used when some data needs to be accessible by many components at different nesting levels. Apply it sparingly because it makes component reuse more difficult. If you only want to avoid passing some props through many levels, component composition is often a simpler solution than context.</p>
       <h1 className='font-bold'>what is custom hook in react?</h1>
       <p>Custom React JS hooks are reusable functions that a React JS software developer can use to add special and unique functionality to the React applications. Usually, if there is a requirement to add a feature, one can install a third-party library and solve the problem.</p>
       <h1 className='font-bold'>what is useRef in react?</h1>
       <p>useRef(initialValue) is a built-in React hook that accepts one argument as the initial value and returns a reference (aka ref). A reference is an object having a special property current .</p>
    </section>
  )
}

export default Blog
