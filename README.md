# Frontend Mentor - Ping coming soon page solution

This is a solution to the [Ping coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ping-single-column-coming-soon-page-5cadd051fec04111f7b848da). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Submit their email address using an `input` field
- Receive an error message when the `form` is submitted if:
	- The `input` field is empty. The message for this error should say *"Whoops! It looks like you forgot to add your email"*
	- The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Please provide a valid email address"*

### Screenshot


![Desktop](https://raw.githubusercontent.com/GHWhite419/Ping-single-column-coding-challenge/main/screenshots/Desktop.png)
![Mobile](https://raw.githubusercontent.com/GHWhite419/Ping-single-column-coding-challenge/main/screenshots/Mobile.png)
![Tablet Landscape](https://raw.githubusercontent.com/GHWhite419/Ping-single-column-coding-challenge/main/screenshots/Tablet%20landscape.png)
![Tablet Portrait](https://raw.githubusercontent.com/GHWhite419/Ping-single-column-coding-challenge/main/screenshots/Tablet%20portrait.png)


### Links

- Solution URL: (https://www.frontendmentor.io/solutions/ping-single-column-coming-soon-page-6ufAWfWzGN)
- Live Site URL: (https://ghwhite419.github.io/Ping-single-column-coding-challenge/)

## My process

I started, as usual, with designing my HTML framework before styling it in CSS, focusing on the mobile viewport first. Once I was satisfied with how it looked on mobile, I moved on to the desktop viewport using media queries. And once that was finished, Im ade sure it looked right on a mobile landscape view, as well as on tablet view (both landscape and portrait). Finally, I finished up by adding the Javascript functionality and made sure it still looked correct on all viewports.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Javascript
- Fontawesome SVGs (https://fontawesome.com)


### What I learned

In this project I used SVG images and got some practice in working with them, coloring and styling them which I found to be a bit of a challenge. One thing I had some difficulty with was the images disappearing once I wrapped them in <div> containers. I'm having trouble remembering specifically what I did to solve this issue, though below are pieces of the code that show what I implemented:

```html
    <div class="share">
      <div class="icon facebook"><img src="images/facebook-f.svg" aria-hidden="true"></div>
      <div class="icon twitter"><img src="images/twitter.svg" aria-hidden="true"></div>
      <div class="icon instagram"><img src="images/instagram.svg" aria-hidden="true"></div>
    </div>
```
```css
.icon {
    border-radius: 100%;
    border: 1px solid lightgray;
    padding: .7rem;
}

.icon img {
    width: 1rem;
    height: 1rem;
    filter: invert(51%) sepia(44%) saturate(4649%) hue-rotate(206deg) brightness(96%) contrast(98%);
}

```

In this project I also dabbled a little more in writing comments on my CSS to distinguish which parts of my code serve which functions, making it all around easier to read.

### Continued development

I ended up taking an extended break from this project after getting frustrated by the issues with styling SVG images, so I look forward to more opportunities to practice with these images and overcome similar challenges.

## Author

- Frontend Mentor - [@JudasThePriest](https://www.frontendmentor.io/profile/JudasThePriest)
