const CURDOprations = require("../model/model");

class CURDOprationsServices {
  async addPlant(data) {
    try {
      const plant = new CURDOprations(data);
      return await plant.save();
    } catch (error) {
      throw error;
    }
  }

  async getAllPlants() {
    try {
      return await CURDOprations.find();
    } catch (error) {
      throw error;
    }
  }

  async deletePlant(plantId) {
    try {
      return await CURDOprations.findByIdAndDelete(plantId);
    } catch (error) {
      throw error;
    }
  }

  async updatePlant(plantId, newData) {
    try {
      return await CURDOprations.findByIdAndUpdate(plantId, newData, {
        new: true,
      });
    } catch (error) {
      throw error;
    }
  }
}

module.exports = CURDOprationsServices;
