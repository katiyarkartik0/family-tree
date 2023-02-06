import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { selectedIndividual } from "../../helpers/recursiveHelpers";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const card = ({ personalInformation = {} }) => {
  const { name, spouse, location, birthYear, presentAddress } =
    personalInformation;
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
          <Typography variant="body2">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
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
    <Box sx={{ minWidth: 275 }} >
      <Card  variant="outlined">{card(currentDisplayIndividual)}</Card>
    </Box>
  );
}
