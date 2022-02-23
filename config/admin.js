module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'eaf8bac2177a269b7a49d90d4508c5a9'),
  },
});
