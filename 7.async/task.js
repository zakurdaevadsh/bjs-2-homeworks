class AlarmClock {
    constructor() {
      this.alarmCollection = []
      this.timerId
    }
    addClock(time, callback, id) {
      if (!id) {
        throw new Error("error text");
      }
      for (let i = 0; i < this.alarmCollection.length; i += 1) {
        if (this.alarmCollection[i].id === id) {
          console.error()
        }
        return
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
      const time = new Date()
      const hours = time.getHours()
      const minutes = time.getMinutes()
      return ${ hours }: ${ minutes }
    }
    start() {
      checkClock(alarm){
        if (alarm.time = this.getCurrentFormattedTime) {
          alarm.callback()
        }
      }
    }
  }