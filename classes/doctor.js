class Doctor {
  avg_time = 3; // in minutes
  name = "";
  available = true;

  constructor(_name, _time) {
    this.name = _name;
    this.avg_time = _time;
  }

  off() {
    this.available = false;
  }
}

module.exports = Doctor;
