const CURDOprationsServices = require("../services/services")

const curdOprationsServices = new CURDOprationsServices();

const addPlant = async(req, res) => {
    console.log("in add");
    try{
        const plant = await curdOprationsServices.addPlant(req.body);
        res.status(201).json(plant);
    }catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

const getAllPlants = async(req, res) => {
    try {
        const data = await curdOprationsServices.getAllPlants();
        res.status(200).json(data)
    }catch(error){
        console.log(error);
        res.status(500).json(error);
    }
}

const deletePlant = async(req, res) => {
    try{
        const plantId = req.params.id;
        console.log(plantId);
        await curdOprationsServices.deletePlant(plantId);
        res.status(200).json({message: "plant data deleted successfully"});
    }catch(error){
        console.log(error);
        res.status(500).json(error);     
    }
}

const updatePlant = async(req, res) => {
    try{
        const plantId = req.params.id;
        await curdOprationsServices.updatePlant(plantId, req.body);
        res.status(200).json(data)
    }catch (error) {
        console.log(error);
        res.status(500).json(error);  
    }
}


module.exports = {addPlant, getAllPlants, deletePlant, updatePlant};

