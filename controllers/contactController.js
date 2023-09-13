const {constants} = require("../constants");

// @desc Get all contacts
// @route GET /api/contacts
// @access public
const getContacts = async (req, res) => {
    res.status(constants.SUCCESSFUL).json({
        message: "All contacts",
        status: constants.SUCCESSFUL 
     });
};

// @desc Get contact by id
// @route GET /api/contacts/:id
// @access public
const getContactById = async (req, res) => {
    res.status(constants.SUCCESSFUL).json({
        message: `Get contact for ${req.params.id}`,
        status: constants.SUCCESSFUL  
    });
};

// @desc update contact
// @route PUT /api/contacts/:id
// @access public
const putContact = async (req, res) => {
    res.status(constants.SUCCESSFUL).json({
        message: `Put contact for ${req.params.id}`,
        status: constants.SUCCESSFUL  
    });
};

// @desc patch a contact
// @route PATCH /api/contacts/:id
// @access public
const patchContactById = async (req, res) => {
    res.status(constants.SUCCESSFUL).json({
        message: `Update contact for ${req.params.id}`,
        status: constants.SUCCESSFUL 
    });
};

// @desc create new contact
// @route POST /api/contacts/:id
// @access public
const creatContact = async (req, res) => {
    console.log(`The created request body:::`, req.body)
    const{name, email, phone} = req.body
    if(!name || !email || !phone) {
        res.status(constants.VALIDATION_ERROR)
        throw new Error("All fields are necessary")
    }
    res.status(constants.SUCCESSFUL).json({
        message: `Create contact for ${req.params.id}`,
        status: constants.SUCCESSFUL 
     });
};

// @desc delete contact by id
// @route DELETE /api/contacts/:id
// @access public
const deleteContactById = async (req, res) => {
    res.status(constants.SUCCESSFUL).json({
    message: `Delete contact for ${req.params.id}`,
    status: constants.SUCCESSFUL 
});
};

module.exports = {getContacts, getContactById, putContact, patchContactById, deleteContactById, creatContact}