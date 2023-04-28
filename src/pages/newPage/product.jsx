import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dropzone from "react-dropzone";
import { Button, Card, CardBody, CardTitle, Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";

//Import Date Picker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

const AddProduct = () => {

  //meta title
  document.title = "Create New Project | Skote - Vite React Admin & Dashboard Template";

  const [startDate, setstartDate] = useState(new Date());
  const [endDate, setendDate] = useState(new Date());
  const [selectedFiles, setselectedFiles] = useState([]);

  const startDateChange = date => {
    setstartDate(date);
  };

  const endDateChange = date => {
    setendDate(date);
  };

  function handleAcceptedFiles(files) {
    files.map(file =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
        formattedSize: formatBytes(file.size)
      })
    );

    setselectedFiles(files);
  }

  function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Projects" breadcrumbItem="Create New" />

          <Row>
            <Col lg="12">
              <Card>
                <CardBody>
                  <CardTitle className="mb-4">Create New Product</CardTitle>

                  <Form>
                    <FormGroup className="mb-4" row>
                      <Label htmlFor="projectname" className="col-form-label col-lg-2">
                        Product Name
                      </Label>
                      <Col lg="10">
                        <Input
                          id="projectname"
                          name="projectname"
                          type="text"
                          className="form-control"
                          placeholder="Enter Product Name..."
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup className="mb-4" row>
                      <Label
                        htmlFor="projectdesc"
                        className="col-form-label col-lg-2"
                      >
                        Product Description
                      </Label>
                      <Col lg="10">
                        <textarea
                          className="form-control"
                          id="projectdesc"
                          rows="3"
                          placeholder="Enter Product Description..."
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup className="mb-4" row>
                      <Label htmlFor="projectprice" className="col-form-label col-lg-2">
                        Product Price
                      </Label>
                      <Col lg="10">
                        <Input
                          id="projectprice"
                          name="projectprice"
                          type="text"
                          className="form-control"
                          placeholder="Enter Product Price..."
                        />
                      </Col>
                    </FormGroup>
                    {/* <FormGroup className="mb-4" row>
                      <Label htmlFor="projectrent" className="col-form-label col-lg-2">
                        Rent
                      </Label>
                      <Col lg="10">
                        <Input
                          id="projectrent"
                          name="projectrent"
                          type="checkbox"
                          className="form-check-input"
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup className="mb-4" row>
                      <Label htmlFor="projectbuy" className="col-form-label col-lg-2">
                        Buy
                      </Label>
                      <Col lg="10">
                        <Input
                          id="projectbuy"
                          name="projectbuy"
                          type="checkbox"
                          className="form-check-input"
                        />
                      </Col>
                    </FormGroup> */}

                    <FormGroup className="mb-4" row>
                      <Label htmlFor="projectrentprice" className="col-form-label col-lg-2">
                        Rent Price
                      </Label>
                      <Col lg="10">
                        <Input
                          id="projectrentprice"
                          name="projectrentprice"
                          type="number"
                          className="form-control"
                          placeholder="Enter Rent Price..."
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup className="mb-4" row>
                      <Label htmlFor="projectbuyprice" className="col-form-label col-lg-2">
                        Buy Price
                      </Label>
                      <Col lg="10">
                        <Input
                          id="projectbuyprice"
                          name="projectbuyprice"
                          type="number"
                          className="form-control"
                          placeholder="Enter Buy Price..."
                        />
                      </Col>
                    </FormGroup>
                   

                  </Form>


                  <FormGroup className="mb-4" row>
                    <label htmlFor="projectimage" className="col-form-label col-lg-2">
                      Product Image
                    </label>
                    <Col lg="10">
                      <Dropzone onDrop={handleAcceptedFiles}>
                        {({ getRootProps, getInputProps }) => (
                          <div className="dropzone">
                            <div className="dz-message needsclick" {...getRootProps()}>
                              <input {...getInputProps()} />
                              <div className="dz-message needsclick">
                                <div className="mb-3">
                                  <i className="display-4 text-muted bx bxs-cloud-upload" />
                                </div>
                                <h4>Drop files here or click to upload.</h4>
                              </div>
                            </div>
                          </div>
                        )}
                      </Dropzone>
                      <div className="dropzone-previews mt-3" id="file-previews">
                        {selectedFiles.map((f, i) => {
                          return (
                            <Card
                              className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"
                              key={i + "-file"}
                            >
                              <div className="p-2">
                                <Row className="align-items-center">
                                  <Col className="col-auto">
                                    <img
                                      data-dz-thumbnail=""
                                      height="80"
                                      className="avatar-sm rounded bg-light"
                                      alt={f.name}
                                      src={f.preview}
                                    />
                                  </Col>
                                  <Col>
                                    <Link
                                      to="#"
                                      className="text-muted font-weight-bold"
                                    >
                                      {f.name}
                                    </Link>
                                    <p className="mb-0">
                                      <strong>{f.formattedSize}</strong>
                                    </p>
                                  </Col>
                                </Row>
                              </div>
                            </Card>
                          );
                        })}
                      </div>
                    </Col>
                  </FormGroup>

                  <Row className="justify-content-end">
                    <Col lg="10">
                      <Button type="submit" color="primary">
                        Create Product
                      </Button>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default AddProduct;
