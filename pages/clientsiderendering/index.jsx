import axios from "axios";
import { useState, useEffect } from "react";
import Link from "next/link";
import { API_URL } from "@/config";
import ListTodos from "@/components/ListTodos";
import Button from "@/components/Button";
import moment from "moment";

const ClientSideRendering = () => {
    const [todos, setTodos] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1); 
    const todosPerPage = 2;
    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`${API_URL}?_limit=10`);
                console.log('res.data :>> ', res.data);
                setTodos(res.data);
                const total = Math.ceil(res.data.length / todosPerPage);
                setTotalPages(total);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();

        setCurrentTime(moment().format('LTS'));
    }, []);

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

    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

    return (
        <div className="container d-flex flex-column align-items-center">
            <div className="d-flex gap-2">
                <p style={{ marginTop: '15px' }}>Time:</p>
                <p style={{ marginTop: '15px' }}>{currentTime}</p>
                <Button/>
            </div>
            {currentTodos.map((todo) => (
                <ListTodos key={todo.id} todo={todo} from={'csr'} />
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

export default ClientSideRendering;
