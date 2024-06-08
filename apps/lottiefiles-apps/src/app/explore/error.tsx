import GlobalError, { GlobalErrorProps } from '../global-error';

export default function Error(props: GlobalErrorProps) {
  return <GlobalError {...props} />;
}
