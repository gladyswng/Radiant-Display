declare module "*.svg" {
  import * as React from 'react';
  const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}

declare module "*.jpg" {
  // const content: any;
  // export default content;

}

