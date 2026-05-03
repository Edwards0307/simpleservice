const {getAllCategories, createCategory, updateCategory} = require("../controllers/categoriesController");

const getCategoriesHandler = async (req, res) => {
  try {
    const categoriesResponse = await getAllCategories();
    res.status(200).json(categoriesResponse);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const postCategoryHandler = async (req, res) => {
  try {
    const categoriesResults = await createCategory(req.body);
    res
      .status(201)
      .json({
        message: "Category created succesfully",
        created: categoriesResults,
      });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateCategoryHandler = async (req, res) => {
  try {
    const categoryUpdated = await updateCategory(req.body);
    res
      .status(200)
      .json({
        message: "Category updated succesfully",
        updated: categoryUpdated,
      });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {getCategoriesHandler, postCategoryHandler, updateCategoryHandler};