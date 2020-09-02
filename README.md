# Frontend Mentor - Coding Bootcamp Testimonials Slider

![Design preview for the Coding Bootcamp Testimonials Slider coding challenge](./design/desktop-preview.jpg)

## What is this?
This is my response to a front-end coding challenge from [Frontend Mentor](https://www.frontendmentor.io). Frontend Mentor provides great development challenges alongside beautiful designs, enabling you to build your skills using realistic projects.

I plan to take on most, if not all, of the free challenges in order from easiest (_'Newbie'_) to hardest (_'Advanced'_).

## The challenge
__Challenge #3__<br>
__Difficulty: Newbie__

This challenge was to build out an article preview component and get it looking as close to the design as possible.

Users should be able to:
- View the optimal layout for the component depending on their device's screen size
- Navigate the slider using either their mouse/trackpad or keyboard

## My approach
I took a mobile-first approach, completing styling and layout for a 375px viewport width first. I then built out media queries to cater to larger widths.

I used __Sass__ to easily implement elements from the `style-guide.md` provided, and __jQuery__ to implement the controls for mouse and keyboard users.

I definitely struggled to decide on the right HTML structure to allow the background images to stay put, while animating in/out the text and photo content, particularly as I originally planned to have to content slide in/out.

If I had not planned on animating the content, I would have simply applied the background images to text/image divs and been done with it. In the end though, I chose to separate the background and content into separate divs and use shared classes to align them.

The end product is hosted on Vercel - https://coding-bootcamp-testimonials-slider-liard.vercel.app/


## Questions
I'm certain I could have structured the HTML and my js differently in order to get this one right..

Would love to hear any hot tips you might have! 🍻
