import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { PARENT_TITLE_FIELD } from "../parent/ParentTitle";
import { SCHOOLDISTRICT_TITLE_FIELD } from "../schoolDistrict/SchoolDistrictTitle";

export const SchoolList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"schools"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Abbreviation" source="abbreviation" />
        <TextField label="Address" source="address" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Logo URL" source="logoUrl" />
        <TextField label="Name" source="name" />
        <ReferenceField label="Parents" source="parent.id" reference="Parent">
          <TextField source={PARENT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="School Code" source="schoolCode" />
        <ReferenceField
          label="School district"
          source="schooldistrict.id"
          reference="SchoolDistrict"
        >
          <TextField source={SCHOOLDISTRICT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="State" source="state" />
        <TextField label="Status" source="status" />
        <TextField label="Township" source="township" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
