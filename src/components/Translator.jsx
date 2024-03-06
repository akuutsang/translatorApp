export const Translator = () => {
  const translate = async () => {
    const url = `${import.meta.env.REACT_APP_BASE_URL}`;

    const options = {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "X-RapidAPI-Key": `${import.meta.env.REACT_APP_RAPIDAPI_KEY}`,
        "X-RapidAPI-Host": "text-translator2.p.rapidapi.com",
      },
      body: new URLSearchParams({
        source_language: "en",
        target_language: "de",
        text: "What is your name?",
      }),
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      const newResult = result.data.translatedText;
      console.log(newResult);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="translator">
      <div className="row-wrapper">
        <div className="translator-container input-lang">
          <div className="top-row">
            <button
              className="button.btn.btn-primary.btn-translate"
              onClick={translate}
            >
              Translate
            </button>
          </div>
          <form className="input-form"></form>
          <textarea
            className="text-box"
            placeholder="Enter Text"
            cols="30"
            rows="20"
          ></textarea>
        </div>
        <div className="translator-container output-lang">
          <div className="top-row">
            <select className="languages" id="form-select form-select-sm">
              <option value="ar">Arabic</option>
              <option value="en">English</option>
              <option value="fr">French</option>
              <option value="de">German</option>
              <option value="es">Spanish</option>
              <option value="md">Mandarin</option>
            </select>
            <p className="text-box-output-box">Output text</p>
          </div>
        </div>
      </div>
    </section>
  );
};
