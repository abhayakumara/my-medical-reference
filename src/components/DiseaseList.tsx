import { List, ListItem } from "@mui/material";
import Disease from "./Disease";
import { DiseaseType } from "../types/DiseaseType";

const DiseaseList = (diseases: DiseaseType[]) => {
  return (
    <List>
      {diseases.map((disease, index) => (
        <ListItem key={index}>
          {" "}
          <Disease
            diseaseName={disease.diseaseName}
            overview={disease.overview}
            prescriptions={disease.prescriptions}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default DiseaseList;
