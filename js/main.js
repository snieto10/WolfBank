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
//       () => simple(" --> Revisar miniatura"),
//       10000
//     ),
//   () => pesada("Grabar video"),
//   () =>
//     tareaPablo("[Pablo] Editar video", () => simple(" --> Publicar video"), 10),
// ];

// for (const tarea of tareas) tarea();

/*  OTHER EXERCISE*/

// const userLeft = false;
// const userWatchingCatMeme = false;

// function watchTutorialCallback(callback, errorCallback) {
//   if (userLeft) {
//     errorCallback({
//       name: "UserLeft",
//       message: ":(",
//     });
//   } else if (userWatchingCatMeme) {
//     errorCallback({
//       name: "User watching Cat Meme",
//       message: "WebDev < Car",
//     });
//   } else {
//     callback("Thumbs up and Subscribe");
//   }
// }

// watchTutorialCallback(
//   (message) => {
//     console.log(message);
//   },
//   (error) => {
//     console.log(error.name + " " + error.message);
//   }
// );

/*  OTHER EXERCISE*/

// const error = (msg) => console.log(msg);

// const tarea = (tarea, siguiente, error) => {
//   console.log(tarea);
//   if (Math.random() < 0.1) error();
//   setTimeout(siguiente, 500);
// };

// const pensarIdea = () =>
//   tarea("pensar idea", guionizar, () => "Error al pensar idea");

// const guionizar = () =>
//   tarea("guionizar", grabar, () => error("Error al guionizar"));

// const grabar = () => tarea("grabar", editar, () => error("Error al grabar"));

// const editar = () => tarea("Editar", publicar, () => error("Error al editar"));

// const publicar = () =>
//   tarea(
//     "Publicar",
//     () => console.log("Publicado"),
//     () => error("Error al publicar")
//   );

// pensarIdea();

const toNumber = (n) => Number(n);
const multiply = (n) => n * 2;
const print = (n) => console.log(n);

const thenFn = (n) => {
  let number = toNumber(n);
  number = multiply(number);
  print(number);
};

const thenAlt = (n) => console.log(n);

const catchAndPrint = (err) => console.log(err);

const request = (url, then, catchFn) => {
  const req = new XMLHttpRequest();
  req.open("GET", url);

  req.onload = () => {
    if (req.status === 200) {
      then(req.responseText);
    } else {
      catchFn(new Error("Error al cargar"));
    }
  };

  req.onerror = () => {
    catchFn(new Error("Error de red"));
  };

  req.send();
};

request("./numero.txt", thenAlt, catchAndPrint);

/*OTHER EXERCISE*/

let playTennis = false;
let playSports = false;

function sportLife(fn1, fn2) {
  if (playTennis) {
    fn1("Perfect, tennis is the best sport");
  } else if (playSports) {
    fn1("She can play tennis, soccer or basketball");
  } else {
    fn2("Great, she can be a full time student");
  }
}

sportLife(
  (s) => {
    console.log(s);
  },
  (error) => {
    console.log(error);
  }
);
