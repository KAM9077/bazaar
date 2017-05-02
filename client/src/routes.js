import React from 'react';
import { Route, IndexRoute } from 'react-router';

// Import miscellaneous routes and other requirements
import App from './components/app';
import NotFoundPage from './components/pages/not-found-page';

// Import static pages
import HomePage from './components/pages/home-page';
import ContactPage from './components/pages/contact-page';
import ComponentSamplesPage from './components/pages/component-samples';

// Import authentication related pages
import Register from './components/auth/register';
import Login from './components/auth/login';
import Logout from './components/auth/logout';
import ForgotPassword from './components/auth/forgot_password';
import ResetPassword from './components/auth/reset_password';

// Import dashboard pages
import Dashboard from './components/dashboard/dashboard';
import ViewProfile from './components/dashboard/profile/view-profile';
import OrderHistory from './components/dashboard/history';
// Import admin pages
import AdminDashboard from './components/admin/dashboard';

// Import higher order components
import RequireAuth from './components/auth/require_auth';

// Import connected residents related pages
import family_members_list from './components/connected_resident/family_members_list';
import choose_category from './components/connected_resident/choose_category';
import resident_clothes_history from './components/connected_resident/resident_clothes_history';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="contact-us" component={ContactPage} />
    <Route path="component-samples" component={RequireAuth(ComponentSamplesPage)} />
    <Route path="register" component={Register} />
    <Route path="login" component={Login} />
    <Route path="logout" component={Logout} />
    <Route path="forgot-password" component={ForgotPassword} />
    <Route path="reset-password/:resetToken" component={ResetPassword} />

    <Route path="admin" component={RequireAuth(AdminDashboard)} />

    <Route path="dashboard">
      <IndexRoute component={RequireAuth(Dashboard)} />
      <Route path="order" component={RequireAuth(OrderHistory)} />
      <Route path="family-members-list" component={RequireAuth(family_members_list)} />
      <Route path="choose_category" component={RequireAuth(choose_category)} />
      <Route path="resident_clothes_history" component={RequireAuth(resident_clothes_history)} />
    </Route>

    <Route path="*" component={NotFoundPage} />
  </Route>
);
