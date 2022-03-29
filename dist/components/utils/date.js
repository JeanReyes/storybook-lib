var DateChat = /** @class */ (function () {
    function DateChat(date, previusDate) {
        this.date = date;
        this.previusDate = previusDate;
        this.now = new Date();
        this.days = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
        this.months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agasto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
        this.date = date ? new Date(date) : undefined;
        this.previusDate = previusDate ? new Date(previusDate) : undefined;
    }
    DateChat.prototype.formateDate = function (format) {
        if (this.date) {
            switch (format) {
                case 'hh:mm':
                    return "".concat(this.date.getHours(), ":").concat(this.addMinutes(this.date.getMinutes()));
                case 'day':
                    return this.date.getDate();
                // case 'time' :
                //     return this.isTime()
                case 'time_message':
                    return this.messageTime();
                default: return this.date;
            }
        }
    };
    DateChat.prototype.messageTime = function () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var dateDay = (_a = this.date) === null || _a === void 0 ? void 0 : _a.getDate();
        var previusDay = (_b = this.previusDate) === null || _b === void 0 ? void 0 : _b.getDate();
        var dateNow = this.now.getDate();
        // validacion para ver si los datos existen y son diferentes para hacer diferenciador de dias
        if (previusDay === undefined) {
            if (dateNow === dateDay) {
                return 'Hoy';
            }
            else if (dateDay && (dateNow - dateDay === 1)) {
                return 'Ayer';
            }
            if (dateDay && (dateNow - dateDay >= 7)) {
                return "".concat((_c = this.date) === null || _c === void 0 ? void 0 : _c.getDate(), " de ").concat(this.months[(_d = this.date) === null || _d === void 0 ? void 0 : _d.getMonth()], " de ").concat((_e = this.date) === null || _e === void 0 ? void 0 : _e.getFullYear());
            }
            return this.days[(_f = this.date) === null || _f === void 0 ? void 0 : _f.getDay()];
        }
        if (dateDay && (dateDay !== previusDay)) {
            if (dateNow === dateDay) {
                return 'Hoy';
            }
            else if (dateNow - dateDay === 1) {
                return 'Ayer';
            }
            else if (dateNow - dateDay >= 7) {
                return "".concat((_g = this.date) === null || _g === void 0 ? void 0 : _g.getDate(), " de ").concat(this.months[(_h = this.date) === null || _h === void 0 ? void 0 : _h.getMonth()], " de ").concat((_j = this.date) === null || _j === void 0 ? void 0 : _j.getFullYear());
            }
            return this.days[(_k = this.date) === null || _k === void 0 ? void 0 : _k.getDay()];
        }
    };
    // private isTime(): any {
    //     if (this.date) {
    //         if (this.now.getDate() === this.date.getDate()) {
    //             return `Hoy`
    //         } else {
    //             // if (this.)
    //             if ((this.now.getDate() - this.date.getDate()) === 1) {
    //                 return `AYER`               
    //             } else if (this.now.getDate() - this.date.getDate() === 2){
    //                 // hacer validaciones para 1 semana las anteriores enviar la fecha
    //                 return `${this.days[this.date.getDay()]}`            
    //             } else if (this.now.getDate() - this.date.getDate() === 3){
    //                 return `${this.days[this.date.getDay()]}`
    //             } else if (this.now.getDate() - this.date.getDate() === 4){
    //                 return `${this.days[this.date.getDay()]}`
    //             } else if (this.now.getDate() - this.date.getDate() === 5){
    //                 return `${this.days[this.date.getDay()]}`
    //             } else if (this.now.getDate() - this.date.getDate() === 6){
    //                 return `${this.days[this.date.getDay()]}`
    //             } else {
    //                 return `LA FECHA`
    //             }
    //         }      
    //     }
    // }
    DateChat.prototype.addMinutes = function (minutes) {
        if (minutes >= 0 && minutes < 9) {
            return "0".concat(minutes);
        }
        else {
            return minutes;
        }
    };
    DateChat.prototype.format = function (format) {
        return this.formateDate(format);
    };
    return DateChat;
}());
export { DateChat };
