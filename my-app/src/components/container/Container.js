import './Container.css';
import React, { useState, useEffect } from 'react';
import low from './Priority-Low.svg';
import medium from './Priority-Medium.svg';
import high from './Priority-High.svg'; 



function formatDate(dateString) {
    const options = { month: 'short', day: 'numeric' };
    const formattedDate = new Date(dateString).toLocaleDateString('en-US', options);
    return formattedDate;
  }

export default function Container() {
    const alertStyle = {
        textAlign: 'left', // Set the text-align property to 'left'
      };

    const [todos, setTodos] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const todosPerPage = 7;

    useEffect(() => {
      // Define the API endpoint URL
      const apiUrl = 'https://6363c8f68a3337d9a2e7d805.mockapi.io/api/to-do';
  
      // Make the GET request to the API
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => setTodos(data))
        .catch((error) => console.error('Error fetching data:', error));
    
    }, []);

        // Calculate the index range for the current page
        const indexOfLastTodo = currentPage * todosPerPage;
        const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
        const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

        // Function to handle page navigation
        const handlePageChange = (newPage) => {
            setCurrentPage(newPage);
        };

  


  return (
    <div className='Container'>
        <div className='alert' style={alertStyle}>
            <div class="alert alert-warning alert-dismissible fade show alert1" role="alert">
            <h5>Welcome Back. Jhon Doe</h5>
            <p> The end of the year is coming. Are you planning your performance interviews? You can do this super efficiently with Acmy.</p>
            <href>Look here for more information</href> 
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        </div>

        <div className='task'>
            <div class="card card-modification" style={{ width: '50%' }}>
            <div class="card-header">
                Task
            </div>
            <ul class="list-group list-group-flush">
            {currentTodos.map((todo) => (
                <li key={todo.id} class="list-group-item">
                    <div className="top-row">
                    {todo.priority === "LOW"?(
                        <div className='bell'>
                        <img src={low} alt={todo.priority}/>
                        </div>
                    ): todo.priority === "MEDIUM"?(
                        <div className='bell'>
                        <img src={medium} alt={todo.priority}/>
                        </div>
                    ):(
                        <div className='bell'>
                        <img src={high} alt={todo.priority}/>
                        </div>

                    )

                    }
                    
                    <div className='todo'>{todo.todo}</div>
                    {todo.completed ? (
                        <div className='complete'>
                         <span>done</span>
                         </div>
                     ):(
                        <div className='inprogress'>
                        <span>in progress</span>
                       
                        </div>
                     ) }
                     <div className='date'>{formatDate(todo.createdAt)}</div>
                     </div>
                     {todo.completed ? (
                        <span></span>
                    ):(
                    <div className='markasdone'>
                    <br/>
                    Mark as done
                    </div>
                    ) }
                    </li>
                

                ))}
            </ul>
            {/* Pagination */}
            <div className='pagination'>
            {/* Left arrow */}
            {currentPage > 1 && (
                <button
                onClick={() => handlePageChange(currentPage - 1)}
                style={{ color: 'black', marginTop: '0' }}
                >
                {'<'}
                </button>
            )}

            {/* Page buttons */}
            {Array.from({ length: Math.ceil(todos.length / todosPerPage) })
                .slice(Math.max(currentPage - 2, 0), Math.min(currentPage + 1, Math.ceil(todos.length / todosPerPage)))
                .map((_, index) => (
                <button
                    key={index}
                    className={currentPage === index + 1 ? 'active' : ''}
                    onClick={() => handlePageChange(index + 1)}
                    style={{ color: 'black', marginTop: '0' }}
                >
                    {index + 1}
                </button>
                ))}

            {/* Right arrow */}
            {currentPage < Math.ceil(todos.length / todosPerPage) && (
                <button
                onClick={() => handlePageChange(currentPage + 1)}
                style={{ color: 'black', marginTop: '0' }}
                >
                {'>'}
                </button>
            )}
            </div>
        </div>

        </div>
        
       
    </div>

    
  )
}