const chatBox =
    document.getElementById("chatBox");

const userInput =
    document.getElementById("userInput");

const sendBtn =
    document.getElementById("sendBtn");

const typing =
    document.getElementById("typing");


// Send message

function sendMessage() {

    const message =
        userInput.value.trim();


    if (message === "") {
        return;
    }


    // Add user message

    addMessage(
        message,
        "user"
    );


    // Clear input

    userInput.value = "";


    // Show typing

    typing.style.display = "block";


    // Generate response

    setTimeout(() => {

        const response =
            getBotResponse(message);


        typing.style.display = "none";


        addMessage(
            response,
            "bot"
        );

    }, 700);

}


// Add message to chat

function addMessage(text, sender) {

    const messageDiv =
        document.createElement("div");

    messageDiv.className =
        `message ${sender}-message`;


    if (sender === "bot") {

        messageDiv.innerHTML = `
            <div class="avatar">
                🤖
            </div>

            <div class="bubble">

                <strong>ChatBot</strong>

                <p>${text}</p>

            </div>
        `;

    } else {

        messageDiv.innerHTML = `
            <div class="bubble">

                <strong>You</strong>

                <p>${text}</p>

            </div>
        `;

    }


    chatBox.appendChild(messageDiv);


    // Scroll to bottom

    chatBox.scrollTop =
        chatBox.scrollHeight;
}


// Generate chatbot response

function getBotResponse(message) {

    const text =
        message.toLowerCase().trim();


    // Greetings

    if (
        text.includes("hello") ||
        text.includes("hi") ||
        text.includes("hey")
    ) {

        return "Hello! 👋 How can I help you today?";

    }


    // Name

    if (
        text.includes("your name") ||
        text.includes("who are you")
    ) {

        return "I am an NLP-based Text Analysis Chatbot 🤖.";

    }


    // NLP

    if (
        text.includes("what is nlp") ||
        text.includes("nlp")
    ) {

        return "NLP stands for Natural Language Processing. It enables computers to understand and process human language.";

    }


    // Text analysis

    if (
        text.includes("text analysis")
    ) {

        return "Text analysis is the process of extracting useful information, patterns, and meaning from written text.";

    }


    // Chatbot

    if (
        text.includes("chatbot")
    ) {

        return "A chatbot is a software application that communicates with users using text or speech.";

    }


    // ASR

    if (
        text.includes("asr") ||
        text.includes("speech recognition")
    ) {

        return "ASR stands for Automatic Speech Recognition. It converts human speech into text.";

    }


    // TTS

    if (
        text.includes("tts") ||
        text.includes("text to speech")
    ) {

        return "TTS stands for Text-to-Speech. It converts written text into spoken audio.";

    }


    // Thanks

    if (
        text.includes("thank you") ||
        text.includes("thanks")
    ) {

        return "You're welcome! 😊";

    }


    // Bye

    if (
        text.includes("bye") ||
        text.includes("goodbye")
    ) {

        return "Goodbye! 👋 Have a great day!";

    }


    // Help

    if (
        text.includes("help")
    ) {

        return `
            You can ask me about:
            NLP, ASR, TTS, Text Analysis,
            Chatbots, or Speech Processing.
        `;

    }


    // Word analysis

    if (
        text.includes("count words")
    ) {

        return "I can analyze your text by counting words, characters, and sentences.";

    }


    // Default response

    return "I'm still learning. Try asking me about NLP, ASR, TTS, Text Analysis, or Chatbots. 🤖";

}


// Send button

sendBtn.addEventListener(
    "click",
    sendMessage
);


// Enter key

userInput.addEventListener(
    "keydown",
    (event) => {

        if (event.key === "Enter") {

            sendMessage();

        }

    }
);