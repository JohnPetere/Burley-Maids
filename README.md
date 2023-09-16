# Burley Maids
 A website for a start up cleaning business. A friend wanted to start up a cleaning business so I used this as a sort of test of myself to build a website
 
 ## Technology used
  - <strike>Firebase for web hosting</strike>
  - Netlify for website hosting. Firebase was not working with firebase, after mutliple project rebuilds and deploy attempts
  - React.js
  - Tailwind.css
  - ChatGPT: Used for filler text rather then using boring OL lorem ipsum
  - Next.js for static serverside rendering and SEO
  - Find something to host form shit
  - Figma for the design

## Bugs/difficulties 

### PRoblem
> I spent 3 hours somehow trying to figure out how to load fonts on the website. Or 4. I don't remember
### Solution
> I followed the link bellow called :How to add fonts when are using both tailwind and next.js
### Problem
> Every time the useEffect goes to another page, the nav buttons for the carasoul will run goToSlide(3x), rather then the click activiating it. I think when it rendars in popNavButtons, it will do that. Might try changeing it to button, and make it only load once, maybe I'll try making it a component in another file. Not sure why it's doing this. It makes it hard to make the buttons go to the correct slide when pressed. 

### Solution
>Turns out, when I typed out exactly like 'onClick=goToSLide(i)' that would be calling it, I need to type it out like such 'onClick= {()=> goToSlide(i)}, this makes it more like a reference according to javaScript
### Problem
>I made a mess of styling, it was a lot of spaghetti interlocked nonsense with tailwind. I think I had way to many conflicting styles with the image. The image for the gallery kept spilling over.
 - [Learn More here](https://stackoverflow.com/questions/33846682/react-onclick-function-fires-on-render)
### Solution
> I revamped the styling completly, and used a background url image, as it was cleaner. 


### Problem
> I was initially trying to deploy the website onto firebase, however, there were incompabilities with package dependencies. I have tried adding, deleting packages, in combinations to no avail. I tried reviewing the code formatting, as I kept getting errors.

### Solution
> I decided to use netlify to deploy it. Inititally, I had a lot of trouble. My solution involved multiple attempts at deploying, inlcuding upgrading my payment plan on firebase to "blaze". However, the main reason for it not working was, i forgot to remove the firebase depdency, as the firebase is still in the testing stages of hosting next.js applications on firebase. I removed firebase, deleted node_modules, peformed npm install, and reinstalled firebase. I was able to run it locally, as well deploy on


### Description
> I had trouble with putting tailwind styling inside a css file, as to make more readable, however netlify kept giving me trouble. Every time I link to the styles.css with the navbar, I keep getting weird errors when I deploy on netlify, either sayiing:
 ```
 // I kept getting this error: 
 Module build failed: Error: Final loader (./node_modules/next/dist/build/webpack/loaders/error-loader.js) didn't return a Buffer or String
 ```

 >Or sometihng about global css such as: 

 ```
 Global CSS cannot be imported from files other than your Custom <App>. Due to the Global nature of stylesheets, and to avoid conflicts, Please move all first-party global CSS imports to pages/_app.js. Or convert the import to Component-Level CSS (CSS Modules).
 ```
### Solution
> This took way too long, mostly because I was lazing around the house, and sleeping. But it came to me randomly to try use a JSON approach!  Netlify likes it!, I tried the  naming schemescheme of "moduleName.module.css" for css files in components, however netlify still gave me the error. hence the now I'll use "moduleName.module.js". I probably should change it later

 ## TODO General
 - <strike> Convert into next.js app for SEO </strike>
 - Change meta tags
 - Change Favicon
 - make 80% a custom class for all pages, when it gets to size md, it gets to 100
 - <strike>  NavBar</strike>
    -<strike>  Mobile menu layout and colors</strike>
 - footbar
 - finish home page
    - <strike> Carasoul</strike>
    - We Clean you cllean
    - Services thing
    - Before and Afer

 - Remove About Page from design 
 - testimonies page
 - Contact Page
 - Create tailwind.css template componenent for react and next.jss

 - design home page gallery
 - Add defualt 404 page

### Index Page
- <strike> FIX THE FONT LOADING PROBLEM LATER </strike>
 - Home page
   - Carasoul
      - <strike> Complete original styling for carasoul </strike>
      - code out functions such as<strike>  nextSlide </strike>,  <strike> prevSlilde </strike>, and goToSlide(slideNum)
      
      - <strike>add navigation button things to the bottom.
         - the button navigations has values, then it sends to (goToSlide) </strike>
      - <strike>Change images </strike>
      - Make it transition with flashes
      - Source images locally, not on imgur
         - problem: Having trouble referencing images and setting up url, gave up, it's now sourced on imgur 
- 
   

### Testomonials page
 - something
### Contact us page
 - someting
### Services Page
 - something

## Completed TODO
 - Something

### Index Page
 - Home page

### Testomonials page
 - something
### Contact us page
 - someting
### Services Page
 - something

 ## References
 - [Deploy React into firebase](https://www.example.com)
 - [gitignore](https://www.toptal.com/developers/gitignore)
 - [Blank Firebase hosting Error fix](https://stackoverflow.com/questions/52177222/blank-page-after-successful-firebase-deployment)
 - [Install Tailwind.css into react ](https://tailwindcss.com/docs/guides/create-react-app)
 - [Next.js Basics](https://www.youtube.com/watch?v=__mSgDEOyv8)
 - [Install packages after deleting node_modules folder](https://stackoverflow.com/questions/45476870/accidentally-deleted-node-modules-folder)
 - [npm-dedupe command documentation](https://docs.npmjs.com/cli/v6/commands/npm-dedupe)
 - [Removed ESLINt to get rid of package plugin conflict with eslint](https://stackoverflow.com/questions/70449712/create-react-app-error-in-plugin-react-was-conflicted-between-eslintrc-jso)
 - [Install Tailwind.css and Next.js](https://tailwindcss.com/docs/guides/nextjs)
 - [Converting to react to next.js](https://stefaniq.com/migrating-your-react-app-to-next-js-a-comprehensive-guide/)
 - [Adding Talwind css on next.js documentaiton](https://nextjs.org/docs/app/building-your-application/styling/tailwind-css)
 - [Component tailwind.css with next.js fix](https://www.geeksforgeeks.org/how-to-use-tailwind-apply-in-css-modules-in-next-js/)
 - [next.js get data from a file path](https://nextjs.org/docs/pages/building-your-application/data-fetching/get-static-paths)
 - [How to add fonts when are using both tailwind and next.js](https://dev.to/manuelalferez/custom-fonts-in-nextjs-tailwindcss-2iip)
 - **[The colors I used, from coolers.co](https://coolors.co/6d2a33-5a7d7c-dadff7-a0c1d1-b5b2c2)**
 - [how to connect images in next/js, place in public, NEXT.js automatically references it when you start a path with '/'](https://stackoverflow.com/questions/71617582/i-am-getting-the-error-the-requested-resource-isnt-a-valid-image-for-public-l)

### Useful commands
 - local firebase server emulator
 ' firebase emulators:start '
 -  Deploys changes to firebase server
' firebase deploy '

