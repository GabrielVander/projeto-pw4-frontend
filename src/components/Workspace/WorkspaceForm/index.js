import React from 'react';
import './styles.css';
import {IconContext} from 'react-icons';
import {RiSave3Line, RiCloseLine} from 'react-icons/ri';
import useForm from "../useForm";

function WorkspaceForm(props) {
    const {handleChange, handleSubmit} = useForm(props.handleSubmit);

    return (
        <form onSubmit={handleSubmit}>
            <input
                placeholder="name"
                onChange={handleChange}
                className="form-control"
                type="text"
                name="name"/>
            <button className="btn btn-primary p-1 m-1" type="submit">
                <IconContext.Provider
                    value={{
                        size: "1.2rem",
                        textAlign: "center"
                    }}>
                    <RiSave3Line></RiSave3Line>
                </IconContext.Provider>
            </button>
            <button
                className="btn btn-danger p-1 m-1"
                type="button"
                onClick={props.handleCancel}>
                <IconContext.Provider
                    value={{
                        size: "1.2rem",
                        textAlign: "center"
                    }}>
                    <RiCloseLine></RiCloseLine>
                </IconContext.Provider>
            </button>
        </form>
    );
}

export default WorkspaceForm;