const ROLE_MEMBER = require('./constants').ROLE_MEMBER;
const ROLE_VOLUNTEER = require('./constants').ROLE_VOLUNTEER;
const ROLE_RESIDENT = require('./constants').ROLE_RESIDENT;
const ROLE_ADMIN = require('./constants').ROLE_ADMIN;

// Set user info from request
exports.setUserInfo = function setUserInfo(request) {
  const getUserInfo = {
    _id: request._id,
    firstName: request.firstName,
    lastName: request.lastName,
    email: request.email,
    role: request.role
  };

  return getUserInfo;
};

exports.getRole = function getRole(checkRole) {
  let role;

  switch (checkRole) {
    case ROLE_ADMIN: role = 4; break;
    case ROLE_VOLUNTEER: role = 3; break;
    case ROLE_RESIDENT: role = 2; break;
    case ROLE_MEMBER: role = 1; break;
    default: role = 1;
  }

  return role;
};
