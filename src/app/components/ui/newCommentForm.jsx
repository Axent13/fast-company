import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import SelectField from "../common/form/selectField";
import api from "../../api";
import TextAreaField from "../common/form/textAreaField";
import { validator } from "../../utils/validator";

const NewCommentForm = ({ onSubmit }) => {
    const [data, setData] = useState({ userId: "", content: "" });
    const [usersList, setUsersList] = useState();
    const [errors, setErrors] = useState({});
    const [submitButtonClicked, setSubmitButtonClicked] = useState(false);

    useEffect(() => {
        api.users.fetchAll().then((data) => {
            const usersList = Object.keys(data).map((professionName) => ({
                label: data[professionName].name,
                value: data[professionName]._id
            }));
            setUsersList(usersList);
        });
    }, []);

    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    const validatorConfig = {
        userId: {
            isRequired: {
                message: "Необходимо выбрать отправителя комментария"
            }
        },
        content: {
            isRequired: {
                message: "Поле комментария не должно быть пустым"
            }
        }
    };

    useEffect(() => {
        submitButtonClicked && validate();
    }, [data]);

    const validate = () => {
        console.log(data);
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const isValid = Object.keys(errors).length === 0;

    const clearForm = () => {
        setData({ userId: "", content: "" });
        setErrors({});
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setSubmitButtonClicked(true);
        const isValid = validate();
        if (!isValid) return;

        onSubmit(data);
        clearForm();
        setSubmitButtonClicked(false);
    };

    return (
        <>
            <h1>New comment</h1>
            <div className="card mb-3">
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        {usersList ? (
                            <>
                                <SelectField
                                    defaultOption="Выберите пользователя..."
                                    options={usersList}
                                    name="userId"
                                    onChange={handleChange}
                                    value={data.userId}
                                    error={errors.userId}
                                />
                                <TextAreaField
                                    label="Сообщение"
                                    name="content"
                                    value={data.content}
                                    rows="3"
                                    onChange={handleChange}
                                    error={errors.content}
                                />
                                <div className="d-flex justify-content-end">
                                    <button
                                        className="btn btn-primary align-items-right"
                                        type="submit"
                                        disabled={!isValid}
                                    >
                                        Submit
                                    </button>
                                </div>
                            </>
                        ) : (
                            <h1>Loading...</h1>
                        )}
                    </form>
                </div>
            </div>
        </>
    );
};

NewCommentForm.propTypes = {
    onSubmit: PropTypes.func
};

export default NewCommentForm;
