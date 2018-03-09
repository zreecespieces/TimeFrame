![timeframe logo](https://i.imgur.com/dU2lgU0.png)
<h2>Timeframe</h2>
https://zreecespieces.github.io/Timeframe/
Build the project using <code>npm start</code> and visit <code>localhost:8080</code> in the browser.
You also will need to enable CORS in your local browser for the API requests to go through.
<h4>Description</h4>
Timeframe has a bit of history behind it. It starts with this Reddit post: https://www.reddit.com/r/theydidthemath/comments/5g1qzg/request_how_long_would_this_movie_actually_be/dap1h76/

After that post went viral, many people started submitting questions with the same premise, but different movies. So many people in fact, that the subreddit had to ban those type of questions. That's when I realized that someone could just make a calculator for that, and so over the course of the last year, with a lot of hard work, trial-and-error, and persistence, that's what I've done.

This web application utilizes the Open Movie Database API to grab the lengths of movies, and the Internet Movie Script database to find how many times a certain word is said in that movie, and then crunches the numbers.
<h4>Known Issues:</h4>
Because of the async nature of this app, I had a hard time controlling when the responses were received, so I couldn't ensure the data will be in the same order every time, resulting in different answers.

If at first after you press submit nothing happens, go to http://www.imsdb.com/ and see if they have all the movies you're trying to search, as it is the smaller of the two databases and so will be the limiting factor.

If visiting the project hosted on GitHub pages, the result will never do anything because GitHub blocks CORS. The same problem occurs with local testing if you don't have the CORS Chrome extension.

Titles with spaces in them need to be substituted with hyphens.
