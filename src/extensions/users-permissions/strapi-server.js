module.exports = ( plugin ) => {
  plugin.controllers.user.me = async ( ctx ) => {
    const user = ctx.state.user;

    if (!user) {
      return ctx.unauthorized();
    }

    // ctx.body = await sanitizeOutput(user, ctx);
    ctx.body = await strapi.query("plugin::users-permissions.user").findOne({ where: { id: user.id }, populate: ['family', 'profilePicture']})
  };

  return plugin;
}