
import React, { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { useAuth } from '../../hooks/useAuth';
import { mockProjects, Project } from '../../data/mockData';
import ProjectEditor from './ProjectEditor';
import { LogOut, Edit, Plus, Image } from 'lucide-react';

const AdminDashboard = () => {
  const { logout, phoneNumber } = useAuth();
  const [editingProject, setEditingProject] = useState<string | null>(null);
  const [showNewProject, setShowNewProject] = useState(false);
  const [allProjects, setAllProjects] = useState<Project[]>([]);

  useEffect(() => {
    // Load all projects (original + new + edited)
    const loadAllProjects = () => {
      console.log('Loading all projects...');
      // Start with original projects
      let projects = [...mockProjects];

      // Add new projects
      const newProjectsData = localStorage.getItem('admin_new_projects');
      if (newProjectsData) {
        const newProjects = JSON.parse(newProjectsData);
        console.log('Found new projects:', newProjects);
        projects = [...projects, ...newProjects];
      }

      // Apply edits to existing projects
      const editsData = localStorage.getItem('admin_project_edits');
      if (editsData) {
        const edits = JSON.parse(editsData);
        console.log('Found project edits:', edits);
        projects = projects.map(project => {
          if (edits[project.id]) {
            const editedProject = { ...project, ...edits[project.id] };
            console.log('Applied edits to project:', project.id, editedProject);
            
            // Ensure mainImage is properly set for display
            if (editedProject.mainImage && !editedProject.images?.includes(editedProject.mainImage)) {
              editedProject.images = [editedProject.mainImage, ...(editedProject.images || [])];
            }
            
            return editedProject;
          }
          return project;
        });
      }

      // Sort by year (newest first) and then by title
      projects.sort((a, b) => {
        if (a.year !== b.year) {
          return b.year - a.year;
        }
        return a.title.localeCompare(b.title);
      });

      console.log('Final projects loaded:', projects);
      setAllProjects(projects);
    };

    loadAllProjects();
  }, [editingProject, showNewProject]);

  const handleLogout = () => {
    logout();
  };

  const isNewProject = (projectId: string) => {
    return projectId.startsWith('new_');
  };

  const isEditedProject = (projectId: string) => {
    if (isNewProject(projectId)) return false;
    const editsData = localStorage.getItem('admin_project_edits');
    if (!editsData) return false;
    const edits = JSON.parse(editsData);
    return !!edits[projectId];
  };

  if (editingProject || showNewProject) {
    return (
      <ProjectEditor
        projectId={editingProject}
        onClose={() => {
          setEditingProject(null);
          setShowNewProject(false);
        }}
        isNewProject={showNewProject}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-quicksand font-semibold">Admin Dashboard</h1>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">Logget inn som: {phoneNumber}</span>
            <Button variant="outline" onClick={handleLogout}>
              <LogOut className="h-4 w-4 mr-2" />
              Logg ut
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-quicksand font-medium">Prosjekter ({allProjects.length})</h2>
          <Button onClick={() => setShowNewProject(true)}>
            <Plus className="h-4 w-4 mr-2" />
            Nytt prosjekt
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allProjects.map((project) => (
            <Card key={project.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <div className="aspect-square overflow-hidden rounded-md mb-2 relative bg-gray-100 flex items-center justify-center">
                  {project.mainImage ? (
                    <img
                      src={project.mainImage}
                      alt={project.altText || project.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        console.error('Failed to load image:', project.mainImage);
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                  ) : null}
                  <div className={`flex items-center justify-center text-gray-400 ${project.mainImage ? 'hidden' : ''}`}>
                    <Image className="h-12 w-12" />
                  </div>
                  {/* Status indicators */}
                  <div className="absolute top-2 right-2 flex gap-1">
                    {isNewProject(project.id) && (
                      <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">
                        NY
                      </span>
                    )}
                    {isEditedProject(project.id) && (
                      <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded">
                        REDIGERT
                      </span>
                    )}
                  </div>
                </div>
                <CardTitle className="text-lg font-quicksand">{project.title}</CardTitle>
                {project.subtitle && (
                  <p className="text-sm text-gray-600 font-oswald">{project.subtitle}</p>
                )}
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-gray-700 line-clamp-2 mb-3 font-oswald font-light">
                  {project.description}
                </p>
                <div className="flex justify-between items-center text-xs text-gray-500 mb-3">
                  <span>{project.category}</span>
                  <span>{project.year}</span>
                </div>
                <div className="space-y-2">
                  <div className="text-xs">
                    <span className="font-medium">Alt-tekst: </span>
                    <span className={project.altText ? 'text-green-600' : 'text-orange-600'}>
                      {project.altText || 'Ikke satt'}
                    </span>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full"
                    onClick={() => setEditingProject(project.id)}
                  >
                    <Edit className="h-3 w-3 mr-1" />
                    Rediger
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {allProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 mb-4">Ingen prosjekter funnet</p>
            <Button onClick={() => setShowNewProject(true)}>
              <Plus className="h-4 w-4 mr-2" />
              Opprett ditt første prosjekt
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
