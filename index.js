// Import the classes
var Clinic = require("./classes/clinic.js");
var Doctor = require("./classes/doctor.js");
var Patient = require("./classes/patient.js");
var QueueItem = require("./classes/queue.js");

// Create a clinic
var clinic = new Clinic("Noak Clinic");

// Add doctors to the clinic
var doctorA = new Doctor("Doctor A", 3); // Doctor name, average consultation time in minutes
var doctorB = new Doctor("Doctor B", 4);

clinic.addDoctor(doctorA);
clinic.addDoctor(doctorB);

// Create 6 patients
var patient1 = new Patient("Peter");
var queueitem1 = new QueueItem(patient1, 1); // Patient{}, Queue Number #1
// queueitem1.callQueue(doctorA); // Marking this queue as called

var patient2 = new Patient("Jessica");
var queueItem2 = new QueueItem(patient2, 2); // Patient{}, Queue Number #2
queueItem2.callQueue(doctorB); // Marking this queue as called

var patient3 = new Patient("Astrid");
var queueItem3 = new QueueItem(patient3, 3); // Patient{}, Queue Number #3

var patient4 = new Patient("William");
var queueItem4 = new QueueItem(patient4, 4); // Patient{}, Queue Number #4

var patient5 = new Patient("Anna");
var queueItem5 = new QueueItem(patient5, 5); // Patient{}, Queue Number #5

var patient6 = new Patient("Jerry");
var queueItem6 = new QueueItem(patient6, 6); // Patient{}, Queue Number #6

var patient7 = new Patient("Mary");
var queueItem7 = new QueueItem(patient7, 7); // Patient{}, Queue Number #7

var patient8 = new Patient("Michael");
var queueItem8 = new QueueItem(patient8, 8); // Patient{}, Queue Number #8

var patient9 = new Patient("Sarah");
var queueItem9 = new QueueItem(patient9, 9); // Patient{}, Queue Number #9

var patient10 = new Patient("David");
var queueItem10 = new QueueItem(patient10, 10); // Patient{}, Queue Number #10

var patient11 = new Patient("John");
var queueItem11 = new QueueItem(patient11, 11); // Patient{}, Queue Number #11

// Add queue items to the queue
clinic.addQueue(queueitem1);
clinic.addQueue(queueItem2);
clinic.addQueue(queueItem3);
clinic.addQueue(queueItem4);
clinic.addQueue(queueItem5);
clinic.addQueue(queueItem6);
clinic.addQueue(queueItem7);
clinic.addQueue(queueItem8);
clinic.addQueue(queueItem9);
clinic.addQueue(queueItem10);
clinic.addQueue(queueItem11);

clinic.simulateWaitingTime(2); // Simulate 2 minutes of waiting time, so we do not need to call setTimeout()

console.log(
  `\nEstimated waiting time: ${clinic.calculateWaitingTime(11)} minutes`
);
