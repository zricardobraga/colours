import { useState } from "react";
import { Colour } from "./components/Colour/Index.jsx";

import styles from "./app.module.css";

function App() {
  const [colourList, setColourList] = useState([]);
  const [colourName, setColourName] = useState("");
  const [colourCode, setColourCode] = useState("");
  

  const handleColourSubmit = (event) => {
    event.preventDefault();
    const newColour = { name: colourName, code: colourCode, isDeleted: false };
    setColourList((oldColourList) => [...oldColourList, newColour]);
    console.log(newColour);
  };

  const toggleColourDeletedStatus = (colourToBeToggled) => {
    const listWithToggledStatus = colourList.map((colour) => {
      if (colourToBeToggled === colour) {
        colour.isDeleted = !colour.isDeleted;
      }
      return colour;
    });
    setColourList(listWithToggledStatus);
  };

  return (
    <>
      <main className={styles.main}>
        <h1>ADCIONAR NOVA COR</h1>
        <div className={styles.content}>
          <form className={styles.formContainer} onSubmit={handleColourSubmit}>
            <input
              type="text"
              name="colourName"
              id="colourName"
              placeholder="Type the colour name"
              onChange={(event) => setColourName(event.target.value)}
              value={colourName}
            />

            <input
              type="text"
              name="colouCode"
              id="colourCode"
              placeholder="Type the colour code"
              onChange={(event) => setColourCode(event.target.value)}
              value={colourCode}
            />
            <button
              className={styles.button}
              type="submit"
              disabled={colourName === "" && colourCode == 0}
            >
              ADICIONAR
            </button>
          </form>
        </div>

        <section className={styles.listSection}>
          <h1>CORES FAVORITAS</h1>
          <div className={styles.listContainer}></div>
          <ul>
            {colourList &&
              colourList.map((colour, index) => {
                return (
                  <>
                    <Colour
                      key={index}
                      colour={colour}
                      toggleColourDeletedStatus={() =>
                        toggleColourDeletedStatus(colour)
                      }
                    />
                  </>
                );
              })}
          </ul>
        </section>
      </main>
    </>
  );
}

export default App;
