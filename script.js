async function translateText() {
    const textInput = document.getElementById('textInput').value;
    const languageSelect = document.getElementById('languageSelect');
    const language = languageSelect.options[languageSelect.selectedIndex].value;

    const options = {
        method: 'POST',
        url: 'https://translator82.p.rapidapi.com/api/translate',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': '9eae4b9b12msh6456b54b4a34685p1cbffajsna2bed76af12c',
            'X-RapidAPI-Host': 'translator82.p.rapidapi.com'
        },
        data: {
            language: language,
            text: textInput
        }
    };

    try {
        const response = await axios.request(options);
        document.getElementById('outputText').innerText = response.data.result;
    } catch (error) {
        console.error(error);
    }
}