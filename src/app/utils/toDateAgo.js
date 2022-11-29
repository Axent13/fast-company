export function toDateAgo(timestamp) {
    const currentTimestamp = new Date().getTime();
    const difference = currentTimestamp - timestamp;

    if (difference < 300000) {
        return "1 минуту назад";
    } else if (difference < 600000) {
        return "5 минут назад";
    } else if (difference < 1800000) {
        return "10 минут назад";
    } else if (difference < 3600000) {
        return "30 минут назад";
    } else if (difference < 86400000) {
        const timestampDate = new Date(parseInt(timestamp));
        return `${timestampDate.getHours()}:${timestampDate.getMinutes()}`;
    } else if (difference < 31536000000) {
        const timestampDate = new Date(parseInt(timestamp));
        const formattedDate =
            timestampDate.getDate() < 10
                ? `0${timestampDate.getDate()}`
                : timestampDate.getDate();
        const formattedMonth =
            timestampDate.getMonth() + 1 < 10
                ? `0${timestampDate.getMonth() + 1}`
                : timestampDate.getMonth() + 1;
        return `${formattedDate}.${formattedMonth}`;
    } else {
        const timestampDate = new Date(parseInt(timestamp));
        const formattedDate =
            timestampDate.getDate() < 10
                ? `0${timestampDate.getDate()}`
                : timestampDate.getDate();
        const formattedMonth =
            timestampDate.getMonth() + 1 < 10
                ? `0${timestampDate.getMonth() + 1}`
                : timestampDate.getMonth() + 1;
        const formattedYear = timestampDate.getFullYear() % 100;
        return `${formattedDate}.${formattedMonth}.${formattedYear}`;
    }
}
