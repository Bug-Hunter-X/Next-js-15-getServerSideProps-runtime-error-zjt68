# Next.js 15 getServerSideProps runtime error

This repository demonstrates a runtime error in a Next.js 15 application when using `getServerSideProps` to fetch data and render it on a page. The issue arises when the component tries to render before the data is fully fetched.

## Steps to Reproduce

1. Clone the repository.
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Navigate to `/about`.

You'll observe a runtime error because `data` is accessed before it's available from `getServerSideProps`.

## Solution

The solution involves conditional rendering or a loading indicator to prevent rendering until data is fetched.  The solution file provides this fix.

## Technologies Used

- Next.js 15
- React
- JavaScript