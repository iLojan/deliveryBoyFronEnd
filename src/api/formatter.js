const $c = (currency, amount) => {
    if (!currency) {
        console.warn("Currency is not defined.")
    }
    return new Intl.NumberFormat('fr-FR', {
        style: "currency",
        currency: currency ? currency : 'KZT',
        currencyDisplay: "narrowSymbol",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(amount)
}

const DateWithoutTimezone = (dateString) =>  { return new Date(dateString.split('+')[0]) }

const getDate = (dateString) => {
    return DateWithoutTimezone(dateString)?.toLocaleString('en-Us', { month: 'short', day: 'numeric' });
}

const currencyFormat = {
    install: (app, options) => {
        app.config.globalProperties.$c = $c;
    }
}

const monthShort = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const monthLong = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const dayOfTheWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const monthShortRussia = ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"];

const dayOfTheWeekRussia = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];

const monthShortKazakhstan = ["Қаң", "Ақп", "Нау", "Сәу", "Мам", "Мау", "Шіл", "Там", "Қыр", "Қаз", "Қар", "Жел"];

const dayOfTheWeekKazakhstan = ["Жк", "Дс", "Сс", "Ср", "Бс", "Жм", "Сб"];

const dateUtils = {
    dateAndMonth: (date, isShortened = true) => {
        switch (localStorage.getItem('cultureCode')) {
            case 'en-us': return `${isShortened ? monthShort[DateWithoutTimezone(date).getMonth()] : monthLong[DateWithoutTimezone(date).getMonth()]} ${DateWithoutTimezone(date).getDate()}`
            case 'ru-ru': return `${isShortened ? monthShortRussia[DateWithoutTimezone(date).getMonth()] : monthLong[DateWithoutTimezone(date).getMonth()]} ${DateWithoutTimezone(date).getDate()}`
            case 'kk-kz': return `${isShortened ? monthShortKazakhstan[DateWithoutTimezone(date).getMonth()] : monthLong[DateWithoutTimezone(date).getMonth()]} ${DateWithoutTimezone(date).getDate()}`
            default: return `${isShortened ? monthShort[DateWithoutTimezone(date).getMonth()] : monthLong[DateWithoutTimezone(date).getMonth()]} ${DateWithoutTimezone(date).getDate()}`
        }
    },

    dateAndMonthofDate: (date, isShortened = true) => {
        switch (localStorage.getItem('cultureCode')) {
            case 'en-us': return `${isShortened ? monthShort[date.getMonth()] : monthLong[date.getMonth()]} ${date.getDate()}`
            case 'ru-ru': return `${isShortened ? monthShortRussia[date.getMonth()] : monthLong[date.getMonth()]} ${date.getDate()}`
            case 'kk-kz': return `${isShortened ? monthShortKazakhstan[date.getMonth()] : monthLong[date.getMonth()]} ${date.getDate()}`
            default: return `${isShortened ? monthShort[date.getMonth()] : monthLong[date.getMonth()]} ${date.getDate()}`
        }
    },

    dateAndDayOfWeek: (date, isShortened = true) => {
        switch (localStorage.getItem('cultureCode')) {
            case 'en-us': return `${dayOfTheWeek[DateWithoutTimezone(date).getDay()]}, ${isShortened ? monthShort[DateWithoutTimezone(date).getMonth()] : monthLong[DateWithoutTimezone(date).getMonth()]} ${DateWithoutTimezone(date).getDate()}`
            case 'ru-ru': return `${dayOfTheWeekRussia[DateWithoutTimezone(date).getDay()]}, ${isShortened ? monthShortRussia[DateWithoutTimezone(date).getMonth()] : monthLong[DateWithoutTimezone(date).getMonth()]} ${DateWithoutTimezone(date).getDate()}`
            case 'kk-kz': return `${dayOfTheWeekKazakhstan[DateWithoutTimezone(date).getDay()]}, ${isShortened ? monthShortKazakhstan[DateWithoutTimezone(date).getMonth()] : monthLong[DateWithoutTimezone(date).getMonth()]} ${DateWithoutTimezone(date).getDate()}`
            default: return `${dayOfTheWeek[DateWithoutTimezone(date).getDay()]}, ${isShortened ? monthShort[DateWithoutTimezone(date).getMonth()] : monthLong[DateWithoutTimezone(date).getMonth()]} ${DateWithoutTimezone(date).getDate()}`
        }
    },

    dateAndDayOfWeekofDate: (date, isShortened = true) => {
        switch (localStorage.getItem('cultureCode')) {
            case 'en-us': return `${dayOfTheWeek[date.getDay()]}, ${isShortened ? monthShort[date.getMonth()] : monthLong[date.getMonth()]} ${date.getDate()}`
            case 'ru-ru': return `${dayOfTheWeekRussia[date.getDay()]}, ${isShortened ? monthShortRussia[date.getMonth()] : monthLong[date.getMonth()]} ${date.getDate()}`
            case 'kk-kz': return `${dayOfTheWeekKazakhstan[date.getDay()]}, ${isShortened ? monthShortKazakhstan[date.getMonth()] : monthLong[date.getMonth()]} ${date.getDate()}`
            default: return `${dayOfTheWeek[date.getDay()]}, ${isShortened ? monthShort[date.getMonth()] : monthLong[date.getMonth()]} ${date.getDate()}`
        }
    }

}

export { $c, DateWithoutTimezone, getDate, currencyFormat as default, dateUtils };