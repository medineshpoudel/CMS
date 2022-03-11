import Form from '~/components/elements/form/Form';
import { Box, FormControl, InputLabel, MenuItem, Select, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
// import Select from '~/components/elements/form/Select';
import { useRoleOptions, usePermissionOptions } from '~/hooks/user/role.hook';
const RoleSelect = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState<any>();
  //   const { isLoading: loadingRoles, items: roleOptions = [] } = usePermissionOptions();
  const { isLoading: loadingRoles, items: permissionOptions = [] } = usePermissionOptions();
  // const options = Object.entries(permissionOptions).forEach(([key, value]) => console.log(key));
  const handleCancel = () => {
    navigate('/admin2');
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('hi');
  };
  const pArray = [];
  for (const key in permissionOptions) {
    for (const keys in permissionOptions[key]) {
      pArray.push(keys);
    }
  }

  return (
    <Form onSubmit={handleSubmit} onCancel={handleCancel}>
      <TextField
        required
        name="roleName"
        id="role"
        label="Enter Role"
        fullWidth
        sx={{ mb: 3 }}
        onChange={(e) => setRole(e.target.value)}
        onSubmit={handleSubmit}
      />
      <FormControl>
        <InputLabel id="demo-simple-select-label">Role</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Role"
          //   options={roleOptions}
          required={true}
          //   value={form.roleId || ''}
        >
          {pArray.map((key) => (
            <MenuItem value={key}>{key}</MenuItem>
          ))}
          {/* <MenuItem value={'ten'}>Create </MenuItem>
          <MenuItem>Read</MenuItem>
          <MenuItem>Update</MenuItem>
          <MenuItem>Delete</MenuItem> */}
        </Select>
      </FormControl>
    </Form>
  );
};
export default RoleSelect;
