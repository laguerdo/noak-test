var helpers = require("../utils/helpers.ts");

class Clinic {
  name = "";
  doctors = [];
  queue = [];
  simulated = false;
  alreadyWaitingFor = 0;

  constructor(_name) {
    this.name = _name;
  }

  addDoctor(doctor) {
    this.doctors.push(doctor);
  }

  removeDoctor(doctor) {
    this.doctors.splice(this.doctors.indexOf(doctor), 1);
  }

  addQueue(item) {
    this.queue.push(item);
  }

  removeQueue(item) {
    this.queue.splice(this.queue.indexOf(item), 1);
  }

  calculateWaitingTime(queueNumber) {
    var totalWaitingTime = 0;

    // Find the index of the queue item with the given queue number
    var queueIndex = this.queue.findIndex(function (item) {
      return item.number === queueNumber;
    });

    if (queueIndex !== -1) {
      var precedingItems = this.queue.slice(0, queueIndex);
      // Initialize an array to store the doctor's waiting time
      var doctorWaitingTime = Array(this.doctors.length).fill(0);

      // Loop through the preceding items and get the doctor's average time based on index
      precedingItems.forEach((item) => {
        // Always find the shortest doctor's waiting time for every loop
        var lowestDoctorWaitingTimeIndex = doctorWaitingTime.indexOf(
          Math.min.apply(Math, doctorWaitingTime)
        );

        // Doing math for ongoing consultation
        var currentTime = this.simulated
          ? helpers.addMinutes(this.alreadyWaitingFor)
          : helpers.now();

        // If the ongoing consultation time is less than the average, add the difference to the doctor's waiting time
        // If not, add the ongoing consultation time instead
        doctorWaitingTime[lowestDoctorWaitingTimeIndex] +=
          helpers.findRemainingConsultationTime(
            currentTime,
            this.doctors[lowestDoctorWaitingTimeIndex].avg_time,
            item.calledAt
          );

        console.log(
          `${this.queue[queueIndex].patient.name}'s waiting time after ${item.patient.name}`
        );
        console.log(`> ${Math.min.apply(Math, doctorWaitingTime)} minutes`);
      });
      // Get the lowest consultation time
      var lowestWaitingTime = Math.min.apply(Math, doctorWaitingTime);
      totalWaitingTime = lowestWaitingTime;
    } else {
      console.log("Queue Number not found in the queue.");
    }
    return totalWaitingTime;
  }

  simulateWaitingTime(minutes) {
    this.simulated = true;
    this.alreadyWaitingFor = minutes; // This will be used to simulate the waiting time in minutes
  }
}

module.exports = Clinic;
