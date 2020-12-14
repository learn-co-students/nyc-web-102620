# JS Mini Challenge: Event Handling

*This Lab Lovingly Stolen From [Ian Hollander](https://github.com/ihollander)*

## Instructions

Fork this repo, then run `git clone` to download your fork locally. Then `cd` into the downloaded directory and open it in your text editor with `code .`.

## Submitting

When you’re finished, run the following commands in your terminal to submit:

```
git add .
git commit -m 'Done'
git push
```

To get feedback on your code, make a [pull request from your forked repo](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork). If you worked with a partner, you can tag your partner on the pull request.

## Assignment

In this challenge, we're going to keep working on Raffy's Amazon trip page and give our users the ability to:

- Toggle the header color
- Add a new animal sighting
- 'Like' Raffy's profile 

We've got some starter code already written for us (this should look somewhat familiar from the previous challenge - feel free to use the code you wrote for the previous challenge instead). Your job is to add some additional functionality to make our app more dynamic by handling user interactions.

There's a section in this Readme file for your notes on each deliverable. As you go through the deliverables, write down some notes in this file on how you solved each problem. It'll help reinforce what you learned and give you a head start next time you see a similar problem.

## Deliverable 1: Toggle Header

**When a user clicks the header**, the color should toggle between black and red. 

To get you started, there's a helper function already written takes in an element and toggles its color that you can use. You can try it out in your console:

```js
toggleColor(document.querySelector("h1#header"))
```

Try calling it a few times to see the color switch back and forth. 

Once you have it working in the console, write an event listener that will use this helper function to change the color of the header when a user clicks on it.

**YOUR NOTES**
```

```

## Deliverable 2: Like Button

**When a user clicks the like button for Raffy's profile picture**, Raffy's likes should increase by 1. The likes won't persist (if you refresh the page, they'll reset to their original value) - we'll add persistence in a future challenge.

**YOUR NOTES**
```

```

## Deliverable 3: Add a New Animal Sighting Post

Our app is already displaying some great animal sightings (check out the starter code in `index.js` to see how the initial render is set up), but we want our users to have the ability to add additional animal sightings by entering information in the `form#new-animal-sighting-form`.

**When a user submits the form**, the new information about the animal sighting should be displayed in the animal list (you can use the `renderAnimalSightingPost` helper function from the starter code if you like - it takes in an object with: { id, species, photo, link, description }).

The data won't persist (when you refresh the page, the new animal sighting post won't show up) - we'll see how to fix this later on. For now, focus on getting the new post of an animal sighting on the page when the form is submitted!

You're encouraged to seek out a photo online and video video on YouTube, but if you'd like, here's an example photo and video you can use for testing purposes:

- Photo: pics/birds.jpg
- Link: https://youtu.be/VvMqSBcl2bE
- Description: So many kinds of birds! Here's a silhouette of one of my faves.

Some things to keep in mind:

- Make sure you're using the form *submit* event, not the *click* event.
- If you see the page refresh, consider adding some code to *prevent* the *default* behavior of a form submitting.
- You can use the `name` attribute of the input elements as an easy way to reference the input fields within the form. For example: `document.querySelector("#new-animal-sighting-form").link` will look inside the `form#new-animal-sighting-form` and return the `input` element with the `name='link'` attribute
- Once you have access to an input field, you still need to retrieve its *value* to see what the user entered in the form!

**YOUR NOTES**
```

```

