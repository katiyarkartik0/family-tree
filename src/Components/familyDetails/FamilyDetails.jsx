import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { selectedIndividual } from "helpers/recursiveHelpers";

const card = ({ personalInformation = {} }) => {
  const {
    name,
    spouse,
    location,
    birthYear,
    presentAddress,
    familyPhotos = [],
  } = personalInformation;

  const renderFamilyPhotos = (familyPhotos = []) => {
    let photos = [];
    const numberOfRenders = Math.max(2, familyPhotos.length) - 1;
    for (let i = 0; i <= numberOfRenders; i++) {
      photos.push(
        <div style={{ padding: "4px" }}>
          <div
            style={{
              border: "solid black",
              width: "200px",
              height: "220px",
              padding: "7.5px",
            }}
          >
            {familyPhotos.length > i ? (
              <img
                src={familyPhotos[i]}
                alt="family"
                style={{ width: "200px", height: "220px" }}
              ></img>
            ) : (
              ""
            )}
          </div>
        </div>
      );
    }
    return photos;
  };

  return (
    <React.Fragment>
      <div style={{ width: "100vw", height: "100vh" }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Family Details
          </Typography>
          <Typography variant="h5" component="div">
            name:{name}
            <br></br>
            spouse:{spouse}
            <br></br>
            location:{location}
            <br></br>
            birth year:{birthYear}
            <br></br>
            present address: {presentAddress}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            family photo
          </Typography>
          <div style={{ display: "flex" }}>
            {renderFamilyPhotos(familyPhotos)}
          </div>
        </CardContent>
      </div>
    </React.Fragment>
  );
};

export default function FamilyDetails() {
  const individual = selectedIndividual || {};
  const [currentDisplayIndividual, setCurrentDisplayIndividual] =
    React.useState(individual);

  React.useEffect(() => {
    setCurrentDisplayIndividual(individual);
  }, [individual]);

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card(currentDisplayIndividual)}</Card>
    </Box>
  );
}
