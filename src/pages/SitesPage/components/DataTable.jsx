import { useReducer } from 'react'
import { ActionIcon,Stack,Group,Table,Button } from '@mantine/core';
import { IconSortAscendingLetters,IconAdjustments,IconTrash,IconSortAscendingNumbers } from '@tabler/icons-react';
import { DatePickerInput } from '@mantine/dates';



const reducer = ({action, payload}) => {
  
}

export const DataTable = ({ data }) => { 
  const [state, dispatch] = useReducer(reducer,{
    users: data,
    filters: {
      ascendingName: true,
      ascendingCreatedAt: false,
      filteredCreatedAt: ''
    }
  });
  
  
  const rows = state.map((user) => (
    <Table.Tr key={user.name}>
      <Table.Td>{user.name}</Table.Td>
      <Table.Td>{user.createdAt}</Table.Td>
      <Table.Td>{user.status}</Table.Td>
      <Table.Td>
        
    <Group gap={5}>
    <ActionIcon variant="filled" color="rgba(245, 51, 51, 1)" aria-label="Settings">
      <IconTrash style={{ width: '70%', height: '70%' }} stroke={1.5} />
    </ActionIcon>
    <ActionIcon variant="outline" color="gray" aria-label="Settings">
      <IconAdjustments style={{ width: '70%', height: '70%' }} stroke={1.5} />
    </ActionIcon>
    </Group>
      </Table.Td>
    </Table.Tr>
  ));
  
  return (
    <Stack>
    <Group justify={'space-between'} px={5}>
    <Button>Add User</Button>
    
    <Group gap={8}>
    <DatePickerInput
     size='xs'
     clearable
      placeholder="Filter via CreateAt"
      onChange={e => console.log(new Date(e).toLocaleDateString())}
    />
    <ActionIcon variant="outline" color="gray"  aria-label="Settings">
      <IconSortAscendingLetters style={{ width: '70%', height: '70%' }} stroke={1.5} />
    </ActionIcon>
    <ActionIcon variant="outline" color="gray" aria-label="Settings">
      <IconSortAscendingNumbers style={{ width: '70%', height: '70%' }} stroke={1.5} />
    </ActionIcon>
    </Group>
    
    </Group>
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Name</Table.Th>
          <Table.Th>CreatedAt</Table.Th>
          <Table.Th>Status</Table.Th>
          <Table.Th>Actions</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
    </Stack>
  );
  
}