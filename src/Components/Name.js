import { Grid, TextField } from "@mui/material";
import React from "react";

const Name = ({ form, index }) => {
  return (
    <>
      <Grid container spacing={2} sx={{ mb: 2 }}>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            name={`responses[${index}].firstName`}
            onChange={(e) =>
              form.setFieldValue(
                `responses[${index}].firstName`,
                e.target.value
              )
            }
            placeholder="First name"
            value={form?.values?.responses?.[index]?.firstName}
            error={
              form?.touched?.responses?.[index]?.firstName &&
              form?.errors?.responses?.[index]?.firstName
            }
            helperText={
              form?.touched?.responses?.[index]?.firstName &&
              form?.errors?.responses?.[index]?.firstName
            }
            onBlur={() =>
              form.setFieldTouched(`responses[${index}].firstName`, true)
            }
            size="small"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            name={`responses[${index}].lastName`}
            onChange={(e) =>
              form.setFieldValue(`responses[${index}].lastName`, e.target.value)
            }
            placeholder="Last name"
            value={form?.values?.responses?.[index]?.lastName}
            error={
              form?.touched?.responses?.[index]?.lastName &&
              form?.errors?.responses?.[index]?.lastName
            }
            helperText={
              form?.touched?.responses?.[index]?.lastName &&
              form?.errors?.responses?.[index]?.lastName
            }
            onBlur={(e) =>
              form.setFieldTouched(`responses[${index}].lastName`, true)
            }
            size="small"
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Name;
