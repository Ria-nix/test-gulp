export const globalVariablesInit =  function (args = []) {
    window.WINDOW_WIDTH = window.innerWidth;
    args.forEach(arg => {
        window[arg.name] = arg.value;
    });
    window.addEventListener('resize', function() {
        window.WINDOW_WIDTH = window.innerWidth;
    })
}
