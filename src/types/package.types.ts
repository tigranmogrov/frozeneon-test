export interface ILinks {
  npm: string;
  homepage: string;
  repository?: string;
  bugs?: string;
}

export interface IAuthor {
  name: string;
  email?: string;
  url?: string;
  username?: string;
}

export interface IPublisher {
  username: string;
  email: string;
}

export interface IMaintainer {
  username: string;
  email: string;
}

export interface IPackage {
  name: string;
  scope: string;
  version: string;
  description: string;
  keywords?: string[];
  date: string;
  links: ILinks;
  author?: IAuthor;
  publisher: IPublisher;
  maintainers: IMaintainer[];
}

export interface IFlags {
  insecure: number;
  unstable?: boolean;
}

export interface IDetail {
  quality: number;
  popularity: number;
  maintenance: number;
}

export interface IScore {
  final: number;
  detail: IDetail;
}

export interface IObject {
  package: IPackage;
  flags: IFlags;
  score: IScore;
  searchScore: number;
}

export interface IPackageData {
  objects: IObject[];
  total: number;
  time: string;
}

export interface IPackageState {
  packages: IObject[];
  searchText: string;
  totalSize: number;
  currentPage: number;
  limit: number;
  isLoading: boolean;
}
