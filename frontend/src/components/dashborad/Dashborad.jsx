import React,{useState} from 'react';
import Helmet from 'react-helmet'
import DashboradNavbar from './DashboradNavbar'
import Sidebar from './Sidebar';
import { Switch, Route } from "react-router-dom";
import DashboradIndex from './DashboradIndex';
import DashboradArticle from './DashboradArticle';
import ArticleAdd from './ArticleAdd';
import ArticleEdit from './ArticleEdit';
import AllCategory from './AllCategory';
import AddCategory from './AddCategory';
import EditCategory from './EditCategory';
import AllTag from './AllTag';
import AddTag from './AddTag';
import EditTag from './EditTag';
import AllSubAdmin from './AllSubAdmin';
import AllUser from './AllUser';
import SubadminProfile from './SubadminProfile';
import DashComments from './DashComments';

const Dashborad = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
      setSidebarVisible(!sidebarVisible);
  };
  return (
    <div className='dashborad'>
     <Helmet>
        <title>BlogifyBlog - Dashboard</title>
        <meta
          name='description'
          content='Explore the dashboard of BlogifyBlog. Manage articles, categories, tags, users, and more. Stay organized and contribute to the thriving community. BlogifyBlog - Your Dashboard for Content Management.'
        />
        <meta name='robots' content='index, follow' />
        <meta
          name='keywords'
          content='dashboard, manage, articles, categories, tags, users, BlogifyBlog, content management, Education, Technology,  Science, Religious, Health, Fitness, Business, Finance, Food, Cooking, Entertainment, Sports, Travel, Social Media'
        />
        <meta name='author' content='BlogifyBlog' />
        <meta property='og:title' content='BlogifyBlog - Dashboard' />
        <meta
          property='og:description'
          content='Explore the dashboard of BlogifyBlog. Manage articles, categories, tags, users, and more. Stay organized and contribute to the thriving community. BlogifyBlog - Your Dashboard for Content Management.'
        />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://www.blogifyblog.com/dashborad' />
        <meta property='og:image' content='https://www.blogifyblog.com/app-image.png' />
        <meta
          property='article:tag'
          content='Education, Technology,  Science, Religious, Health, Fitness, Business, Finance, Food, Cooking, Entertainment, Sports, Travel, Social Media'
        />
      </Helmet>

      <DashboradNavbar />
      <div className="dashborad-main-content">
            
        <Sidebar />
        <Switch>
          <Route path="/dashborad" component={DashboradIndex} exact />
          <Route path="/dashborad/all-article/:currentPage?" component={DashboradArticle} exact />
          <Route path="/dashborad/article-add" component={ArticleAdd} exact />
          <Route path="/dashborad/article/edit/:articleSlug" component={ArticleEdit} exact />
          <Route path="/dashborad/all-category/:currentPage?" component={AllCategory} exact />
          <Route path="/dashborad/add-category" component={AddCategory} exact />
          <Route path="/dashborad/category/edit/:cateSlug" component={EditCategory} exact />

          <Route path="/dashborad/all-tag/:currentPage?" component={AllTag} exact />
          <Route path="/dashborad/add-tag" component={AddTag} exact />
          <Route path="/dashborad/tag/edit/:tagSlug" component={EditTag} exact />

          <Route path="/dashborad/all-sub-admin/:currentPage?" component={AllSubAdmin} exact />

          <Route path="/dashborad/all-user/:currentPage?" component={AllUser} exact />

          <Route path="/dashborad/sub-admin-profile/:subAdminEmail" component={SubadminProfile} exact />

          <Route path="/dashborad/comments/:currentPage?" component={DashComments} exact />

        </Switch>
      </div>
    </div>
  )
}

export default Dashborad