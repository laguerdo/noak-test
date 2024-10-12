class QueueItem {
  patient = null;
  doctor = null;
  calledAt = null;
  number = 0;

  constructor(_patient, _number) {
    this.patient = _patient;
    this.number = _number;
  }

  callQueue(_doctor) {
    this.doctor = _doctor;
    this.calledAt = new Date().getTime();
  }
}

module.exports = QueueItem;
