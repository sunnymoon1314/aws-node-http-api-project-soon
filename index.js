module.exports.firsthandler = async (event) => {
    console.log('soon firsthandler')
    console.log(event)
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: "This is get function!",
        },
        null,
        2
      ),
    };
  };
  
  module.exports.secondhandler = async (event) => {
    console.log('soon secondhandler')
    console.log(event)
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: "This is post function!",
        },
        null,
        2
      ),
    };
  };