//Import service functions that contain the actual logic
import {
  getLoadsByToken,
  UpdateLoadAssignmentToken,
} from "../services/loadService.js";
import { jwtDecode } from "jwt-decode"; // use jwt decode function to decode demo service api token
// GET /loads/:
export const handleGetLoads = async (req, res) => {
  const eleoskey = req.headers["eleos-platform-key"];
  try {
    if (eleoskey === process.env.ELEOS_PLATFORM_KEY) {
      console.log("did we make it here");
      // Extract the token from the path parameter - get the token within the URL
      console.log("we have arrived here");
      const ogauthorization = req.headers.authorization; //saving token
      console.log("We have arrived to ogauthroization" + ogauthorization);
      const tokenString = "Token token="; //setting string so we can remove from autorization
      //const indexOfToken = ogauthorization.indexOf(tokenString);
      const token = ogauthorization.substring(tokenString.length);
      console.log("this should be without Token token; " + token);
      try {
        const decoded_username = jwtDecode(token); //saving token
        const username = Object.values(decoded_username)[0];
        const update = await UpdateLoadAssignmentToken(token,username);
        // Try to get the user associated with this token and if not then throw an error
        const loads_data = await getLoadsByToken(token);
        res.status(200).json(loads_data);
      } catch (error) {
        // Send back a general error if the token is invalid
        res.status(400).send("Failed to get loads - " + error);
      }
    }
  } catch (error) {
    res.status(400).send("Bahhhhd Eleos Platform key - " + error);
  }
};

// REFERENCE CODE
// const originalString = "prefix-token-suffix";
// const token = "-token";
// const indexOfToken = originalString.indexOf(token);

// if (indexOfToken !== -1) {
//   // Add the length of the token to get the start of the desired part
//   const newString = originalString.substring(indexOfToken + token.length);
//   console.log(newString); // Output: -suffix
// } else {
//   console.log("Token not found.");
// }

// const (constant variable) means things should not change for the duration of the code
