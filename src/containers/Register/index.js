import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";

import { registerUser } from "../../actions/users";

import "react-toastify/dist/ReactToastify.css";

class Register extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      passwordVisible: false,
      data: {
        type: "farmer"
      }
    };
  }

  onHandleChange = e => {
    this.setState(
      {
        data: {
          ...this.state.data,
          [e.target.name]: e.target.value
        }
      },
      () => console.log(this.state.data)
    );
  };

  onHandleSubmit = e => {
    e.preventDefault();
    const data = this.state.data;

    this.props.registerUser(data);
  };

  onSelectType = type => {
    this.setState({ data: { ...this.state.data, type } }, () =>
      console.log(this.state.data)
    );
  };

  onHandleShowPassword = () => {
    this.setState({
      passwordVisible: !this.state.passwordVisible
    })
  }

  render() {
    return (
      <main className="authenticationPageLayout">
        <div className="main_page_frame">
          <div className="pageClose dialogDismiss">
            <button
              type="button"
              data-dismiss="alert"
              className="close_dialog cls_lg"
            />
          </div>
          <div className="section_block">
            <ToastContainer autoClose={4000} />
            <div className="container content_narrow">
              <div className="authblock">
                <div className="row no-gutters">
                  <aside className="authSidePanel col-sm-5 col-md-5">
                    <div className="panelWrapper">
                      <div className="LogoHolder">
                        <a href="/">
                          <img
                            src={require("../../assets/logo.svg")}
                            alt="farmzone.ng"
                          />
                        </a>
                      </div>
                      <div className="blockHeader">
                        <div className="collapsibleBlock blockCollapsed ">
                          <div className="font-md margin_bottom_sm">
                            Don't have an account?{" "}
                            <button
                              type="button"
                              className="expandCollapseSm collapsetoggle"
                            >
                              Create an account
                            </button>
                          </div>
                          <div className="linkTiles margin_bottom_lg collapseInner">
                            <div className="linkTileItem">
                              <a
                                onClick={() => this.onSelectType("farmer")}
                                className={
                                  this.state.data.type === "farmer"
                                    ? "tileItemWrapper active"
                                    : "tileItemWrapper"
                                }
                              >
                                <span className="linkLabel">
                                  Are you a farmer?{" "}
                                </span>
                                <span className="font-bold color__primary">
                                  create a farmer account
                                </span>
                              </a>
                            </div>
                            <div className="linkTileItem">
                              <a
                                onClick={() => this.onSelectType("aggregator")}
                                className={
                                  this.state.data.type === "Aggregator"
                                    ? "tileItemWrapper active"
                                    : "tileItemWrapper"
                                }
                              >
                                <span className="linkLabel">
                                  Are you an Aggregator?{" "}
                                </span>
                                <span className="font-bold color__primary">
                                  Sign up as an Aggregator
                                </span>
                              </a>
                            </div>
                            <div className="linkTileItem">
                              <a
                                href="#"
                                onClick={() => this.onSelectType("off_taker")}
                                className={
                                  this.state.data.type === "off_taker"
                                    ? "tileItemWrapper active"
                                    : "tileItemWrapper"
                                }
                              >
                                <span className="linkLabel">
                                  Are you an off-taker?{" "}
                                </span>
                                <span className="font-bold color__primary">
                                  Sign up as an Off-taker
                                </span>
                              </a>
                            </div>
                            <div className="linkTileItem">
                              <a
                                href="#"
                                onClick={() => this.onSelectType("investor")}
                                className={
                                  this.state.data.type === "investor"
                                    ? "tileItemWrapper active"
                                    : "tileItemWrapper"
                                }
                              >
                                <span className="linkLabel">
                                  Are you an Investor?{" "}
                                </span>
                                <span className="font-bold color__primary">
                                  Become an investor{" "}
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="font-md">
                        Farmzone is a social venture, whose aim is to connect
                        the farm to the market.{" "}
                      </p>
                    </div>
                  </aside>
                  <section className="authFormHolder col-sm-7 col-md-7">
                    <div className="panelWrapper">
                      <div className="blockHeader">
                        <h3 className="title title_md font-bold">
                          {this.state.data.type} Sign-up
                        </h3>
                        <p className="font-md">
                          Already have an account?{" "}
                          <Link className="btn-link font-bold" to="/login">
                            Log in
                          </Link>
                        </p>
                      </div>

                      <form action="">
                        <div className="row">
                          <div className="form-group col-sm-6">
                            <div className="labeledInputBlock">
                              <label
                                htmlFor="us_fname"
                                className="control-label color__default"
                              >
                                First Name
                              </label>
                              <input
                                type="text"
                                name="firstName"
                                className="form-control"
                                id="us_fname"
                                onChange={this.onHandleChange}
                                placeholder="E.g. David"
                              />
                            </div>
                          </div>
                          <div className="form-group col-sm-6">
                            <div className="labeledInputBlock">
                              <label
                                htmlFor="us_lname"
                                className="control-label color__default"
                              >
                                Last Name
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="us_lname"
                                name="lastName"
                                onChange={this.onHandleChange}
                                placeholder="E.g. Oyelowo"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="labeledInputBlock">
                            <label
                              htmlFor="us_email"
                              className="control-label color__default"
                            >
                              Email Address
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="us_email"
                              name="email"
                              placeholder="Enter your email address"
                              onChange={this.onHandleChange}
                            />
                          </div>
                        </div>
                        {this.state.data.type === "off_taker" ? (
                          <div className="form-group">
                            <div className="labeledInputBlock">
                              <label
                                htmlFor="us_email"
                                className="control-label color__default"
                              >
                                Name of Organization
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="us_email"
                                name="orgName"
                                placeholder="Your organization or business name."
                                onChange={this.onHandleChange}
                              />
                            </div>
                          </div>
                        ) : null}

                        <div className="form-group">
                          <div className="labeledInputBlock">
                            <label
                              htmlFor="us_phone"
                              className="control-label color__default"
                            >
                              Phone Number
                            </label>
                            <div className="">
                              <div className="inputaffixed inputPrefixed">
                                <div className="inputfixture">
                                  <span>+234</span>
                                </div>
                                <input
                                  type="tel"
                                  id="us_phone"
                                  maxLength="11"
                                  name="phoneNo"
                                  className="inputControl form-control"
                                  placeholder="Enter Phone number"
                                  onChange={this.onHandleChange}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="labeledInputBlock">
                            <label
                              htmlFor="us_pass"
                              className="control-label color__default"
                            >
                              Password
                            </label>
                            <div className="input-group">
                              <input
                                type={this.state.passwordVisible ? "text" : 'password'}
                                id="us_pass"
                                className="form-control user_pass"
                                placeholder="Create Password"
                                name="password"
                                onChange={this.onHandleChange}
                              />

                              <span className="input-group-addon">
                                <button
                                  type="button"
                                  className=""
                                  id="showPass"
                                  onClick={this.onHandleShowPassword}
                                >
                                  <i className="cust_icon icon_eye" />
                                </button>
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="auth_cta row">
                          <div className="primaryActionHolder col-md-5">
                            <button
                              type="submit"
                              className="btn btn-block btn-secondary"
                              onClick={this.onHandleSubmit}
                            >
                              {this.props.loading ? (
                                <img
                                  src={require("../../assets/ring-loader.svg")}
                                  style={{ width: 25, height: 25 }}
                                />
                              ) : (
                                "Get Started"
                              )}
                            </button>
                          </div>
                          <div className="disclaimer_block col-md-7">
                            <p className="font_md">
                              By creating an account, you agree to our{" "}
                              <a href="/terms" className="btn-link">
                                Terms
                              </a>{" "}
                              and{" "}
                              <a href="/policies" className="btn-link">
                                Policies
                              </a>
                              .
                            </p>
                          </div>
                        </div>
                      </form>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.user.isRegistering,
  success: state.user.isRegisteringSuccessful,
  error: state.user.isRegisteringFailed
});

export default connect(
  mapStateToProps,
  { registerUser }
)(Register);
