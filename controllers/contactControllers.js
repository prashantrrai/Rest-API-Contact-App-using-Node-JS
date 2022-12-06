//@desc get all contacts
//@route GET /api/contacts
//@access public

const getContacts = (req, res) => {
  res.status(200).json({ message: "Get all Contacts" });
};

//@desc Create New contacts
//@route POST /api/contacts
//@access public

const createContacts = (req, res) => {
  console.log("The request body is:", req.body);
  const {name, email, phone} = req.body
  if(!name || !email || !phone){
    res.status(400);
    throw new Error("All fields are required or Mandatory")
  }
  res.status(201).json({ message: "Created Contacts" });
};

//@desc Get contact
//@route GET /api/contacts/:id
//@access public

const getContact = (req, res) => {
  res.status(200).json({ message: `Get Contacts for id ${req.params.id}` });
};

//@desc Update contacts
//@route PUT /api/contacts/:id
//@access public

const updateContacts = (req, res) => {
  res.status(200).json({ message: `Update Contacts for id ${req.params.id}` });
};

//@desc Delete contacts
//@route DELETE /api/contacts/:id
//@access public

const deleteContacts = (req, res) => {
  res
    .status(200)
    .json({ message: `Delete the Contacts for id ${req.params.id}` });
};

module.exports = {
  getContacts,
  createContacts,
  updateContacts,
  getContact,
  deleteContacts,
};
