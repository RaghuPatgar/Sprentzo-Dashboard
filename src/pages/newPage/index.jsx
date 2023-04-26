import React from 'react';
import { Container } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

    const newPage = () => {
        //meta title
        document.title="New Page | Skote - React Admin & Dashboard Template";
        return (
            <>
                <div className="page-content">
                <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="PracticePage" breadcrumbItem="hello" />

          <h4>welcome to you</h4>

        </Container>
                </div>
            </>
        );
    }

export default newPage;        