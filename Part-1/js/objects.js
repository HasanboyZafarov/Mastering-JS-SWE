// let radius = 1;
// let x = 1;
// let y = 1;

// Object-Oriented Programming (OOP)

// circle.draw(); // We call it method

// Factory Functions
function createCircle(radius) {
  return {
    radius,

    draw() {
      console.log("draw");
    },
  };
}

const circle1 = createCircle(1);
console.log(circle1);
circle1.draw()