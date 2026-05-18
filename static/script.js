async function translateText() {

    const text =
        document.getElementById("inputText").value;

    const source =
        document.getElementById("sourceLang").value;

    const target =
        document.getElementById("targetLang").value;

    const response = await fetch('/translate', {

        method: 'POST',

        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify({
            text: text,
            source: source,
            target: target
        })
    });

    const data = await response.json();

    document.getElementById("outputText").innerText =
        data.translated_text;
}

function copyText() {

    const text =
        document.getElementById("outputText").innerText;

    navigator.clipboard.writeText(text);

    alert("Copied!");
}
function speakText() {

    const text =
        document.getElementById("outputText").innerText;

    const targetLang =
        document.getElementById("targetLang").value;

    const speech = new SpeechSynthesisUtterance(text);

    if(targetLang === "te") {
        speech.lang = "te-IN";
    }
    else if(targetLang === "hi") {
        speech.lang = "hi-IN";
    }
    else if(targetLang === "fr") {
        speech.lang = "fr-FR";
    }
    else {
        speech.lang = "en-US";
    }

    window.speechSynthesis.speak(speech);
}