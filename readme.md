# Lincoln's URL Shortifier

An quick n dirty express app that "shortens" URLs. Made by [Lincoln](http://jlincolndennis.com). For knowledge. And stuff.

Fork n clone, or whatever, then `npm install`.

Create a Postgres DB, then make a `.env` file with your Postgres database URL. Run `knex migrate:latest` and GO TO TOWN, PEEPZ.

Oh, and in `success.jade` don't forget to change the path in the `p` tag to your deployed URL. The `href` is relative and shouldn't need to be edited.

Check it out [here](https://lincolns-urlshortifier.herokuapp.com/)!
