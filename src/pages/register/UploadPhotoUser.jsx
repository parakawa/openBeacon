import React, { PureComponent } from "react";

class UploadPhotoUser extends PureComponent {
  render() {
    return (
      <div className="form__avatar">
        <img
          src="/static/Images/man.svg"
          alt="avatar"
          width="120"
          height="120"
        />
      </div>
    );
  }
}

export default UploadPhotoUser;
