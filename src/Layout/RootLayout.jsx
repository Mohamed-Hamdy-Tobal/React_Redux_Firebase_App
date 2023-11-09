import {
    Container,
    Row,
    Col
} from "react-bootstrap";
import Header from "../Components/Header";
import { Outlet } from "react-router-dom";
import { AuthProvider } from "../Context/AuthContext";

function Layout() {
return (
    <Container>
        <Header />
        <Row>
            <Col xs={{ span: 8, offset: 2 }}>
                <AuthProvider><Outlet/></AuthProvider>
            </Col>
        </Row>
    </Container>
);
}

export default Layout;
