const Singleton = (function () {
    let instance;

    function createInstance() {
        const socket = new WebSocket('ws://localhost:9000');
        return socket;
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

export default Singleton;