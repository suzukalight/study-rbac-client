import { check } from '../../../check';
import rules from '../../../rbac-rules';

interface CanParams {
  role: string;
  perform: string;
  data?: Object;
  yes?: Function;
  no?: Function;
}

const Can: React.FC<CanParams> = ({
  children,
  role,
  perform,
  data,
  yes,
  no = () => null,
}) => {
  if (!check(rules, role, perform, data)) return no();
  if (yes) return yes();
  return children;
};

export default Can;
