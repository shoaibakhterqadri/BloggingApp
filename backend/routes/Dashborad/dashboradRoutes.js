const router = require('express').Router();
const mongoose = require('mongoose');
const userModel = require('../../models/userModel');
const articleModel = require('../../models/articleModel'); 


const { category_add, category_get, category_delete, category_edit, category_update } = require('../../controller/Dashborad/categoryController');
const { tag_add, tag_get, tag_delete, tag_edit, tag_update } = require('../../controller/Dashborad/tagController');

const { get_tag_category, add_artical, get_artical, edit_artical, update_artical, delete_artical } = require('../../controller/Dashborad/articalController');

const { admin_middleware, auth_sub_admin } = require('../../middleware/authMiddleware');
const { get_dashboard_index_data, get_notification,seen_notification,delete_notification } = require('../../controller/Dashborad/indexController')

// category route
router.post('/add-category', admin_middleware, category_add);
router.get('/get-category', admin_middleware, category_get);
router.delete('/delete-category/:categoryId', admin_middleware, category_delete);
router.get('/edit-category/:categorySlug', admin_middleware, category_edit);
router.patch('/update-category/:categoryId', admin_middleware, category_update);

// tag route
router.post('/add-tag', admin_middleware, tag_add);
router.get('/get-tag', admin_middleware, tag_get);
router.delete('/delete-tag/:tagId', admin_middleware, tag_delete);
router.get('/edit-tag/:tagSlug', admin_middleware, tag_edit);
router.patch('/update-tag/:tagId', admin_middleware, tag_update);

//artical route............

router.get('/get-tag-category', admin_middleware, get_tag_category);
router.post('/add-artical', admin_middleware, add_artical);
router.get('/get-artical', admin_middleware, get_artical);
router.get('/edit-artical/:articleSlug', admin_middleware, edit_artical);
router.post('/update-artical', admin_middleware, update_artical);
router.delete('/delete-artical/:articleId', admin_middleware, delete_artical);


router.get('/get-dashboard-index-data', auth_sub_admin, get_dashboard_index_data)

router.get('/get-notification/:id', auth_sub_admin, get_notification);
router.get('/seen-notification/:id', auth_sub_admin, seen_notification) ;
router.get('/delete-notification/:id', auth_sub_admin, delete_notification)

// Route to get all sub-admins
router.get('/sub-admins', async (req, res) => {
    try {
      const subAdmins = await userModel.find({ role: 'sub admin' });
      res.status(200).json({ subAdmins });
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });

router.get('/get-sub-admin-details/:subAdminEmail',async (req,res)=>{
  const {subAdminEmail}=req.params;
  try{
const subAdmin=await userModel.findOne({email:subAdminEmail});
if(!subAdmin){
  return res.status(404).json({error:'Sub-Admin not Found'});
}

res.status(200).json({
  name:subAdmin.userName,
  email:subAdmin.email,
  role:subAdmin.role,
  createdAt:subAdmin.createdAt,
  image:subAdmin.image,
})

  }
  catch(error){
    console.log(error);
    res.status(500).json({error:'Internal server error'});
  }
})

router.put('/update-sub-admin-access/:subAdminId', async (req, res) => {
  const { subAdminId } = req.params;
  const { accessStatus } = req.body;
  try {
    // Find the sub-admin by ID and update the accessStatus
    await userModel.findByIdAndUpdate(subAdminId, { accessStatus });
    res.status(200).json({ message: 'Access status updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


router.patch('/update-article-status/:articleId', async (req, res) => {
  const { articleId } = req.params;
  const { status } = req.body;

  try {
    // Assuming you have a valid status, you might want to add additional validation
    const validStatuses = ['published', 'pending', 'declined'];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ errorMessage: 'Invalid status provided' });
    }

    // Find the article by ID and update the status
    const updatedArticle = await articleModel.findByIdAndUpdate(
      articleId,
      { status },
      { new: true }
    );

    if (!updatedArticle) {
      return res.status(404).json({ errorMessage: 'Article not found' });
    }

    res.status(200).json({ successMessage: 'Article status updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ errorMessage: 'Internal server error' });
  }
});


// const get_pending_articals = async (req, res) => {
//     try {
//         const pendingArticals = await articleModel.find({ status: 'pending' });
//         res.status(200).json({ pendingArticals });
//     } catch (error) {
//         res.status(500).json({
//             errorMessage: {
//                 error: 'Internal server error',
//             }
//         });
//     }
// }

// router.get('/get-pending-articals', admin_middleware, get_pending_articals);


// Update the route handler to filter out pending articles
// Update the route handler to filter out pending articles
// Update the route handler to fetch only active articles
// const get_home_articles = async (req, res) => {
//   const { currentPage, searchValue, activeOnly } = req.query;

//   try {
//       let articles = [];

//       if (activeOnly === 'true') {
//           // Fetch only active articles (status: 'active')
//           articles = await articleModel.find({ status: 'active' })
//               .skip(parseInt(currentPage - 1) * parPage)
//               .limit(parPage)
//               .sort({ createAt: -1 });
//       } else {
//           // Fetch all articles including pending (status: 'pending')
//           articles = await articleModel.find()
//               .skip(parseInt(currentPage - 1) * parPage)
//               .limit(parPage)
//               .sort({ createAt: -1 });
//       }

//       const countArticle = await articleModel.find({ status: 'active' }).countDocuments();

//       res.status(200).json({
//           articles,
//           parPage,
//           countArticle,
//       });
//   } catch (error) {
//       res.status(500).json({
//           errorMessage: {
//               error: 'Internal server error',
//           }
//       });
//   }
// }

// router.get('/home-article-get', auth_sub_admin, get_home_articles);



module.exports = router;