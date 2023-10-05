import React from 'react'
import './Container.css';

export default function Container() {
  return (
    <div className='Container'>
        <div className='alert'>
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
                Featured
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Cras justo odio</li>
                <li class="list-group-item">Dapibus ac facilisis in</li>
                <li class="list-group-item">Vestibulum at eros</li>
                <li class="list-group-item">Cras justo odio</li>
                <li class="list-group-item">Dapibus ac facilisis in</li>
                <li class="list-group-item">Vestibulum at eros</li>
                <li class="list-group-item">Cras justo odio</li>
                <li class="list-group-item">Dapibus ac facilisis in</li>
                <li class="list-group-item">Vestibulum at eros</li>
                <li class="list-group-item">Cras justo odio</li>
                <li class="list-group-item">Dapibus ac facilisis in</li>
                <li class="list-group-item">Vestibulum at eros</li>
            </ul>
        </div>

        </div>
        
       
    </div>

    
  )
}