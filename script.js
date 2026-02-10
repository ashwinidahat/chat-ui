function sendMessage(){  
    let input=document.getElementById("userInput"); 
    let text=input.value.trim();
    if(text === "")return; 
    addMessage(text,"user");
     input.value = ""; 
       generateBotReply();
} 
//Add messsage to chat area 
function addMessage(text, type) {
    let messages = document.getElementById("messages");

    let msg = document.createElement("div");
    msg.classList.add("message", type);
    msg.innerText = text;

    messages.appendChild(msg);
    messages.scrollTop = messages.scrollHeight;
} 
// generate bot reply
function generateBotReply() {
    let reply = "Typing...";

    let botMsg = document.createElement("div");
    botMsg.classList.add("message", "bot");
    botMsg.innerText = reply;

    let messages = document.getElementById("messages");
    messages.appendChild(botMsg);

    setTimeout(() => {
    botMsg.innerHTML = "I wish I knew that! 😅<br>" +
                           "Give ChatGPT a try: <a href='https://chat.openai.com' target='_blank'>https://chat.openai.com</a>";
        messages.scrollTop = messages.scrollHeight;
    }, 500);
} 
//send message on enter key press
document.getElementById("userInput").addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        sendMessage();
    }
});
