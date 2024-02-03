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
import generateId from "../../../utils/generateId";

const AddUserForm = ({ dispatch, closeModal }) => {
  const [formState, setFormState] = useState({
    name: "",
    status: "",
  });

  const onInputChange = (e) =>
    setFormState((p) => ({ ...p, [e.target.name]: e.target.value }));

  const onSubmit = () => {
    dispatch({
      type: "ADD",
      payload: {
        ...formState,
        createdAt: new Date().toLocaleDateString(),
        id: generateId(),
      },
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

const AddUserPage = ({ dispatch, closeModal }) => {
  return (
    <Container>
      <Text ta={"center"} styles={{ root: { fontSize: "22px" } }}>
        Add User
      </Text>
      <Divider my="sm" />
      <AddUserForm dispatch={dispatch} closeModal={closeModal} />
    </Container>
  );
};

export default AddUserPage;
