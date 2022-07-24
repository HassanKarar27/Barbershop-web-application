import express from "express";

const router = express.Router();
const serviceController = require("../controllers/serviceController");
const authController = require("../controllers/authController");

router.route("/");
// .get(authController.verifyUser, authController.checkRole(["normal", "admin"]), serviceController.getAllServicesFromAppointment);

router
  .route("/:id")
  .get(
    authController.verifyUser,
    authController.checkRole(["admin", "normal"]),
    serviceController.getAllServicesFromAppointment
  )
  .delete(
    authController.verifyUser,
    authController.checkRole(["admin", "normal"]),
    serviceController.deleteServiceAppointment
  )
  .post(
    authController.verifyUser,
    authController.checkRole(["normal", "admin"]),
    serviceController.addServiceToAppointment
  );

module.exports = router;
