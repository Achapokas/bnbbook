'use strict';
const axios = require("axios");

/**
 * An asynchronous bootstrap function that runs before
 * your application gets started.
 *
 * This gives you an opportunity to set up your data model,
 * run jobs, or perform some special logic.
 *
 * See more details here: https://strapi.io/documentation/v3.x/concepts/configurations.html#bootstrap
 */

module.exports = async () => {
  const { data } = await axios.get(
    "https://services.arcgis.com/afSMGVsC7QlRK1kZ/arcgis/rest/services/Police_Use_of_Force/FeatureServer/0/query?where=1%3D1&outFields=ForceType,Race,Sex,EventAge,TypeOfResistance&outSR=4326&f=json"
  );

  console.log("TEST")

  console.log(data);
};