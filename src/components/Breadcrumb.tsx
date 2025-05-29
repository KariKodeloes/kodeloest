
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface BreadcrumbItem {
  title: string;
  path: string;
}

const Breadcrumb = () => {
  const location = useLocation();
  
  const pathMap: Record<string, string> = {
    '/': 'Hjem',
    '/bilder': 'Bildekunst',
    '/bilder/akvareller': 'Akvareller',
    '/bilder/mixed-media': 'Mixed Media',
    '/bilder/strek': 'Strek',
    '/foto': 'Foto',
    '/foto/ved-sjoen': 'Ved sjøen',
    '/foto/i-fjellet': 'I fjellet',
    '/foto/flora': 'Flora',
    '/foto/byliv': 'Byliv',
    '/som': 'Søm',
    '/som/redesign': 'Redesign',
    '/som/gjenbruk': 'Gjenbruk',
    '/som/rett-fra-rullen': 'Rett fra rullen',
    '/design': 'Design',
    '/diy': 'DIY',
    '/om-meg': 'Om meg',
  };

  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const breadcrumbs: BreadcrumbItem[] = [{ title: 'Hjem', path: '/' }];

    if (pathSegments.length === 0) return breadcrumbs;

    let currentPath = '';
    pathSegments.forEach((segment) => {
      currentPath += `/${segment}`;
      const title = pathMap[currentPath] || segment;
      breadcrumbs.push({ title, path: currentPath });
    });

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  if (breadcrumbs.length <= 1) return null;

  return (
    <nav aria-label="Breadcrumb" className="bg-muted px-4 py-2">
      <div className="max-w-7xl mx-auto">
        <ol className="flex items-center space-x-2 text-sm">
          {breadcrumbs.map((crumb, index) => (
            <li key={crumb.path} className="flex items-center">
              {index > 0 && (
                <span className="material-icon text-xs mx-2 text-muted-foreground">
                  chevron_right
                </span>
              )}
              {index === breadcrumbs.length - 1 ? (
                <span className="text-foreground font-medium" aria-current="page">
                  {crumb.title}
                </span>
              ) : (
                <Link
                  to={crumb.path}
                  className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
                >
                  {crumb.title}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumb;
