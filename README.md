# Elder Scrolls Legends Card API


I thought this coding exercise would be an excellent opportunity to learn the Vue.js Framework. I used the first part of this tutorial and some of the starter files to set up my app: 
     [Build Your First Vue.js App](https://vuejsdevelopers.teachable.com/p/build-your-first-vue-js-app)

I created a basic Node server in server.js and also created a proxy so I would be able to access the API.

Since I'm not technically a front end engineer, it's probably not the most beautiful app, but it was very fun to use this opportunity to learn a new framework and put myself out of my comfort zone!

TODO:

I would have love to add a "scroll to top" button, as it feels like you can really get lost in the infinite scroll of the cards. 

I also would like to have the search bar be a little more dynamic, so that when the query is cleared the screen automatically repopulates with the first batch of cards. 


Thank you to Highspot for giving me the opportunity to learn something new and develop my skills even more, and thank you for taking the time to go over my code!

#### Pre-installation

Ensure [Node.js  >=10](https://nodejs.org/en/download/), [NPM](https://docs.npmjs.com) and [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) are installed on your system
 
#### Installation

1. Install this code on your local system
     
    1. Fork this repository (click 'Fork' button in top right corner) 
    2. Clone the forked repository on your local file system
    
        ```
        cd /path/to/install/location
        
        git clone https://github.com/[your_username]/hspot_exercise.git
        ```

2. Change directory into the local clone of the repository

    ```
    cd hspot_exercise
    ```

3. Install dependencies

    ```
    npm install
    ```
    
4. Start project

    ```
    npm run serve
    ```

5. Your site will be available at *localhost:3000*.

## Troubleshooting

Here are some common mistakes people make, check these before filing an issue:

- `EADDRINUSE :::3000`. You already have another application using port 3000. Either end it, or change manually set the `PORT` environment variable to resolve the conflict e.g. `3001`
- Ensure you have a version of Node >= 10

```
node -v
```
