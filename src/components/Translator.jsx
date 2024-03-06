export const Translator = () => {
  const translate = async () => {
    // // const url = `${process.env.REACT_APP_Base_URL}p${REACT_APP_Query_Params}`;
    // const url = "https://google-translation-unlimited.p.rapidapi.com";
    // const options = {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/x-www-form-urlencoded",
    //     "X-RapidAPI-Key": "3bbc89b7a6msh0932b1b57f68e62p179fc3jsn6c07436e2828",
    //     "X-RapidAPI-Host": "google-translation-unlimited.p.rapidapi.com",
    //   },
    //   body: new URLSearchParams({
    //     texte:
    //       "Hello darling , what are you doing now ? I'm happy to speak with you my love",
    //     to_lang: "de",
    //   }),
    // };
    // try {
    //   const response = await fetch(url, options);
    //   const result = await response.json();
    //   const newResult = result.translation_data.translation;
    //   console.log(result);
    // } catch (error) {
    //   console.error(error);
    // }

    // const url =
    //   "https://microsoft-translator-text.p.rapidapi.com/translate?to%5B0%5D=de&api-version=3.0&profanityAction=NoAction&textType=plain";
    // const options = {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //     "X-RapidAPI-Key": "3bbc89b7a6msh0932b1b57f68e62p179fc3jsn6c07436e2828",
    //     "X-RapidAPI-Host": "microsoft-translator-text.p.rapidapi.com",
    //   },
    //   body: [
    //     {
    //       Text: "I would really like to drive your car around the block a few times.",
    //     },
    //   ],
    // };

    // try {
    //   const response = await fetch(url, options);
    //   const result = await response.text();
    //   console.log(result);
    // } catch (error) {
    //   console.error(error);
    // }
    // console.log();
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
      console.log(result);
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
