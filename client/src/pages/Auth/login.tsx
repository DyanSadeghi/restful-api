import LoginForm from "../../components/Login/LoginForm";
import LoginHeader from "../../components/Login/LoginHeader";
import Layout from "../../layout";

const Login = () => {
    return (
        <Layout padding>
            <LoginHeader />
            <LoginForm />
        </Layout>
    );
};

export default Login;
