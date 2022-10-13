// const simple = (tarea) => console.log(tarea);

// const pesada = (tarea) => {
//   console.log(`Empezando tarea ${tarea}...`);
//   for (let i = 0; i < 1000000000; i++) {
//     Math.random() - Math.random();
//   }
//   console.log(`Tarea ${tarea} terminada`);
// };

// const tareaPablo = (tarea, callback, tiempo) => {
//   console.log(tarea);
//   setTimeout(callback, tiempo);
// };

// const tareas = [
//   () => simple("Escribir guion"),
//   () =>
//     tareaPablo(
//       "[Pablo] hace miniatura",
//       () => pesada(" --> Revisar miniatura"),
//       2000
//     ),
//   () => pesada("Grabar video"),
//   () =>
//     tareaPablo("[Pablo] Editar video", () => simple(" --> Revisar video"), 5000),
// ];

// for (const tarea of tareas) tarea();

const userLeft = false;
const userWatchingCatMeme = false;

console.log("sergio1");

function watchTutorialCallback(callback, errorCallback) {
  if (userLeft) {
    errorCallback({
      name: "UserLeft",
      message: ":(",
    });
  } else if (userWatchingCatMeme) {
    errorCallback({
      name: "User watching Cat Meme",
      message: "WebDev < Car",
    });
  } else {
    callback(() => {
      console.log("great");
    });
  }
}
console.log("sergio2");

watchTutorialCallback(
  (message) => {
    console.log(message);
  },
  (error) => {
    console.log(error.name + " " + error.message);
  }
);

console.log("sergio3");
