import React from "react";
import "../custome/PSdetails.css";

const PSdetail = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-offset-1 col-md-10">
          <div className="panel">
            <div className="panel-heading">
              <div className="row">
                <div className="col-sm-5 col-xs-12">
                  <h4 className="title">
                    Data <span>List</span>
                  </h4>
                </div>
                <div className="col-sm-7 col-xs-12 text-right">
                  <div className="btn_group">
                    <span className="label label-danger">Filter:</span>
                    <button
                      type="button"
                      className="btn btn-warning"
                      title="Blocked"
                    >
                      <i className="fa fa-ban"></i>
                    </button>
                    <button
                      type="button"
                      className="btn btn-success"
                      title="Active"
                    >
                      <i className="fa fa-check-square"></i>
                    </button>
                  </div>
                  <a href="/" className="btn add-new">
                    <i className="fa fa-plus-circle"></i>
                    Add New
                  </a>
                </div>
              </div>
            </div>
            <div className="panel-body table-responsive">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>Photo</th>
                    <th>Full Name</th>
                    <th>Age</th>
                    <th>Status</th>
                    <th>Job Title</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="user_icon">
                        <img src="images/img1.jpg" alt="" />
                      </div>
                    </td>
                    <td>Vincent Williamson</td>
                    <td>31</td>
                    <td>
                      <span className="status">Active</span>
                    </td>
                    <td>iOS Developer</td>
                    <td>
                      <ul className="action-list">
                        <li>
                          <button type="button" className="btn btn-warning">
                            <i className="fa fa-ban"></i>
                          </button>
                        </li>
                        <li>
                          <a href="/" className="btn btn-primary">
                            <i className="fa fa-pencil-alt"></i>
                          </a>
                        </li>
                        <li>
                          <a href="/" className="btn btn-danger">
                            <i className="fa fa-trash"></i>
                          </a>
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="user_icon">
                        <img src="images/img2.jpg" alt="" />
                      </div>
                    </td>
                    <td>Taylor Reyes</td>
                    <td>22</td>
                    <td>
                      <span className="status block">Blocked</span>
                    </td>
                    <td>UI/UX Developer</td>
                    <td>
                      <ul className="action-list">
                        <li>
                          <button type="button" className="btn btn-success">
                            <i className="fa fa-check-square"></i>
                          </button>
                        </li>
                        <li>
                          <a href="/" className="btn btn-primary">
                            <i className="fa fa-pencil-alt"></i>
                          </a>
                        </li>
                        <li>
                          <a href="/" className="btn btn-danger">
                            <i className="fa fa-trash"></i>
                          </a>
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="user_icon">
                        <img src="images/img3.jpg" alt="" />
                      </div>
                    </td>
                    <td>Justin Block</td>
                    <td>26</td>
                    <td>
                      <span className="status">Active</span>
                    </td>
                    <td>Frontend Developer</td>
                    <td>
                      <ul className="action-list">
                        <li>
                          <button type="button" className="btn btn-warning">
                            <i className="fa fa-ban"></i>
                          </button>
                        </li>
                        <li>
                          <a href="/" className="btn btn-primary">
                            <i className="fa fa-pencil-alt"></i>
                          </a>
                        </li>
                        <li>
                          <a href="/" className="btn btn-danger">
                            <i className="fa fa-trash"></i>
                          </a>
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="user_icon">
                        <img src="images/img4.png" alt="" />
                      </div>
                    </td>
                    <td>Sean Guzman</td>
                    <td>26</td>
                    <td>
                      <span className="status block">Blocked</span>
                    </td>
                    <td>Web Designer</td>
                    <td>
                      <ul className="action-list">
                        <li>
                          <button type="button" className="btn btn-success">
                            <i className="fa fa-check-square"></i>
                          </button>
                        </li>
                        <li>
                          <a href="/" className="btn btn-primary">
                            <i className="fa fa-pencil-alt"></i>
                          </a>
                        </li>
                        <li>
                          <a href="/" className="btn btn-danger">
                            <i className="fa fa-trash"></i>
                          </a>
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="user_icon">
                        <img src="images/img5.jpg" alt="" />
                      </div>
                    </td>
                    <td>Keith Carter</td>
                    <td>20</td>
                    <td>
                      <span className="status">Active</span>
                    </td>
                    <td>Graphic Designer</td>
                    <td>
                      <ul className="action-list">
                        <li>
                          <button type="button" className="btn btn-warning">
                            <i className="fa fa-ban"></i>
                          </button>
                        </li>
                        <li>
                          <a href="/" className="btn btn-primary">
                            <i className="fa fa-pencil-alt"></i>
                          </a>
                        </li>
                        <li>
                          <a href="/" className="btn btn-danger">
                            <i className="fa fa-trash"></i>
                          </a>
                        </li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="panel-footer">
                <div className="row">
                  <div className="col col-sm-6 col-xs-8">
                    Showing <b>5</b> out of <b>25</b> entries
                  </div>
                  <ul className="pagination hidden-xs">
                    <li>
                      <a href="/">Prev</a>
                    </li>
                    <li className="active">
                      <a href="">1</a>
                    </li>
                    <li>
                      <a href="">2</a>
                    </li>
                    <li>
                      <a href="">3</a>
                    </li>
                    <li>
                      <a href="">4</a>
                    </li>
                    <li>
                      <a href="">5</a>
                    </li>
                    <li>
                      <a href="">Next</a>
                    </li>
                  </ul>
                  <ul className="pagination visible-xs">
                    <li>
                      <a href="/"></a>
                    </li>
                    <li>
                      <a href="/"></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PSdetail;
