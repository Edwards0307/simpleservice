const { getServicesList } = require("../controllers/categorieservices");

const getServicesListH = async (req, res) => {
  try {
    const serviceListsResponse = await getServicesList(req.params);

    res.status(200).json(serviceListsResponse);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getServicesListH };
