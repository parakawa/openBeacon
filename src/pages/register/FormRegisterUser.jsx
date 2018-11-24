import React from "react";

export const FormRegisterUser = props => (
  <div className="container__form-register">
    <form
      className="form__setting"
      onSubmit={props.handleSubmit}
      autoComplete="off"
    >
      <div className="item_form">Nombre</div>
      <div className="item_form">Apellido Paterno</div>
      <div className="item_form">Apellido Materno</div>
      <div className="item_form">N° DNI</div>
      <div className="item_form">Código Nuevo</div>
      <div className="item_form">T. Inicio</div>
      <div className="item_form_input">
        <input type="text" name="name" required />
      </div>
      <div className="item_form_input">
        <input type="text" name="surName" required />
      </div>
      <div className="item_form_input">
        <input type="text" name="lastName" required />
      </div>
      <div className="item_form_input">
        <input type="text" name="nroDni" required />
      </div>
      <div className="item_form_input">
        <input type="text" name="code" required />
      </div>
      <div className="item_form_input">
        <input type="text" name="initTime" required />
      </div>
      <button type="submit" className="form_btn_submit btn">
        Guardar
      </button>
    </form>
  </div>
);
