# Credits

## Primitive UI

I am using Tania Rascia's Primitive UI Sass boilerplate in this program, which you can find online here: https://github.com/taniarascia/primitive. I have copied the contents of Primitive UI's `src/scss` folder into this project's `src/scss` folder. I have not modified Tania Rascia's code, and as such, I am reproducing the license for Primitive UI here:

```
The MIT License (MIT)

Copyright (c) 2019 Tania Rascia

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## The Fauna DB API functions in ./src/core/api.ts

I made these functions following David Parks' tutorial here: https://davidparks.dev/blog/building-a-like-counter-with-faunadb-and-nuxt/. In particular, I used the code snippet here: https://davidparks.dev/blog/building-a-like-counter-with-faunadb-and-nuxt/#incrementing-likes-function, and adjusted it for use with our Fauna database by separating out their single handler into several functions for each of our database's endpoints, and finally wrapped the core part of each function in a try-catch block to gracefully deal with any exceptions that may occur in the function.

David Parks references this blog post: https://www.joshwcomeau.com/react/serverless-hit-counter, so I want to point that out here, too. There is a small irony in me using Parks' version since they use Nuxt instead of Comeau's React version, but the Netlify Function logic works either way.

## The logic for periodically fetching the donation totals from the DB in ./src/components/totals.tsx

I made the logic for this component following this tutorial: https://js.plainenglish.io/using-reacts-useeffect-hook-to-fetch-data-and-periodically-refresh-that-data-2a69b6d44081. I made a few adjustments, namely using environment variables for the interval and using another state variable to track the last time the web app fetched data from the database.
