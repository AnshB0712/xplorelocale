import React, { useReducer, useState } from "react";
import {
  ActionIcon,
  Stack,
  Group,
  Table,
  Button,
  Modal,
  Checkbox,
} from "@mantine/core";
import {
  IconSortAscendingLetters,
  IconAdjustments,
  IconTrash,
  IconSortAscendingNumbers,
} from "@tabler/icons-react";
import { DatePickerInput } from "@mantine/dates";
import EditUserPage from "./EditUserPage";
import AddUserPage from "./AddUserPage";

// Reducer for user data
const usersReducer = (users, action) => {
  const { type, payload } = action;

  if (type === "ADD") {
    return [...users, payload];
  }

  if (type === "UPDATE") {
    return users.map((u) => {
      if (u.id === payload.id) return payload;
      return u;
    });
  }

  if (type === "DELETE") {
    return users.filter((u) => u.id !== payload.id);
  }
};

// Reducer for filters
const filterReducer = (filters, action) => {
  const { type, payload } = action;

  const initialState = {
    ascendingName: false,
    ascendingCreatedAt: false,
    filteredCreatedAt: null,
  };

  if (type === "NAME_ASCENDING") {
    return { ...initialState, ascendingName: !filters.ascendingName };
  }

  if (type === "CREATED_AT_ASCENDING") {
    return { ...initialState, ascendingCreatedAt: !filters.ascendingCreatedAt };
  }

  if (type === "FILTERED_CREATED_AT") {
    return {
      ...initialState,
      filteredCreatedAt: payload === "1/1/1970" ? null : payload,
    };
  }

  return filters;
};

// Function to filter data based on filters
const applyFilters = (data, filters) => {
  if (filters.ascendingName) {
    return [...data].sort((a, b) => a.name.localeCompare(b.name));
  }

  if (filters.ascendingCreatedAt) {
    return [...data].sort(
      (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
    );
  }

  if (filters.filteredCreatedAt) {
    return data.filter(
      (item) =>
        item.createdAt ===
        new Date(filters.filteredCreatedAt).toLocaleDateString()
    );
  }

  return data;
};

// Function to render table rows
const renderTableRows = (users, onEdit, onDelete, columnView) => {
  return users.map((user) => (
    <Table.Tr key={user.name}>
      <Table.Td>{user.name}</Table.Td>
      {columnView.createdAt && <Table.Td>{user.createdAt}</Table.Td>}
      {columnView.status && (
        <Table.Td>{user.status ? "Active" : "InActive"}</Table.Td>
      )}
      <Table.Td>
        <Group gap={5}>
          <ActionIcon
            variant="filled"
            color="rgba(245, 51, 51, 1)"
            aria-label="Settings"
            onClick={() => onDelete(user.id)}
          >
            <IconTrash style={{ width: "70%", height: "70%" }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            onClick={() => onEdit(user.id)}
            variant="outline"
            color="gray"
            aria-label="Settings"
          >
            <IconAdjustments
              style={{ width: "70%", height: "70%" }}
              stroke={1.5}
            />
          </ActionIcon>
        </Group>
      </Table.Td>
    </Table.Tr>
  ));
};

// DataTable component
export const DataTable = ({ data }) => {
  const [columnView, setColumnView] = useState({
    createdAt: true,
    status: true,
  });
  const [modalState, setModalState] = useState({
    isOpen: false,
    type: "",
    id: "",
  });
  const [users, usersDispatch] = useReducer(usersReducer, data);
  const [filters, filtersDispatch] = useReducer(filterReducer, {
    ascendingName: false,
    ascendingCreatedAt: false,
    filteredCreatedAt: null,
  });

  const rows = renderTableRows(
    applyFilters(users, filters),
    (id) => openModal("edit", id),
    (id) =>
      usersDispatch({
        type: "DELETE",
        payload: { id },
      }),
    columnView
  );

  const openModal = (type, id) => {
    setModalState({
      isOpen: true,
      type,
      id,
    });
  };

  const closeModal = () => {
    setModalState({
      isOpen: false,
      id: "",
      type: "",
    });
  };

  return (
    <>
      <Stack>
        <Group justify={"space-between"} px={5}>
          <Button onClick={() => openModal("add")}>Add User</Button>

          <>
            <Group>
              <Checkbox
                checked={columnView.createdAt}
                onChange={(event) =>
                  setColumnView((p) => ({
                    ...p,
                    createdAt: event.target.checked,
                  }))
                }
                label="CreatedAt"
              />
              <Checkbox
                checked={columnView.status}
                onChange={(event) =>
                  setColumnView((p) => ({ ...p, status: event.target.checked }))
                }
                label="Status"
              />
            </Group>
          </>

          <Group gap={8}>
            <DatePickerInput
              size="xs"
              clearable
              value={filters.filteredCreatedAt}
              placeholder="Filter CreateAt"
              onChange={(e) =>
                filtersDispatch({
                  type: "FILTERED_CREATED_AT",
                  payload: e,
                })
              }
            />
            <ActionIcon
              variant="outline"
              color={filters.ascendingName ? "blue" : "gray"}
              onClick={() => filtersDispatch({ type: "NAME_ASCENDING" })}
              aria-label="Settings"
            >
              <IconSortAscendingLetters
                style={{ width: "70%", height: "70%" }}
                stroke={1.5}
              />
            </ActionIcon>
            <ActionIcon
              variant="outline"
              color={filters.ascendingCreatedAt ? "blue" : "gray"}
              onClick={() => filtersDispatch({ type: "CREATED_AT_ASCENDING" })}
              aria-label="Settings"
            >
              <IconSortAscendingNumbers
                style={{ width: "70%", height: "70%" }}
                stroke={1.5}
              />
            </ActionIcon>
          </Group>
        </Group>
        <Table>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Name</Table.Th>
              {columnView.createdAt && <Table.Th>CreatedAt</Table.Th>}
              {columnView.status && <Table.Th>Status</Table.Th>}
              <Table.Th>Actions</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </Stack>
      <Modal
        opened={modalState.isOpen}
        centered
        withCloseButton
        closeOnClickOutside
        onClose={closeModal}
      >
        {modalState.type === "add" ? (
          <AddUserPage dispatch={usersDispatch} closeModal={closeModal} />
        ) : (
          <EditUserPage
            user={
              modalState.id ? users.find((u) => u.id === modalState.id) : {}
            }
            dispatch={usersDispatch}
            closeModal={closeModal}
          />
        )}
      </Modal>
    </>
  );
};
