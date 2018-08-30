// Anatomy of a Async Function

exports.some_function = async function(){

    try{

        // await keyword pauses the execution of the function and returns the resolved value once completed

        let value = await promise()

        // Do Something with the Value, it will only get executed after the promise above has been resolved

    }catch(exception){

        // Handles exception

    }

}