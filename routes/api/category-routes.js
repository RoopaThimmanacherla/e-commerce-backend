const router = require('express').Router();
const { Category, Product } = require('../../models');

// Get all categories
router.get('/', async(req, res) => {
  
  try{

    const categoriesData= await Category.findAll({
    include: [{model:Product}],
    });
    res.status(200).json(categoriesData);
  }catch(err){
    res.status(500).json(err);
  }
});


//Get category by id
router.get('/:id', async(req, res) => {
try{
  
  const categoriesData= await Category.findByPk(req.params.id,{
    include: [{model:Product}],
  });

if(!categoriesData){
  res.status(404).json({message:"No category found with this id!"});
  return;
}
res.status(200).json(categoriesData);
}catch(err){
  res.status(500).json(err);
}
});

//Create category 
router.post('/', async(req, res) => {
  try{
const categoryData= await Category.create(req.body);
res.status(200).json(categoryData);
  }catch(err){
    res.status(400).json(err);
  }
});


//Update category with id
router.put('/:id', async(req, res) => {
  try{
const categoryData= await Category.update(req.body,{
  where:{
    id: req.params.id,
  },
});

if(!categoryData[0]){
  res.status(400).json({message:'No category with this id!'});
  return;
}
res.status(200).json(categoryData);

  }catch(err){
    res.status(500).json(err);
  }
});



  // delete a category by its `id` value

router.delete('/:id', async(req, res) => {
try{
  const categoriesData =await Category.destroy({
    where:{
      id:req.params.id,
    },
  });
  if(!categoriesData){
    res.status(400).json({message:'No category found with this id'});
    return;
  }
  res.status(200).json(categoriesData);
}catch(err){
  res.status(500).json(err);

}
  
});

module.exports = router;
