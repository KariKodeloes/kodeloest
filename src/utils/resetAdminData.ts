// Utility function to reset admin localStorage data
export const resetAdminData = () => {
  console.log('Resetting admin data...');
  
  try {
    // Remove all admin-related localStorage keys
    localStorage.removeItem('admin_deleted_projects');
    localStorage.removeItem('admin_project_edits');
    localStorage.removeItem('admin_new_projects');
    
    // Also clear any corrupted admin auth if needed
    const authData = localStorage.getItem('admin_auth');
    if (authData) {
      try {
        const parsed = JSON.parse(authData);
        // Keep auth but clear any corrupted data
        console.log('Admin auth preserved');
      } catch (e) {
        console.log('Clearing corrupted admin auth');
        localStorage.removeItem('admin_auth');
      }
    }
    
    console.log('Admin data reset complete');
    console.log('Remaining localStorage keys:', Object.keys(localStorage));
    
  } catch (error) {
    console.error('Error during reset:', error);
    // Force clear everything admin-related
    for (let i = localStorage.length - 1; i >= 0; i--) {
      const key = localStorage.key(i);
      if (key && key.startsWith('admin_')) {
        localStorage.removeItem(key);
      }
    }
  }
  
  // Force reload to see the changes
  window.location.reload();
};

// Function to check current admin data state
export const checkAdminDataState = () => {
  console.log('=== ADMIN DATA STATE CHECK ===');
  
  const deletedProjects = localStorage.getItem('admin_deleted_projects');
  const editedProjects = localStorage.getItem('admin_project_edits');
  const newProjects = localStorage.getItem('admin_new_projects');
  
  console.log('Deleted projects raw:', deletedProjects);
  console.log('Edited projects raw:', editedProjects);
  console.log('New projects raw:', newProjects);
  
  try {
    console.log('Deleted projects parsed:', deletedProjects ? JSON.parse(deletedProjects) : 'None');
    console.log('Edited projects parsed:', editedProjects ? JSON.parse(editedProjects) : 'None');
    console.log('New projects parsed:', newProjects ? JSON.parse(newProjects) : 'None');
  } catch (error) {
    console.error('Error parsing localStorage data:', error);
  }
  
  console.log('=== END ADMIN DATA STATE CHECK ===');
};

// Function to force clear corrupted data
export const forceCleanAdminData = () => {
  console.log('Force cleaning admin data...');
  
  // Clear all possible admin keys
  const keysToRemove = [
    'admin_deleted_projects',
    'admin_project_edits', 
    'admin_new_projects'
  ];
  
  keysToRemove.forEach(key => {
    localStorage.removeItem(key);
    console.log(`Removed: ${key}`);
  });
  
  // Verify they're gone
  keysToRemove.forEach(key => {
    const value = localStorage.getItem(key);
    console.log(`${key} after removal:`, value);
  });
  
  console.log('Force clean complete');
  window.location.reload();
};
