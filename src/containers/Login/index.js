import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";

import { loginUser } from "../../actions/users";

import "react-toastify/dist/ReactToastify.css";

class Login extends PureComponent {
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

    this.props.loginUser(data);
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
                              <Link to="/register" className="tileItemWrapper">
                                <span className="linkLabel">
                                  Are you a farmer?{" "}
                                </span>
                                <span className="font-bold color__primary">
                                  create a farmer account
                                </span>
                              </Link>
                            </div>
                            <div className="linkTileItem">
                              <Link to="/register" className="tileItemWrapper">
                                <span className="linkLabel">
                                  Are you an Aggregator?{" "}
                                </span>
                                <span className="font-bold color__primary">
                                  Sign up as an Aggregator
                                </span>
                              </Link>
                            </div>
                            <div className="linkTileItem">
                              <Link to="/register" className="tileItemWrapper">
                                <span className="linkLabel">
                                  Are you an off-taker?{" "}
                                </span>
                                <span className="font-bold color__primary">
                                  Sign up as an Off-taker
                                </span>
                              </Link>
                            </div>
                            <div className="linkTileItem">
                              <Link to="/register" className="tileItemWrapper">
                                <span className="linkLabel">
                                  Are you an Investor?{" "}
                                </span>
                                <span className="font-bold color__primary">
                                  Become an investor{" "}
                                </span>
                              </Link>
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
                        <h3 className="title title_md font-bold">Login</h3>
                        <p className="font-md">
                          Continue from where you stopped
                        </p>
                      </div>

                      <form action="">
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
                                  alt="loader"
                                />
                              ) : (
                                "Login"
                              )}
                            </button>
                          </div>
                          <div className="disclaimer_block col-md-7">
                            <p className="font_md">
                              <Link
                                to="/password-reset"
                                className="btn-link font-bold"
                              >
                                Forgot password?
                              </Link>
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
  loading: state.user.isLogin,
  success: state.user.isLoginSuccessful,
  error: state.user.isLoginFailed
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
