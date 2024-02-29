// data.js

export const columns = [
  { uid: 'name', name: 'Name', sortable: true },
  { uid: 'role', name: 'Role', sortable: true },
  { uid: 'status', name: 'Status', sortable: false },
  { uid: 'actions', name: 'Actions', sortable: false },
];

export const users = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'Administrator',
    team: 'Engineering',
    status: 'active',
    avatar: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    role: 'Developer',
    team: 'Design',
    status: 'paused',
    avatar: 'https://via.placeholder.com/150',
  },
  // Add more user objects as needed
];

export const statusOptions = [
  { uid: 'all', name: 'All' },
  { uid: 'active', name: 'Active' },
  { uid: 'paused', name: 'Paused' },
  { uid: 'vacation', name: 'Vacation' },
  // Add more status options as needed
];

// utils.js

export function capitalize(string) {
  if (!string) return '';
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
