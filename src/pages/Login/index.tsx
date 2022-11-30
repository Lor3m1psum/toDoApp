import { FC } from "react";
import Layout from "../../components/layout";

type Props = {
  onChangePage: (page: string) => void;
};
const Login: FC<Props> = (props) => {
  const { onChangePage } = props;
  return (
    <div className="login">
      <Layout onChangePage={onChangePage} />
    </div>
  );
};

export default Login;
