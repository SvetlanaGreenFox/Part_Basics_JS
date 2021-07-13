class AlarmClock {

    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id) {
        if (id === undefined) {
            const error = new Error('error text');
            throw error;
        }

        for (const elem of this.alarmCollection) {
            if (id === elem.id) {
                console.error();
            }
        }

        const newTimer = {
            id,
            time,
            callback
        }

        this.alarmCollection.push(newTimer);
    }

    removeClock(id) {

        let filter = this.alarmCollection.filter(item => item.id === id);

        if (filter.length === 0) {
            return false;
        }

        filter.forEach(value => this.alarmCollection.splice(this.alarmCollection.findIndex(elem => elem.id === value.id), 1));

        return true;
    }



    getCurrentFormattedTime() {
        let date = new Date();
        return `${date.getHours()}:${date.getMinutes()}`;
    }

    start() {

        function checkClock(alarmClock) {
            let date = new Date();

            if (`${date.getHours()}:${date.getMinutes()}` === alarmClock.time) {
                alarmClock.callback();
            }
        }

        if (this.timerId === null) {
            console.log(this.timerId);
            this.timerId = setInterval(() => {
                this.alarmCollection.forEach(elem => checkClock(elem))
                // for(const elem of this.alarmCollection) {
                //   if(checkClock(elem)) {
                //     this.callback();
                //   }
                // }
            }, 1000);
            console.log(this.timerId);
        }
    }

    stop() {

        if (this.timerId !== null) {
            clearInterval(timerId);
            this.timerId === null;
        }

    }

    printAlarms() {
        this.alarmCollection.forEach(elem => console.log(`Будильник №${elem.id} заведён на ${elem.time}`));
    }

    clearAlarms() {
        clearInterval(timerId);
        this.alarmCollection.splice(0, this.alarmCollection.length);

    }
}