export interface NavLink {
  name: string;
  teluguName?: string;
  href: string;
  sectionId: string;
  isExternal?: boolean;
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}
