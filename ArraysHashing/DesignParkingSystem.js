/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function (big, medium, small) {
  // Initialize the parking system with the number of available slots for each type of car
  this.bigSlots = big;
  this.mediumSlots = medium;
  this.smallSlots = small;
};

/**
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function (carType) {
  // Check for the car type and reduce the corresponding slot count if a slot is available
  if (carType === 1) {
    if (this.bigSlots > 0) {
      this.bigSlots--; // Decrease the available big car slots
      return true;
    }
  } else if (carType === 2) {
    if (this.mediumSlots > 0) {
      this.mediumSlots--; // Decrease the available medium car slots
      return true;
    }
  } else if (carType === 3) {
    if (this.smallSlots > 0) {
      this.smallSlots--; // Decrease the available small car slots
      return true;
    }
  }
  return false; // Return false if no slot is available for the car type
};

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */
