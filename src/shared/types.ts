export enum SelectedPage {
  Home = 'home',
  ContactUs = 'contactus',
  Benefits = 'benefits',
  OurClasses = 'ourclasses',
}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface ClassType {
  name: string;
  description?: string;
  image: string;
}
// export const selectedPage = {
//   Home: 'home',
//   ContactUs: 'contactus',
//   Benefits: 'benefits',
//   OurClass: 'ourclass',
//   sales:'sales'
// } as const;

// export type selectedPageType = typeof selectedPage;
