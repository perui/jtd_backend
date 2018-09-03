
// Gettign the Newly created Mongoose Model we just created
var Showcase = require('../models/showcase.model')

// Saving the context of this module inside the _the variable
_this = this

// Async function to get the To do List
exports.getShowcases = async function(query, page, limit){

    // Options setup for the mongoose paginate
    var options = {
        page,
        limit
    }

    // Try Catch the awaited promise to handle the error

    try {
        var showcases = await Showcase.paginate(query, options)

        // Return the todod list that was retured by the mongoose promise
        return showcases;

    } catch (e) {

        // return a Error message describing the reason
        throw Error('Error while Paginating Todos')
    }
}

exports.createTodo = async function(showcase){

    // Creating a new Mongoose Object by using the new keyword
    var newShowcase = new Showcase({
        title: showcase.title,
        description: showcase.description,
        date: new Date(),
        status: showcase.status
    })

    try{

        // Saving the Todo
        var savedShowcase = await newShowcase.save()

        return savedShowcase;
    }catch(e){

        // return a Error message describing the reason
        throw Error("Error while Creating Todo")
    }
}

exports.updateTodo = async function(showcase){
    var id = showcase.id

    try{
        //Find the old Todo Object by the Id

        var oldShowcase = await Showcase.findById(id);
    }catch(e){
        throw Error("Error occured while Finding the Todo")
    }

    // If no old Todo Object exists return false
    if(!oldShowcase




    ){
        return false;
    }

    console.log(oldShowcase)

    //Edit the Todo Object
    oldShowcase.title = showcase.title
    oldShowcase.description = showcase.description
    oldShowcase.status = showcase.status


    console.log(oldShowcase)

    try{
        var savedShowcase = await oldShowcase.save()
        return savedShowcase;
    }catch(e){
        throw Error("And Error occured while updating the Todo");
    }
}

exports.deletedShowcase = async function(id){

    // Delete the Todo
    try{
        var deleted = await Showcase.remove({_id: id})
        if(deleted.result.n === 0){
            throw Error("Todo Could not be deleted")
        }
        return deleted
    }catch(e){
        throw Error("Error Occured while Deleting the Todo")
    }
}
