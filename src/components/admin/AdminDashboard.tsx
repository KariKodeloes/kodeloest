import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { useAuth } from '../../hooks/useAuth';
import { mockProjects } from '../../data/mockData';
import ProjectEditor from './ProjectEditor';
import BulkAltTextEditor from './BulkAltTextEditor';
import SiteContentEditor from './SiteContentEditor';
import { LogOut, Edit, Plus, Type, FileText } from 'lucide-react';

const AdminDashboard = () => {
  const { logout, phoneNumber } = useAuth();
  const [editingProject, setEditingProject] = useState<string | null>(null);
  const [showNewProject, setShowNewProject] = useState(false);
  const [showBulkAltText, setShowBulkAltText] = useState(false);
  const [showSiteContentEditor, setShowSiteContentEditor] = useState(false);

  const handleLogout = () => {
    logout();
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

  if (showBulkAltText) {
    return (
      <BulkAltTextEditor
        onClose={() => setShowBulkAltText(false)}
      />
    );
  }

  if (showSiteContentEditor) {
    return (
      <SiteContentEditor
        onClose={() => setShowSiteContentEditor(false)}
      />
    );
  }

  const projectsWithoutAltText = mockProjects.filter(project => !project.altText).length;

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
          <h2 className="text-xl font-quicksand font-medium">Prosjekter</h2>
          <div className="flex space-x-3">
            <Button 
              variant="outline" 
              onClick={() => setShowSiteContentEditor(true)}
              className="text-gray-900"
            >
              <FileText className="h-4 w-4 mr-2" />
              Rediger nettstedsinnhold
            </Button>
            <Button 
              variant="outline" 
              onClick={() => setShowBulkAltText(true)}
              className={`text-gray-900 ${projectsWithoutAltText > 0 ? 'border-orange-500 !text-orange-700' : ''}`}
            >
              <Type className="h-4 w-4 mr-2" />
              Rediger alt-tekst
              {projectsWithoutAltText > 0 && (
                <span className="ml-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                  {projectsWithoutAltText}
                </span>
              )}
            </Button>
            <Button onClick={() => setShowNewProject(true)}>
              <Plus className="h-4 w-4 mr-2" />
              Nytt prosjekt
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockProjects.map((project) => (
            <Card key={project.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <div className="aspect-square overflow-hidden rounded-md mb-2">
                  <img
                    src={project.mainImage}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
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
      </div>
    </div>
  );
};

export default AdminDashboard;
