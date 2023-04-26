import React from 'react';
import { Container } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

    const AddProduct = () => {
        //meta title
        document.title="New Page | Skote - React Admin & Dashboard Template";
        return (
            <>
                <div className="page-content">
                <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="PracticePage" breadcrumbItem="Product Add" />
          <div>
        
          {/* <form className="app-search d-none d-lg-block">
              <div className="position-relative">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search..."
                />
                <span className="bx bx-search-alt" />
              </div>
            </form> */}
            <div style={{display:'flex', flexDirection:'row'}}>
                <input type="text" placeholder='search here' />
                <button type="click"
                    onClick={(e) => {

                        alert("message Sent");
                    }} style={{width:70, height:25}}>Click</button>
            </div>
            
          </div>

        </Container>
                </div>
            </>
        );
    }

export default AddProduct;    