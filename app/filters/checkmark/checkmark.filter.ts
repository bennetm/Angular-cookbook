export default function checkmarkFilter() {
    return function (input:boolean) {
        return input ? '\u2713' : '\u2718';
    }
}

