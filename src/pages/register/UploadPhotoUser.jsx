import React, { PureComponent } from "react";

class UploadPhotoUser extends PureComponent {
  render() {
    return (
      <div className="form__avatar">
        <div>
          <img
            src="/static/Images/man.svg"
            alt="avatar"
            width="120"
            height="120"
          />
        </div>
        <button type="button" className="btn">
          Cambiar foto
        </button>
      </div>
    );
  }
}

export default UploadPhotoUser;
