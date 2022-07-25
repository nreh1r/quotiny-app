# Quoting App


This app was developed with small businesses in mind to help decrease the administration workload required to manually speak to each client to generate quotes. The current demo version is currently set up for a cleaning company, but it can be easily modularized so that the information can be changed for any type of business.

The app was built using Next.js. This was done to utilize the static page generation and api route building functionalities in Next.js. The static page generation aids in search engine optimization, which is vital for small businesses, and the api route building make it significantly easier to communicate with the MongoDB backend. Two separate MongoDB databases are used in this app. The first database takes the user's name and contact information so that a client list can be built. The second database then stores the user's full quote information. These two are kept separate so that after a quote is processed and deleted the client information is not lost.

## Technologies/Languages Used
- Next.js
- JavaScript
- SCSS
- Node.js
- MongoDB




-----------------------------------------------------------------------------------------------------------------------
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
#� �q�u�o�t�i�n�y�-�a�p�p�
�
�
