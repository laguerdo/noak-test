module.exports = {
  wrapIndex: (arr, idx) => {
    return ((idx % arr.length) + arr.length) % arr.length;
  },
  addMinutes: (minutes) => {
    return new Date().getTime() + minutes * 60000;
  },
  now: () => {
    return new Date().getTime();
  },
  findRemainingConsultationTime(currentTime, avgTime, calledAt) {
    var ongoingMinute =
      calledAt === null
        ? 0
        : Math.floor(
            (currentTime - calledAt) / 60000 // convert milliseconds to minutes
          );
    return 0 - (ongoingMinute - avgTime);
  },
};
