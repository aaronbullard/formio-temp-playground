export default {
    priority: 0,
    init(formio: any) {
        formio.events.onAny((event: object) => {
            // console.log({event});
        });
    },
    preRequest(request: object) {
        // console.log({request});
    },
    deregister() {
        // console.log('deregistered Logger');
    },
};
