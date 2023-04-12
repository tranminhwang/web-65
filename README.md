# What is NextJS?
 - NextJS is a framework for building server-rendered React applications. It is a wrapper around React that provides a lot

<img src="https://i.ibb.co/D7hm0T0/Screen-Shot-2023-04-12-at-16-11-58.png" />


# How NextJS works?

- Build time: NextJS compiles your code and generates static HTML files for each page. This is done at build time.
- Run time: When a user requests a page, NextJS serves the pre-rendered HTML file. This is done at run time.


Build time: Compiling -> Minifying -> Bundling -> Splitting -> Pre-rendering -> Caching


## Compiling
<img src="https://nextjs.org/static/images/learn/foundations/compiling.png" />

- Compiling refers to the process of taking code in one language and outputting it in another language or another version of that language.

**Quick Review**: Why does your web application code need to be compiled?

**A**. Code needs to be transformed into a version browsers can understand 

**B**. Code needs to be translated into English

**C**. CSS, HTML, and JavaScript code needs to be merged into a single file

## Minifying
<img src="https://nextjs.org/static/images/learn/foundations/minifying.png" />

Minification is the process of removing unnecessary code formatting and comments without changing the code’s functionality. 

**Quick Review**: Minifying removes syntax highlighting from your code.

**A**. True - Syntax highlighting is only needed in development

**B**. False - Syntax highlighting is provided by your code editor 


## Bundling
<img src="https://nextjs.org/static/images/learn/foundations/bundling.png" />

Bundling is the process of resolving the web of dependencies and merging (or ‘packaging’) the files (or modules) into optimized bundles for the browser, with the goal of reducing the number of requests for files when a user visits a web page.

**Quick Review**: What is the difference between compiling and bundling in web development?


**A**. Compiling is gathering your dependencies from outside resources. Bundling is merging your dependencies into a single optimized file.

**B**. Compiling is transforming code into something parsable by browsers. Bundling is resolving your applications dependency graph and reducing the number of files. 

## Splitting
<img src="https://nextjs.org/static/images/learn/foundations/code-splitting.png" />

Code-splitting is the process of splitting the application’s bundle into smaller chunks required by each entry point. The goal is to improve the application's initial load time by only loading the code required to run that page.

Next.js has built-in support for code splitting. Each file inside your pages/ directory will be automatically code split into its own JavaScript bundle during the build step.

**Quick Review**: Which of the following is **not** a goal of code splitting?


**A**. Improve the application's initial load

**B**. Only load the required code for an entry point

**C**. Delete redundant code 

# Client-Side Rendering vs. Pre-Rendering

## Client-Side Rendering
<img src="https://nextjs.org/static/images/learn/foundations/client-side-rendering.png" />

In a standard React application, the browser receives an empty HTML shell from the server along with the JavaScript instructions to construct the UI. This is called client-side rendering because the initial rendering work happens on the user's device.

## Pre-Rendering
<img src="https://nextjs.org/static/images/learn/foundations/pre-rendering.png" />

Next.js pre-renders every page by default. Pre-rendering means the HTML is generated in advance, on a server, instead of having it all done by JavaScript on the user's device.

- Server-Side Rendering (SSR)
- Static Site Generation (SSG)
- Incremental Static Regeneration (ISR)


# Navigate Between Pages

## file system routing

## Link component