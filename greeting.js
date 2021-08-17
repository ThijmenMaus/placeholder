var availableGreetings = [
    "Hi there",
    "Howdy",
    "Greetings",
    "Hey, What's up?",
    "What's going on?",
    "Hey!",
    "How's everything?",
    "How are things?",
    "Good to see you",
    "Great to see you",
    "Nice to see you",
    "What's happening?",
    "How's it going?",
    "Good evening!",
    "How are you?",
    "Nice to meet you!",
    "Long time no see!",
    "What's the good word?",
    "What's new?",
    "Look who it is!",
    "How have you been?",
    "Nice to see you again.",
    "Greetings and salutations!",
    "How are you doing today?",
    "What have you been up to?",
    "How are you feeling today?",
    "Look what the cat dragged in!",
];

var greetingElement = document.getElementById("greeting");

var currentGreeting = availableGreetings[Math.floor(Math.random() * availableGreetings.length)];

greetingElement.innerText = currentGreeting;
