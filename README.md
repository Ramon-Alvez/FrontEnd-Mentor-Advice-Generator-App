# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents 📖

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview 🔭

### The challenge 🏆

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot 🎴

![Preview](./src/readme/preview.gif)

### Links 🔗

- Solution URL: [FrontEnd Mentor](https://github.com/Ramon-Alvez/FrontEnd-Mentor-Advice-Generator-App)
- Live Site URL: [Site](https://ramon-alvez.github.io/FrontEnd-Mentor-Advice-Generator-App/)

## My process 💻✒

### Built with 🧱🛠

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- JS
- [Advice Slip API](https://api.adviceslip.com/)

### What I learned 📚

I learned how to work with an API and improved my knowledge about JS.

  Its simplier but I'm really proud of this func because before I didn't understand how to use highOrder Functions, but now I got the idea. 

```js
async function printAdvice() {
  const searchedAdvice = await searchAdvice()
    const adviceID = searchedAdvice.slip.id
    const advice = searchedAdvice.slip.advice

    adviceNumber.innerText = `Advice #${adviceID}`
    adviceSection.innerText = `"${advice}"`
}
```

And, this is an exercise of a course I'm taking, after i saw the solution i read that i forgot to treat the possible errors that could in the code. 

Here is their solution:
```js
const adviceUpdateButton = document.querySelector(".advice-update");
const adviceNumber = document.querySelector(".advice-id");
const adviceDescription = document.querySelector(".advice-description");

async function getAdvice() {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");

    /* 
      A propriedade .ok é responsável por verificar se a resposta (Response) foi feita com sucesso ou não, 
  
      nesse caso estamos negando a resposta, ou seja, se a resposta não foi feita com sucesso, retornamos um erro.
    
      Ela está presente no objeto Response, que é retornado pela função fetch. 
    */

    if (!response.ok){
      throw new Error("Ocorreu um erro ao tentar buscar as informações da API");
    }

    const adviceContent = await response.json();
    const adviceId = `Advice #${adviceContent.slip.id}`;
    const adviceText = `"${adviceContent.slip.advice}"`;

    adviceNumber.innerText = adviceId;
    adviceDescription.innerText = adviceText;

  } catch (error) {
    console.error("Erro ao tentar buscar as informações da API", error);
  }
  
}

adviceUpdateButton.addEventListener("click", getAdvice);

getAdvice();
```

### Continued development 🚀

I just finished my JS advanced course but there are still other topics missing regarding js, such as jest, react, redux, etc... 

When I finish this, I will came here to do the other challenges.

### Useful resources 🎒

- DevQuest class about fetch requisition

## Author 🧙‍♂️

- GitHub - [Ramon Alvez](https://github.com/Ramon-Alvez/Frontend-Mentor-HTML-CSS-Intermediate-ChatApp-CSS-illustration)
- Frontend Mentor - [@Ramon Alvez](https://www.frontendmentor.io/solutions/-html5-e-css-22-1-intermediate-chat-app-illustration-qRIT2_JeKy)
- LinkedIn - [@Ramon Alvez](https://www.linkedin.com/in/ramon-alvez/)
