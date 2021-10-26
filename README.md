# Storm Ideas Test

The App can be viewed here: https://si-project.vercel.app/

To complete thsi app I have used:

- Next.js
- JavaScript (I was planning to use TypeScript but I ran out of time)
- Styled Components
- Flexbox for responsiveness

Anderson Post News App

- The front page shows headlines and breaking news
- Clicking on any link in the second navbar (showing the categories 'Business', Entertainment etc will take you to the page with all the news for that category)
- Re-Sizing the app will display in 'compact' mode (I have only use 1 breakpoint (650px) in order to demonstrate responsiveness/complete this in the available time)
- I have applied Google fonts as per the figma for nicer text
- I have created a reusable layout component containing the navbar elements which I can wrap round any 'page' where I need to include the nav bar (see it available in both the front page and category pages)

- I have deployed the app on Vercel (as per the above link)
- I have used getServersideProps to call https://newsapi.org/ as otherwise the app will only work in developer mode (i.e. the api calls won't work on deploy, they will only work on the local machine). By calling the api's from the server the calls will work on deploy.
- I have used ellipsis where the text is too long to help with a tidier layout

Things I will aim to do If i get time

- Fix layout on the nav bars and make them responsive
- Alternate cards down the column (nth child(odd/even) while mapping?)
- Pagination
- when on category page highlight which page in nav bar
- Redirect to 404 if no category match
- Loading spinner
- Add a placeholder for when there is no image available
- Integrate category (red text) into the cards)
- convert to TypeScript
- I saw re exporting the 'Anderson Post' image but I couldn't figure out how to export the red line and the text together then get them aligning properly with each other
- I didn export/use the magnifying glass image though
