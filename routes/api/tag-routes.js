const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// find all tags, included its associated Product data

router.get('/', async(req, res) => {
  
  try{

const tagData= await Tag.findAll({include:[{model:Product}]});
res.status(200).json(tagData);

  }catch(err){
res.status(500).json(err);
  }

});

// find a single tag by its `id`, included its associated Product data

router.get('/:id', async(req, res) => {

  try{
const tagData= await Tag.findByPk(req.params.id,{include:[{model:Product}]});
if(!tagData){
  res.status(404).json({message:"No tag found with this id!"});
}
res.status(200).json(tagData);
  }catch(err){

    res.status(500).json(err);
  }

});
  // create a new tag

router.post('/', (req, res) => {
/*
req.body should look like this...
    {
      tag_name :  'orange',
      productIds: [1, 2, 3]
    }
*/
Tag.create(req.body)
.then((tag)=>{
  //if there are poduts for the tags then we need to create a pairing to bulk create in the ProductTag model
  if(req.body.productIds.length){
    const productTagIdArr=req.body.productIds.map((productId)=>{
      return{
      tag_id:tag.id,
      productId
      };
    });
    return ProductTag.bulkCreate(tag);
  }
res.status(200).json(tag);
})
.then((productTagIds)=>res.status(200).json(productTagIds))
.catch((err)=>{
  console.log(err);
  res.status(400).json(err);
});

});


  // update a tag's name by its `id` value

router.put('/:id', (req, res) => {

  Tag.update(req.body,{
    where:{
      id:req.params.id,
    },
  }).then((tag)=>{
    if(req.body.productIds&& req.body.productIds.length){
      ProductTag.findAll({
        where:{tag_id:req.params.id}
      }).then((productTags)=>{
        //create filtered list of new product ids
        const tagProductIds=productTags.map(({product_id})=>product_id);
        const newTagProducts= req.body.productIds
        .filter((productId)=>!tagProductIds.includes(productId))
        .map((productId)=>{
          return{
            tag_id:req.body.id,
            productId,
          };
        });
        

        //get the product ids that need to be removed

        const tagProductsToRemove =productTags.filter(({product_id})=>!req.body.productIds.includes(product_id))
        .map(({id})=>id);
return Promise.all([
  productTags.destroy({where:{id:tagProductsToRemove}}),
  productTags.bulkCreate(newTagProducts),
]);

      });

    }

    return res.json(tag);
  })
.catch((err)=>{
  res.status(400).json(err);
});
});


  // delete on tag by its `id` value

router.delete('/:id', async(req, res) => {

  try{
const tagData= await Tag.destroy({
  where:{
    id:req.params.id,
  }
});
if(!tagData){
  res.status(400).json({message:'No tag with this id'});
}
res.status(200).json(tagData);
  }catch(err){
res.status(500).json(err);
  }

});

module.exports = router;
