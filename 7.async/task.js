class AlarmClock {
  constructor() {
    this.alarmCollection = []
    this.timerId = null
  }
  addClock(time, callback, id) {
    if (!id) {
      throw new Error("Невозможно идентифицировать будильник. Параметр id не передан.");
    }
    for (let i = 0; i < this.alarmCollection.length; i += 1) {
      if (this.alarmCollection[i].id === id) {
        console.error()
        return
      }
    }
    this.alarmCollection.push({ id, time, callback })
  }
  removeClock(id) {
    for (let i = 0; i < this.alarmCollection.length; i++) {
      if (this.alarmCollection[i].id === id) {
        this.alarmCollection.splice(i, 1)
        return true
      }
    }
    return false
  }
  getCurrentFormattedTime() {
    return new Date().toLocaleTimeString("ru-Ru", {
      hour: "2-digit",
      minute: "2-digit",
    })
  }
  start() {
    function checkClock(alarm) {
      if (alarm.time === this.getCurrentFormattedTime()) {
        alarm.callback()
      }
    }
    checkClock = checkClock.bind(this)
    if (!this.timerId) {
      this.timerId = setInterval(() => {
        this.alarmCollection.forEach((alarm) => checkClock(alarm))
      }, 1000);
    }
  }
  stop() {
    if (this.timerId) {
      clearInterval(this.timeId)
    }
  }
  printAlarms() {
    this.alarmCollection.forEach(alarm => console.log(`${alarm.id} ${alarm.time}`))
  }
  clearAlarms() {
    this.stop()
    this.alarmCollection = []

  }
} 


const alarm_clock = new AlarmClock ()

const currentTime = new Date().toLocaleTimeString("ru-Ru", {
      hour: "2-digit",
      minute: "2-digit",
    })

alarm_clock.addClock(currentTime, () => console.log('text'), 1)

let plusMinute = new Date()
plusMinute.setMinutes(plusMinute.getMinutes() + 1)
plusMinute = plusMinute.toLocaleTimeString("ru-Ru", {
      hour: "2-digit",
      minute: "2-digit",
    })
alarm_clock.addClock(plusMinute, () => console.log('text 2'), 2)

let plusTowMinutes = new Date()
plusTowMinutes.setMinutes(plusTowMinutes.getMinutes() + 2)
plusTowMinutes = plusTowMinutes.toLocaleTimeString("ru-Ru", {
      hour: "2-digit",
      minute: "2-digit",
    })
alarm_clock.addClock(plusTowMinutes, () => {
  alarm_clock.clearAlarms()
}, 3)

alarm_clock.start()