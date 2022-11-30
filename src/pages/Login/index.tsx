import { FC } from "react";
import Layout from "../../components/layout";


type Props = {
  onChangePage: (value: string) => void;
};
const Login: FC<Props> = ({onChangePage}) => {
  return (
    <div className="login">
      <Layout onChangePage={onChangePage}>
      </Layout>
    </div>
  );
};

export default Login;
