import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { validator } from "../../../utils/validator";
import TextField from "../../common/form/textField";
import SelectField from "../../common/form/selectField";
import RadioField from "../../common/form/radioField";
import MultiSelectField from "../../common/form/multiSelectField";
import BackHistoryButton from "../../common/backButton";
import { useAuth } from "../../../hooks/useAuth";
import { useProfessions } from "../../../hooks/useProfession";
import { useQualities } from "../../../hooks/useQualities";

const EditUserPage = () => {
    const { currentUser, updateUser } = useAuth();
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const [data, setData] = useState({ ...currentUser });

    const { professions } = useProfessions();
    const [professionsForFileds, setProfessionsForFileds] = useState([]);
    const { qualities } = useQualities();
    const [qualitiesForFields, setQualitiesForFields] = useState([]);

    const getQualitiesByIds = (qualIds) => {
        if (Object.keys(qualities).length > 0 && qualIds) {
            const qualitiesArray = [];
            qualIds.forEach((qualId) => {
                const neededObject = qualities.find((quality) => {
                    return quality._id === qualId;
                });
                qualitiesArray.push(neededObject);
            });

            const qualitiesArrayForFields = qualitiesArray.map((quality) => {
                return {
                    value: quality._id,
                    label: quality.name,
                    color: quality.color
                };
            });
            return qualitiesArrayForFields;
        }
    };

    const transformProfessions = (data) => {
        return data.map((qual) => ({ label: qual.name, value: qual._id }));
    };

    const transformQualities = (elements) => {
        const qualitiesArray = [];
        for (const elem of elements) {
            qualitiesArray.push({
                value: elem._id,
                label: elem.name,
                color: elem.color
            });
        }
        return qualitiesArray;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;

        const qualitiesToUpdate = data.qualities.map((quality) => {
            return quality.value;
        });

        const dataToUpdate = {
            ...data,
            qualities: qualitiesToUpdate
        };
        console.log("dataToUpdate", dataToUpdate);

        updateUser(dataToUpdate);
        history.push(`/users/${dataToUpdate._id}`);
    };

    useEffect(() => {
        setIsLoading(true);
    }, []);

    useEffect(() => {
        if (data._id && currentUser && professions && qualities) {
            setIsLoading(false);
        }
    }, [data, currentUser, professions, qualities]);

    useEffect(() => {
        setProfessionsForFileds(transformProfessions(professions));
    }, [professions]);

    useEffect(() => {
        setQualitiesForFields(transformQualities(qualities));
        const transformedQualities = getQualitiesByIds(data.qualities);
        setData((prevState) => ({
            ...prevState,
            qualities: transformedQualities
        }));
    }, [qualities]);

    const validatorConfig = {
        email: {
            isRequired: {
                message: "Электронная почта обязательна для заполнения"
            },
            isEmail: {
                message: "Email введен некорректно"
            }
        },
        name: {
            isRequired: {
                message: "Введите ваше имя"
            }
        }
    };

    useEffect(() => {
        validate();
    }, [data]);

    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const isValid = Object.keys(errors).length === 0;

    return (
        <div className="container mt-5">
            <BackHistoryButton />
            <div className="row">
                <div className="col-md-6 offset-md-3 shadow p-4">
                    {!isLoading &&
                    Object.keys(professionsForFileds).length > 0 &&
                    Object.keys(qualitiesForFields).length > 0 ? (
                        <form onSubmit={handleSubmit}>
                            <TextField
                                label="Имя"
                                name="name"
                                value={data.name}
                                onChange={handleChange}
                                error={errors.name}
                            />
                            <TextField
                                label="Электронная почта"
                                name="email"
                                value={data.email}
                                onChange={handleChange}
                                error={errors.email}
                            />
                            <SelectField
                                label="Выбери свою профессию"
                                defaultOption="Choose..."
                                options={professionsForFileds}
                                name="profession"
                                onChange={handleChange}
                                value={data.profession}
                                error={errors.profession}
                            />
                            <RadioField
                                options={[
                                    { name: "Male", value: "male" },
                                    { name: "Female", value: "female" },
                                    { name: "Other", value: "other" }
                                ]}
                                value={data.sex}
                                name="sex"
                                onChange={handleChange}
                                label="Выберите ваш пол"
                            />
                            <MultiSelectField
                                defaultValue={data.qualities}
                                options={qualitiesForFields}
                                onChange={handleChange}
                                name="qualities"
                                label="Выберите ваши качества"
                            />
                            <button
                                type="submit"
                                disabled={!isValid}
                                className="btn btn-primary w-100 mx-auto"
                            >
                                Обновить
                            </button>
                        </form>
                    ) : (
                        "Loading..."
                    )}
                </div>
            </div>
        </div>
    );
};

export default EditUserPage;
