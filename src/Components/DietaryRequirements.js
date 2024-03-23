import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";

const DietaryRequirements = ({ form, index }) => {
  const [options, setOptions] = useState([]);
  const [otherValue, setOtherValue] = useState();
  const [otherChecked, setOtherChecked] = useState(false);
  const [yesNo, setYesNo] = useState("no");

  useEffect(() => {
    const getDiet = async () => {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/wedding/diet`);
      const j = await res.json();
      setOptions(j.data);
    };

    getDiet();
  }, []);

  if (!options.length) {
    return null;
  }

  return (
    <Grid container spacing={2} sx={{ mb: 3 }}>
      <Grid item xs={12}>
        <FormLabel>
          Does person {index + 1} have any dietary requirements?
        </FormLabel>
      </Grid>
      <Grid item xs={12}>
        <FormControl>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            onChange={(e) => {
              setYesNo(e.target.value);
              if (e.target.value === "no") {
                form.setFieldValue(
                  `responses[${index}].dietaryRequirements`,
                  []
                );
              }
            }}
          >
            <FormControlLabel
              value="yes"
              control={<Radio checked={yesNo === "yes"} />}
              label="Yes"
            />
            <FormControlLabel
              value="no"
              control={<Radio checked={yesNo === "no"} />}
              label="No"
            />
          </RadioGroup>
        </FormControl>
      </Grid>
      {yesNo === "yes" && (
        <Grid item xs={12}>
          <FormGroup>
            {options.map((opt) => (
              <FormControlLabel
                control={
                  <Checkbox
                    checked={form?.values?.responses?.[
                      index
                    ]?.dietaryRequirements?.some((id) => id === opt.id)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        form.setFieldValue(
                          `responses[${index}].dietaryRequirements`,
                          [
                            ...(form?.values?.responses?.[index]
                              ?.dietaryRequirements
                              ? form?.values?.responses?.[index]
                                  ?.dietaryRequirements
                              : []),
                            opt.id,
                          ]
                        );
                      } else {
                        form.setFieldValue(
                          `responses[${index}].dietaryRequirements`,
                          form?.values?.responses?.[
                            index
                          ]?.dietaryRequirements?.filter((d) => d !== opt.id)
                        );
                      }
                    }}
                  />
                }
                label={opt.name}
              />
            ))}
            <FormControlLabel
              control={
                <Checkbox
                  checked={otherChecked}
                  onChange={(e) => {
                    if (!e.target.checked) {
                      setOtherValue("");
                      form.setFieldValue(
                        `responses[${index}].dietaryRequirements`,
                        form?.values?.responses?.[
                          index
                        ]?.dietaryRequirements?.filter((d) => d !== otherValue)
                      );
                    }
                    setOtherChecked(e.target.checked);
                  }}
                />
              }
              label="Other"
            />
          </FormGroup>
          {otherChecked && (
            <TextField
              size="small"
              name="other"
              label="Other, please specify"
              value={otherValue}
              onChange={(e) => {
                setOtherValue(e.target.value);
              }}
              onBlur={(e) => {
                form.setFieldValue(`responses[${index}].dietaryRequirements`, [
                  ...(form?.values?.responses?.[index]?.dietaryRequirements
                    ? form?.values?.responses?.[index]?.dietaryRequirements
                    : []),
                  otherValue,
                ]);
              }}
            />
          )}
        </Grid>
      )}
    </Grid>
  );
};

export default DietaryRequirements;
