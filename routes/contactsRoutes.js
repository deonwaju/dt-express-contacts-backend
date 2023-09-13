const express = require("express");
const router = express.Router();
const {
    getContacts, 
    getContactById, 
    putContact, 
    patchContactById, 
    deleteContactById, 
    creatContact
} 
= require("../controllers/contactController");

router.route("/").get(getContacts);

router.route("/:id").post(creatContact);

router.route("/:id").get(getContactById);

router.route("/:id").put(putContact);

router.route("/:id").patch(patchContactById);

router.route("/:id").delete(deleteContactById);


module.exports = router;