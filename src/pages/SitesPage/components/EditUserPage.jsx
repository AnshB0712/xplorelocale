import {
  Button,
  Container,
  Input,
  Stack,
  Divider,
  Text,
  Switch,
} from "@mantine/core";
import { useState } from "react";

const AddUserForm = ({ dispatch, closeModal, user }) => {
  const [formState, setFormState] = useState(user);

  const onInputChange = (e) =>
    setFormState((p) => ({ ...p, [e.target.name]: e.target.value }));

  const onSubmit = () => {
    dispatch({
      type: "UPDATE",
      payload: formState,
    });
    closeModal();
  };

  return (
    <Container styles={{ root: { maxWidth: "400px" } }}>
      <Stack component={"form"}>
        <Input.Wrapper label="Name">
          <Input
            radius="md"
            placeholder="John Doe"
            required
            name="name"
            value={formState.name}
            onChange={onInputChange}
          />
        </Input.Wrapper>
        <Input.Wrapper label="User Status">
          <Switch
            checked={formState.status}
            onChange={(event) =>
              setFormState((p) => ({ ...p, status: event.target.checked }))
            }
          />
        </Input.Wrapper>
      </Stack>
      <Button
        display={"block"}
        my={"lg"}
        radius={"md"}
        fullWidth
        type="submit"
        onClick={onSubmit}
      >
        Add
      </Button>
    </Container>
  );
};

const EditUserPage = ({ dispatch, closeModal, user }) => {
  return (
    <Container>
      <Text ta={"center"} styles={{ root: { fontSize: "22px" } }}>
        Edit User
      </Text>
      <Divider my="sm" />
      <AddUserForm dispatch={dispatch} closeModal={closeModal} user={user} />
    </Container>
  );
};

export default EditUserPage;
