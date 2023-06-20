import RegisterForm from "../../components/Register/RegisterForm";
import RegisterHeader from "../../components/Register/RegisterHeader";
import Layout from "../../layout";

const Login = () => {
    return (
        <Layout padding>
            <RegisterHeader />
            <RegisterForm />
        </Layout>
    );
};

export default Login;
