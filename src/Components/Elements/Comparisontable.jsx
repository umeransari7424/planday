import React, { useState } from "react";
import { TbEyeFilled } from "react-icons/tb";
import { FiEdit } from "react-icons/fi";
import { BsFillPlusCircleFill } from "react-icons/bs";
import  data   from "../Utils/data.json"
import data1 from "../Utils/data1.json"
import {
  MDBContainer,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from "mdb-react-ui-kit";

function Comparisontable() {
  // const [isHovered, setIsHovered] = useState(false);
  // const handleMouseEnter = () => {
  //   setIsHovered(true);
  // };
  // const handleMouseLeave = () => {
  //   setIsHovered(false);
  // };
  return (
    <div className="comparison-bg">
      <MDBContainer className="container py-5">
        <MDBTable
          responsive
          striped
          className=" text-successtable-border border-light"
        >
          <MDBTableHead className=" text-center">
            <tr>
              <th scope="col" className="monday">
                Monday, June 5th
                <br />
                <TbEyeFilled size={"15px"} /> &nbsp; <FiEdit /> &nbsp; <br />0
                Layer &nbsp;
              </th>
              <th scope="col" className="monday">
                Monday, June 5th
                <br />
                <TbEyeFilled size={"15px"} /> &nbsp; <FiEdit /> &nbsp; <br />0
                Layer &nbsp;
              </th>
              <th scope="col" className="monday">
                Monday, June 5th
                <br />
                <TbEyeFilled size={"15px"} /> &nbsp; <FiEdit /> &nbsp; <br />0
                Layer &nbsp;
              </th>
              <th scope="col" className="monday">
                Monday, June 5th
                <br />
                <TbEyeFilled size={"15px"} /> &nbsp; <FiEdit /> &nbsp; <br />0
                Layer &nbsp;
              </th>
              <th scope="col" className="monday">
                Monday, June 5th
                <br />
                <TbEyeFilled size={"15px"} /> &nbsp; <FiEdit /> &nbsp; <br />0
                Layer &nbsp;
              </th>
              <th scope="col" className="monday">
                Monday, June 5th
                <br />
                <TbEyeFilled size={"15px"} /> &nbsp; <FiEdit /> &nbsp; <br />0
                Layer &nbsp;
              </th>
              <th scope="col" className="monday">
                Monday, June 5th
                <br />
                <TbEyeFilled size={"15px"} /> &nbsp; <FiEdit /> &nbsp; <br />0
                Layer &nbsp;
              </th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {
              data.map((item)=>(
                <tr className="text-center">
              {data1.map( (i) => (
                <td>
                <button type="button"
                
                //  className={` hover-button ${isHovered ? "hovered" : ""}`}
                // onMouseEnter={handleMouseEnter}
                // onMouseLeave={handleMouseLeave}
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                className=" button1"
              >
                {/* {isHovered ? (
                  <BsFillPlusCircleFill color="#199BD7" size={"30px"} />
                ) : (
                  " "
                )}  */}
                <BsFillPlusCircleFill className="plus"   size={"30px"} />
                </button>
                <div
                  className="modal fade"
                  id="exampleModal"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">
                          Modal title
                        </h1>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="modal-body">

                      </div>
                      <div class="modal-footer">
        <button type="button" class="btn btn-light" data-bs-dismiss="modal">Interrupt</button>
        <button type="button" class="btn " disabled>Create</button>
      </div>
                    </div>
                  </div>
                </div>
              </td>

              ))}
                
            </tr>

              ))
            }
            {/* <tr className="text-center">
              <td>
                <button type="button" className={` hover-button ${isHovered ? "hovered" : ""}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                {isHovered ? (
                  <BsFillPlusCircleFill color="#199BD7" size={"30px"} />
                ) : (
                  " "
                )} 
                </button>
                <div
                  className="modal fade"
                  id="exampleModal"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">
                          Modal title
                        </h1>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="modal-body">...</div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="button" class="btn btn-primary">
                          Save changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <button type="button" className={` hover-button ${isHovered ? "hovered" : " "}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                data-bs-toggle="modal"
                data-bs-target="#exampleModal1"
              >
                {isHovered ? (
                  <BsFillPlusCircleFill color="#199BD7" size={"30px"} />
                ) : (
                  " "
                )} 
                </button>
                <div
                  className="modal fade"
                  id="exampleModal1"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">
                          Modal title
                        </h1>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="modal-body">...</div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="button" class="btn btn-primary">
                          Save changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <button type="button" className={` hover-button ${isHovered ? "hovered" : " "}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                {isHovered ? (
                  <BsFillPlusCircleFill color="#199BD7" size={"30px"} />
                ) : (
                  " "
                )} 
                </button>
                <div
                  className="modal fade"
                  id="exampleModal"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">
                          Modal title
                        </h1>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="modal-body">...</div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="button" class="btn btn-primary">
                          Save changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <button type="button" className={` hover-button ${isHovered ? "hovered" : " "}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                {isHovered ? (
                  <BsFillPlusCircleFill color="#199BD7" size={"30px"} />
                ) : (
                  " "
                )} 
                </button>
                <div
                  className="modal fade"
                  id="exampleModal"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">
                          Modal title
                        </h1>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="modal-body">...</div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="button" class="btn btn-primary">
                          Save changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </td>  
              <td>
                <button type="button" className={` hover-button ${isHovered ? "hovered" : " "}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                {isHovered ? (
                  <BsFillPlusCircleFill color="#199BD7" size={"30px"} />
                ) : (
                  " "
                )} 
                </button>
                <div
                  className="modal fade"
                  id="exampleModal"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">
                          Modal title
                        </h1>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="modal-body">...</div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="button" class="btn btn-primary">
                          Save changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <button type="button" className={` hover-button ${isHovered ? "hovered" : " "}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                {isHovered ? (
                  <BsFillPlusCircleFill color="#199BD7" size={"30px"} />
                ) : (
                  " "
                )} 
                </button>
                <div
                  className="modal fade"
                  id="exampleModal"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">
                          Modal title
                        </h1>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="modal-body">...</div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="button" class="btn btn-primary">
                          Save changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </td> 
              <td>
                <button type="button" className={` hover-button ${isHovered ? "hovered" : " "}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                {isHovered ? (
                  <BsFillPlusCircleFill color="#199BD7" size={"30px"} />
                ) : (
                  " "
                )} 
                </button>
                <div
                  className="modal fade"
                  id="exampleModal"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">
                          Modal title
                        </h1>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="modal-body">...</div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="button" class="btn btn-primary">
                          Save changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </td> 
            </tr>
            <tr className="text-center">
              
              <td>
                <BsFillPlusCircleFill
                  className="mt-2"
                  color="#199BD7"
                  size={"25px"}
                />
              </td>
              <td>
                <BsFillPlusCircleFill
                  className="mt-2"
                  color="#199BD7"
                  size={"25px"}
                />
              </td>
              <td>
                <BsFillPlusCircleFill
                  className="mt-2"
                  color="#199BD7"
                  size={"25px"}
                />
              </td>
              <td>
                <BsFillPlusCircleFill
                  className="mt-2"
                  color="#199BD7"
                  size={"25px"}
                />
              </td>
              <td>
                <BsFillPlusCircleFill
                  className="mt-2"
                  color="#199BD7"
                  size={"25px"}
                />
              </td>
              <td>
                <BsFillPlusCircleFill
                  className="mt-2"
                  color="#199BD7"
                  size={"25px"}
                />
              </td>
              <td>
                <BsFillPlusCircleFill
                  className="mt-2"
                  color="#199BD7"
                  size={"25px"}
                />
              </td>
            </tr>
            <tr className="text-center">
              <td>
                <BsFillPlusCircleFill
                  className="mt-2"
                  color="#199BD7"
                  size={"25px"}
                />
              </td>
              <td>
                <BsFillPlusCircleFill
                  className="mt-2"
                  color="#199BD7"
                  size={"25px"}
                />
              </td>
              <td>
                <BsFillPlusCircleFill
                  className="mt-2"
                  color="#199BD7"
                  size={"25px"}
                />
              </td>
              <td>
                <BsFillPlusCircleFill
                  className="mt-2"
                  color="#199BD7"
                  size={"25px"}
                />
              </td>
              <td>
                <BsFillPlusCircleFill
                  className="mt-2"
                  color="#199BD7"
                  size={"25px"}
                />
              </td>
              <td>
                <BsFillPlusCircleFill
                  className="mt-2"
                  color="#199BD7"
                  size={"25px"}
                />
              </td>
              <td>
                <BsFillPlusCircleFill
                  className="mt-2"
                  color="#199BD7"
                  size={"25px"}
                />
              </td>
            </tr>
            <tr className="text-center">
              <td>
                <BsFillPlusCircleFill
                  className="mt-2"
                  color="#199BD7"
                  size={"25px"}
                />
              </td>
              <td>
                <BsFillPlusCircleFill
                  className="mt-2"
                  color="#199BD7"
                  size={"25px"}
                />
              </td>
              <td>
                <BsFillPlusCircleFill
                  className="mt-2"
                  color="#199BD7"
                  size={"25px"}
                />
              </td>
              <td>
                <BsFillPlusCircleFill
                  className="mt-2"
                  color="#199BD7"
                  size={"25px"}
                />
              </td>
              <td>
                <BsFillPlusCircleFill
                  className="mt-2"
                  color="#199BD7"
                  size={"25px"}
                />
              </td>
              <td>
                <BsFillPlusCircleFill
                  className="mt-2"
                  color="#199BD7"
                  size={"25px"}
                />
              </td>
              <td>
                <BsFillPlusCircleFill
                  className="mt-2"
                  color="#199BD7"
                  size={"25px"}
                />
              </td>
            </tr>
            <tr className="text-center">
              <td>
                <BsFillPlusCircleFill
                  className="mt-2"
                  color="#199BD7"
                  size={"25px"}
                />
              </td>
              <td>
                <BsFillPlusCircleFill
                  className="mt-2"
                  color="#199BD7"
                  size={"25px"}
                />
              </td>
              <td>
                <BsFillPlusCircleFill
                  className="mt-2"
                  color="#199BD7"
                  size={"25px"}
                />
              </td>
              <td>
                <BsFillPlusCircleFill
                  className="mt-2"
                  color="#199BD7"
                  size={"25px"}
                />
              </td>
              <td>
                <BsFillPlusCircleFill
                  className="mt-2"
                  color="#199BD7"
                  size={"25px"}
                />
              </td>
              <td>
                <BsFillPlusCircleFill
                  className="mt-2"
                  color="#199BD7"
                  size={"25px"}
                />
              </td>
              <td>
                <BsFillPlusCircleFill
                  className="mt-2"
                  color="#199BD7"
                  size={"25px"}
                />
              </td>
            </tr> */}
          </MDBTableBody>
        </MDBTable>
      </MDBContainer>
    </div>
  );
}

export default Comparisontable;
