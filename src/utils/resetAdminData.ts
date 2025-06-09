
// Utility function to reset admin localStorage data
export const resetAdminData = () => {
  console.log('Resetting admin data...');
  
  // Remove all admin-related localStorage keys
  localStorage.removeItem('admin_deleted_projects');
  localStorage.removeItem('admin_project_edits');
  localStorage.removeItem('admin_new_projects');
  
  console.log('Admin data reset complete');
  
  // Reload the page to see the changes
  window.location.reload();
};

// Function to check current admin data state
export const checkAdminDataState = () => {
  const deletedProjects = localStorage.getItem('admin_deleted_projects');
  const editedProjects = localStorage.getItem('admin_project_edits');
  const newProjects = localStorage.getItem('admin_new_projects');
  
  console.log('Current admin data state:');
  console.log('Deleted projects:', deletedProjects ? JSON.parse(deletedProjects) : 'None');
  console.log('Edited projects:', editedProjects ? JSON.parse(editedProjects) : 'None');
  console.log('New projects:', newProjects ? JSON.parse(newProjects) : 'None');
};
