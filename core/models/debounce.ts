
export function debounce(func: any, timeout: number) {
    let timer: any;
    return function (...args: any[]) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func()
        }, timeout);
    };
}