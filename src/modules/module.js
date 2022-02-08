export default {
    fetch: {
        priority: 0,
        preRequest: function(requestArgs) {
          console.log(requestArgs);
        }
      }
}