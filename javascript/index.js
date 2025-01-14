// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code
/*
// Out of sync
  getInstruction("mashedPotatoes", 0, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 2, (step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 3, (step4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 4, (step5) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  }, (error) => console.log(error));
*/

// Iteration 1 - using callbacks
getInstruction("mashedPotatoes", 0, (step0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`;
  getInstruction("mashedPotatoes", 1, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
    getInstruction("mashedPotatoes", 2, (step2) => {
      document.querySelector(
        "#mashedPotatoes"
      ).innerHTML += `<li>${step2}</li>`;
      getInstruction("mashedPotatoes", 3, (step3) => {
        document.querySelector(
          "#mashedPotatoes"
        ).innerHTML += `<li>${step3}</li>`;
        getInstruction("mashedPotatoes", 4, (step4) => {
          document.querySelector(
            "#mashedPotatoes"
          ).innerHTML += `<li>${step4}</li>`;
          document.querySelector(
            "#mashedPotatoes"
          ).innerHTML += `<li>Mashed potatoes are ready!</li>`;
          document
            .querySelector("#mashedPotatoesImg")
            .removeAttribute("hidden");
        });
      });
    });
  });
});

// Iteration 2 - using promises
obtainInstruction("steak", 0)
  .then((step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
    return obtainInstruction("steak", 1);
  })
  .then((step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
    return obtainInstruction("steak", 2);
  })
  .then((step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
    return obtainInstruction("steak", 3);
  })
  .then((step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
    return obtainInstruction("steak", 4);
  })
  .then((step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
    return obtainInstruction("steak", 5);
  })
  .then((step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;
    return obtainInstruction("steak", 6);
  })
  .then((step7) => {
    document.querySelector("#steak").innerHTML += `<li>${step7}</li>`;
    return obtainInstruction("steak", 7);
  })
  .then((step8) => {
    document.querySelector("#steak").innerHTML += `<li>${step8}</li>`;
    document.querySelector("#steak").innerHTML += `<li>Steak is ready!</li>`;
    document.querySelector("#steakImg").removeAttribute("hidden");
    return obtainInstruction("steak", 8);
  })
  .catch((error) => console.log("error"));

// Iteration 3 using async/await
async function makeBroccoli() {
  try {
    await obtainInstruction("broccoli", 0);
    document.querySelector("#broccoli").innerHTML += `<li>${broccoli[0]}</li>`;
    await obtainInstruction("broccoli", 1);
    document.querySelector("#broccoli").innerHTML += `<li>${broccoli[1]}</li>`;
    await obtainInstruction("broccoli", 2);
    document.querySelector("#broccoli").innerHTML += `<li>${broccoli[2]}</li>`;
    await obtainInstruction("broccoli", 3);
    document.querySelector("#broccoli").innerHTML += `<li>${broccoli[3]}</li>`;
    await obtainInstruction("broccoli", 4);
    document.querySelector("#broccoli").innerHTML += `<li>${broccoli[4]}</li>`;
    await obtainInstruction("broccoli", 5);
    document.querySelector("#broccoli").innerHTML += `<li>${broccoli[5]}</li>`;
    await obtainInstruction("broccoli", 6);
    document.querySelector("#broccoli").innerHTML += `<li>${broccoli[6]}</li>`;
    document.querySelector(
      "#broccoli"
    ).innerHTML += `<li>Broccoli is ready!</li>`;
    document.querySelector("#broccoliImg").removeAttribute("hidden");
  } catch (err) {
    console.log("Something went wrong", error);
  }
}
makeBroccoli();

// Bonus 2 - Promise all
// BRUSSELS SPROUTS using async / await
/*
async function makeBrusselsSprouts() {
try {
  await obtainInstruction("brusselsSprouts", 0);
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${brusselsSprouts[0]}</li>`;
  await obtainInstruction("brusselsSprouts", 1);
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${brusselsSprouts[1]}</li>`;
  await obtainInstruction("brusselsSprouts", 2);
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${brusselsSprouts[2]}</li>`;
  await obtainInstruction("brusselsSprouts", 3);
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${brusselsSprouts[3]}</li>`;
  await obtainInstruction("brusselsSprouts", 4);
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${brusselsSprouts[4]}</li>`;
  await obtainInstruction("brusselsSprouts", 5);
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${brusselsSprouts[5]}</li>`;
  await obtainInstruction("brusselsSprouts", 6);
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${brusselsSprouts[6]}</li>`;
  await obtainInstruction("brusselsSprouts", 7);
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${brusselsSprouts[7]}</li>`;
  document.querySelector("#brusselsSprouts").innerHTML += `<li>Brussels sprouts are ready!</li>`;
  document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
} catch(err) {
  console.log("There is an error");
}
}
makeBrusselsSprouts() */

Promise.all([
  obtainInstruction("brusselsSprouts", 0),
  obtainInstruction("brusselsSprouts", 1),
  obtainInstruction("brusselsSprouts", 2),
  obtainInstruction("brusselsSprouts", 3),
  obtainInstruction("brusselsSprouts", 4),
  obtainInstruction("brusselsSprouts", 5),
  obtainInstruction("brusselsSprouts", 6),
  obtainInstruction("brusselsSprouts", 7),
])
  .then((values) => {
    values.forEach((value) => {
      document.querySelector(
        "#brusselsSprouts"
      ).innerHTML += `<li>${value}</li>`;
    });
    document.querySelector(
      "#brusselsSprouts"
    ).innerHTML += `<li>Brussels sprouts are ready!</li>`;
    document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
  })
  .catch((error) => console.log(error));

// written July 2023 the second time I solved the lab

/*
// Bonus 2 - Promise all
const step1 = new Promise((resolve, reject) => {
  resolve(obtainInstruction("brusselsSprouts", 0));
});

const step2 = new Promise((resolve, reject) => {
  resolve(obtainInstruction("brusselsSprouts", 1));
});
const step3 = new Promise((resolve, reject) => {
  resolve(obtainInstruction("brusselsSprouts", 2));
});
const step4 = new Promise((resolve, reject) => {
  resolve(obtainInstruction("brusselsSprouts", 3));
});
const step5 = new Promise((resolve, reject) => {
  resolve(obtainInstruction("brusselsSprouts", 4));
});
const step6 = new Promise((resolve, reject) => {
  resolve(obtainInstruction("brusselsSprouts", 5));
});
const step7 = new Promise((resolve, reject) => {
  resolve(obtainInstruction("brusselsSprouts", 6));
});
const step8 = new Promise((resolve, reject) => {
  resolve(obtainInstruction("brusselsSprouts", 7));
});
const step9 = new Promise((resolve, reject) => {
  resolve("Brussels sprouts are ready!");
});

Promise.all([
  step1,
  step2,
  step3,
  step4,
  step5,
  step6,
  step7,
  step8,
  step9,
]).then((values) => {
  console.log(values);
  values.forEach(
    (value) =>
      (document.querySelector(
        "#brusselsSprouts"
      ).innerHTML += `<li>${value}</li>`)
  );
  document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
});
*/