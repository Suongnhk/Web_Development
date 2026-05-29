class apiError extends Error {
    constructor(message, statuscode) {
      super(message);
      this.statuscode = statuscode;
      this.status = `${statuscode}`.startsWith(4) ? "Fail" : "Error";
    }
  }
  
  module.exports = apiError;
  