import { SelectChangeEvent, TextField } from '@mui/material';
import { ChangeEvent, SyntheticEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from '~/components/elements/form/Form';
import Select from '~/components/elements/form/Select';
import { useSaveAdminUser } from '~/hooks/user/admin.hook';
import { useRoleOptions } from '~/hooks/user/role.hook';
import { User } from '~/interface/auth.interface';
interface Props {
  admin?: User;
  loading?: boolean;
}
const AdminTwoForm = ({ admin, loading }: Props) => {
  const navigate = useNavigate();
  const [form, setForm] = useState<any>({});
  const { isLoading: loadingRoles, items: roleOptions = [] } = useRoleOptions();
  const { isLoading: saving, mutate } = useSaveAdminUser({
    id: admin?.id,
  });
  useEffect(() => {
    if (!admin) {
      return;
    }

    setForm(admin);
  }, [admin]);

  const handleChange = ({
    target,
  }: ChangeEvent<{ name: string; value: string }> | SelectChangeEvent) => {
    setForm({ ...form, [target.name]: target.value });
  };
  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    if (saving) {
      return;
    }

    mutate(form);
  };

  const handleCancel = () => {
    navigate('/admin2');
  };

  return (
    <div>
      <Form
        onSubmit={handleSubmit}
        onCancel={handleCancel}
        loading={loading || loadingRoles}
        saving={saving}
      >
        <Select
          name="roleId"
          label="Select-Role"
          options={roleOptions}
          required={true}
          value={form.roleId || ''}
          onChange={handleChange}
        />

        <TextField
          required
          name="firstName"
          id="firstName"
          label="First Name"
          fullWidth
          value={form.firstName}
          onChange={handleChange}
        />
        <TextField
          required
          id="lastName"
          name="lastName"
          label="Last Name"
          fullWidth
          onChange={handleChange}
          value={form.lastName}
        />

        <TextField
          required
          name="email"
          id="email"
          label="Email"
          type="email"
          autoComplete="current-password"
          onChange={handleChange}
          value={form.email}
          fullWidth
        />
        {!admin && (
          <TextField
            id="password"
            name="password"
            label="Password"
            placeholder="Password"
            type="password"
            fullWidth
            required
            onChange={handleChange}
            value={form.password}
          />
        )}
        {!admin && (
          <TextField
            id="password_confirmation"
            name="password_confirmation"
            label="Confirm Password"
            placeholder="Confirm Password"
            type="password"
            fullWidth
            required
            onChange={handleChange}
            value={form.password_confirmation}
          />
        )}
        {/* <Button type="submit" variant="contained" sx={{ mt: 1 }}>
          Submit
        </Button>
        <Button
          variant="outlined"
          sx={{ mt: 1, ml: 1 }}
          color="info"
          onClick={() => {
            navigate('/admin2');
          }}
        >
          Cancel
        </Button> */}
      </Form>
    </div>
  );
};
export default AdminTwoForm;
