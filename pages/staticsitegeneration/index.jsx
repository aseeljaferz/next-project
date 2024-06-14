import ListTodos from '@/components/ListTodos';
import { API_URL } from '@/config';
import axios from 'axios';
import { useEffect, useState } from 'react';
import moment from "moment";
import Button from '@/components/Button';

const StaticSiteGeneration = ({ initialTodos, time }) => {
    const [todos, setTodos] = useState(initialTodos);
    const [currentPage, setCurrentPage] = useState(1);
    const todosPerPage = 2;

    const totalPages = Math.ceil(todos.length / todosPerPage);

    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className="container d-flex flex-column align-items-center">
            <h1>Static Site Generation</h1>
            <div className="d-flex gap-2">
                <p style={{ marginTop: '15px' }}>Time:</p>
                <p style={{ marginTop: '15px' }}>{time}</p>
                <Button />
            </div>
            {currentTodos.map((todo) => (
                <div key={todo.id} from={'ssg'} className="todo-item">
                    <ListTodos todo={todo} />
                </div>
            ))}

            <div className="pagination mt-4">
                <button className="btn btn-secondary" onClick={prevPage} disabled={currentPage === 1}>
                    Prev
                </button>
                <span className="mx-2">
                    Page {currentPage} of {totalPages}
                </span>
                <button className="btn btn-secondary" onClick={nextPage} disabled={currentPage === totalPages}>
                    Next
                </button>
            </div>
        </div>
    );
};

export const getStaticProps = async () => {
    const res = await axios.get(`${API_URL}?_limit=10`);
    const initialTodos = res.data;

    const time = moment().format('LTS');

  

    return {
        props: {
            initialTodos,
            time
        },
    };
};

export default StaticSiteGeneration;
