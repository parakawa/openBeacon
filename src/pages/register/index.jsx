import React, { PureComponent } from "react";
import { FormRegisterUser } from "./FormRegisterUser";
import UploadPhotoUser from "./UploadPhotoUser";
import { Layout } from "../../Components/Layout";
import "./style.css";

class RegisterUser extends PureComponent {
  state = {
    value: ""
  };
  handleSubmit = event => {
    event.preventDefault();
  };
  render() {
    return (
      <Layout>
        <div className="container__register__user">
          <h2 className="form__title">REGISTRAR NUEVO USUARIO</h2>
          <FormRegisterUser handleSubmit={this.handleSubmit} />
          <UploadPhotoUser />
        </div>
      </Layout>
    );
  }
}

export default RegisterUser;
