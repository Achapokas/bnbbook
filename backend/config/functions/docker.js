const axios = require("axios");

module.exports = async () => {
  const { data } = await axios.get(
    "https://services.arcgis.com/afSMGVsC7QlRK1kZ/arcgis/rest/services/Police_Use_of_Force/FeatureServer/0/query?where=1%3D1&outFields=ForceType,Race,Sex,EventAge,TypeOfResistance&outSR=4326&f=json"
  );

  console.log(data);
};
