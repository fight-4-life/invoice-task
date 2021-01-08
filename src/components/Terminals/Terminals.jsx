import React, {useState} from 'react'
import {Button} from "antd";
import './Terminals.css'

export const Terminals = () => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [terminals, setTerminals] = useState([])

    const handleTitleChange = e => {
        setTitle(e.target.value)
    };

    const handleDescriptionChange = e => {
        setDescription(e.target.value)
    };

    const addTerminal = () => {
        setTerminals([
            ...terminals,
            {
                id: terminals.length + 1,
                title: title,
                description: description,
            }
        ]);
    };

    const onSubmit = e => {
        e.preventDefault()
        if (title === "") return
        addTerminal()
        setTitle("")
        setDescription("")
    };

    const removeTerminal = terminalId => {
        const updatedTerminals = terminals.filter(terminal => terminal.id !== terminalId);
        setTerminals(updatedTerminals)
    };

    return (
        <div className="container">
            <form onSubmit={onSubmit}>
                <div className={'inputs-container'}>
                    <div className={'terminals-input'}>Название терминала
                        <br/>
                        <input

                            onChange={handleTitleChange}
                            value={title}
                        />
                    </div>
                    <div className={'terminals-input'}>Описание терминала
                        <br/>
                        <input

                            onChange={handleDescriptionChange}
                            value={description}
                        />
                    </div>
                    <div>
                        <Button type="primary" htmlType="submit" className="add-btn">
                            Добавить
                        </Button>
                    </div>
                </div>
            </form>

            {terminals.length !== 0 &&
            <table className={"terminals-table"}>
                <thead>
                <tr>
                    <th>Название</th>
                    <th>Описание</th>
                    <th>Действия</th>
                </tr>

                </thead>
                <tbody>
                {terminals.map(terminal => (
                    <tr>
                        <td>{terminal.title}</td>
                        <td>{terminal.description}</td>
                        <td>
                            <Button type="primary" danger className="delete-btn"
                                    onClick={() => removeTerminal(terminal.id)}>
                                Удалить
                            </Button>
                        </td>
                    </tr>))}
                </tbody>
            </table>}
        </div>
    );
}