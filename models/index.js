const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  name: {
    type: String,
    required: [true, "A name is required."]
  },
  
  type: {
    type: String,
    enum: { values: ["Cardio", "Resistance"], message: "Please choose cardio or resistance"},
    required: [true, "An exercise type is required."]
  },

  weight: {
    type: Number,
    min: [0, "Number must be greater than -1."],
    max: [10000, "Number must be less than 10001."],
    required: [true, "A weight is required."]
  },

  sets: {
    type: Number,
    min: [0, "Number must be greater than -1."],
    max: [10000, "Number must be less than 10001."],
    required: [true, "Number of sets is required."]
  },

  reps: {
    type: Number,
    min: [0, "Number must be greater than -1."],
    max: [10000, "Number must be less than 10001."],
    required: [true, "Number of reps is required."]
  },

  duration: {
    type: Number,
    min: [0, "Number must be greater than -1."],
    max: [10000, "Number must be less than 10001."],
    required: [true, "Duration is required."]
  }, 

  distance: {
    type: Number,
    min: [0, "Number must be greater than -1."],
    max: [10000, "Number must be less than 10001."],
    required: [true, "Distance is required."]
  }



});


// export 'db'. there needs to be a 'Workout' type so that we can call:

/*

db.Workout.deleteMany({})
  .then(() => db.Workout.collection.insertMany(workoutSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

*/

