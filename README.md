# Storm Ideas Test

The App can be viewed here: https://si-project.vercel.app/

- To run the project locally, just clone from github, npm install and yarn dev to run
- An api key from newsapi.org will be needed (and added as the value in .env.local) to run the app locally

To complete this app I have used:

- Next.js
- JavaScript (I was planning to use TypeScript but I ran out of time)
- Styled Components
- Flexbox for responsiveness

Anderson Post News App

- The front page shows headlines and breaking news
- Clicking on any link in the second navbar (showing the categories 'Business', Entertainment etc will take you to the page with all the news for that category)
- When you are on a category page, that page will be highlighted in red and underlined in the category navBar
- When on front page or going to a category page 10 items will be revealed initially then a button will reveal 10 more
- Re-Sizing the app will display in 'compact' mode (I have only use 1 breakpoint (650px) in order to demonstrate responsiveness/complete this in the available time)
- The category navBar is scrollable in mobile view
- I have applied Google fonts as per the figma for nicer text
- I have used ellipsis where the text is too long to help with a tidier layout
- I have created a reusable layout component containing the navbar elements which I can wrap round any 'page' where I need to include the nav bar (see it available in both the front page and category pages)

- I have deployed the app on Vercel (as per the above link)
- I have used getServersideProps to call https://newsapi.org/ as otherwise the app will only work in developer mode (i.e. the api calls won't work on deploy, they will only work on the local machine). By calling the api's from the server the calls will work on deploy.

Things I will aim to do if I get time

- Fix layout on the top nav bars and make them responsive (this is done in mobile view just need to finish desktop view)
- Alternate cards down the column (nth child(odd/even) while mapping?)
- Redirect to 404 if no category match (have tried to fix this but kept getting error messages and didn't have time to dig further)
- Loading spinner
- Add a placeholder for when there is no image available (have tried to fix this but kept getting error messages and didn't have time to dig further)
- Integrate category (red text) into the cards)
- Add nav items to Hamburger shown in mobile
- Convert to TypeScript
- I saw re exporting the 'Anderson Post' image but I couldn't figure out how to export the red line and the text together then get them aligning properly with each other
- I did export/use the magnifying glass image and use it in the test as an SVG though
