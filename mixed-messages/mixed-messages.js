const phrase = {
    start: ['You will travel the world!', 'You will get a job and stay living at home.', 'You will marry and have ten kids.'],
    middle: ['You will have 16 kids.', 'You will have 8 kids.', 'You will have no kids and 3 dogs.', 'You will have a dog and cat.', 'You will have a cat.'],
    end: ['You will die at 88.', 'You will retire and live until 102.', 'You will live forever!']
}

function buildRandomMessage() {
    let start = phrase.start[Math.floor(Math.random() * phrase.start.length)];
    let middle = phrase.middle[Math.floor(Math.random() * phrase.middle.length)];
    let end = phrase.end[Math.floor(Math.random() * phrase.end.length)];
    console.log(start + '\n' + middle + '\n' + end);
}

buildRandomMessage();