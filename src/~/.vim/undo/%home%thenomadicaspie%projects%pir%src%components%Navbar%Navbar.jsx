Vim�UnDo� �9�is�)'��^�gz��05�.�"����2��       2					<Link to="/logout" className="navbar-button">                             c��r    _�                            ����                                                                                                                                                                                                                                                                                                                                                 V        c�|�     �      	        5��                                               5�_�                            ����                                                                                                                                                                                                                                                                                                                                      !           V        c�|�    �      
   !    �      	   !    5��                                        )       5�_�                            ����                                                                                                                !                                                                                                                                                                                                                     "           V        c�|�    �                 5��                                               5�_�                           ����                                                                                                                                                                                                                                                                                                                                      !           V        c�|�    �      	   !      (import UserContext from './UserContext';5��                         *                     5�_�                           ����                                                                                                                                                                                                                                                                                                                                               v       c�|�    �      	   !      ,import UserContext from '../../UserContext';�      	   !    5��                                            5�_�                       )    ����                                                                                                                                                                                                                                                                                                                                               v       c�|�    �                0import { UserContext } from '../../UserContext';5��                                1               5�_�                            ����                                                                                                                                                                                                                                                                                                                                                 V   2    c���     �                   �               �                  import React from 'react';   import './navbar.css';   (import { Link } from 'react-router-dom';   (import logo from '../../assets/logo.png'   1import logout_icon from '../../assets/logout.png'   &import pir from '../../assets/pir.png'   2import { auth, db, logout } from "../../firebase";       const Navbar = () => {   		return (   		<>   %			<div className="navbar-container">   				<div className="navbar">   3					<img src={logo} alt="Logo" className="logo" />   2					<Link to="/logout" className="navbar-button">   ?						<img src={logout_icon} alt="Logout" className="logout" />   					</Link>   %					<div className="navbar-buttons">   ?						<Link to="/calendar" className="navbar-button"></Link>   B						<Link to="/add-project" className="navbar-button"></Link>   C						<Link to="/project-list" className="navbar-button"></Link>   					</div>   					<p className="title">   1						<img src={pir} alt="Pir" className="pir" />   						</p>   
				</div>   				</div>   		</>   	);   };       export default Navbar;5��                                   �             �                                                  5�_�                            ����                                                                                                                                                                                                                                                                                                                                                  V   2    c���    �   	             
  return (�   
                 <>�                (      <div className="navbar-container">�                         <div className="navbar">�                8          <img src={logo} alt="Logo" className="logo" />�                7          <Link to="/logout" className="navbar-button">�                E            <img src={logout_icon} alt="Logout" className="logout" />�                          </Link>�                *          <div className="navbar-buttons">�                E            <Link to="/calendar" className="navbar-button"></Link>�                H            <Link to="/add-project" className="navbar-button"></Link>�                I            <Link to="/project-list" className="navbar-button"></Link>�                          </div>�                )          <div className="pir-container">�                7            <img src={pir} alt="Pir" className="pir" />�                          </div>�                        </div>�                      </div>�                    </>�                  );5��                         �                    �                         �                    �                         �                    �                         �                    �               
          �      
              �                         �                    �               
          b      
              �               
          Q      
              �                                             �                         �                    �                         x                    �               
          M      
              �               
          ;      
              �                         �                    �               
          �      
              �               
          �      
              �                         c                    �                         :                    �    
                     3                    �    	                     (                    5�_�         
                  ����                                                                                                                                                                                                                                                                                                                               1                 V   A    c��m     �                2					<Link to="/logout" className="navbar-button">   ?						<img src={logout_icon} alt="Logout" className="logout" />   					</Link>5��                          �      �               5�_�                           ����                                                                                                                                                                                                                                                                                                                               1                 V   A    c��p     �             �             5��                          7              �       5�_�                            ����                                                                                                                                                                                                                                                                                                                               1                 V   A    c��q    �                2					<Link to="/logout" className="navbar-button">�                ?						<img src={logout_icon} alt="Logout" className="logout" />�                					</Link>5��                         �                    �                         j                    �                         7                    5�_�         	      
           ����                                                                                                                                                                                                                                                                                                                                                 V       c���     �              �             �               		<>   %			<div className="navbar-container">   				<div className="navbar">   3					<img src={logo} alt="Logo" className="logo" />   2					<Link to="/logout" className="navbar-button">   ?						<img src={logout_icon} alt="Logout" className="logout" />   					</Link>   %					<div className="navbar-buttons">   ?						<Link to="/calendar" className="navbar-button"></Link>   B						<Link to="/add-project" className="navbar-button"></Link>   C						<Link to="/project-list" className="navbar-button"></Link>   					</div>   $					<div className="pir-container">   1						<img src={pir} alt="Pir" className="pir" />   					</div>   
				</div>   				</div>   		</>5��                          7      h              �                          7              s      5�_�   
                        ����                                                                                                                                                                                                                                                                                                                                                 V       c���    �         "      			</>�         "      
				</div>�         "      					</div>�         "      						</div>�         "      2							<img src={pir} alt="Pir" className="pir" />�         "      %						<div className="pir-container">�         "      						</div>�         "      D							<Link to="/project-list" className="navbar-button"></Link>�         "      C							<Link to="/add-project" className="navbar-button"></Link>�         "      @							<Link to="/calendar" className="navbar-button"></Link>�         "      &						<div className="navbar-buttons">�         "      						</Link>�         "      @							<img src={logout_icon} alt="Logout" className="logout" />�         "      3						<Link to="/logout" className="navbar-button">�         "      4						<img src={logo} alt="Logo" className="logo" />�         "      					<div className="navbar">�         "      &				<div className="navbar-container">�         "      			<>5��                         �                    �                         �                    �                         �                    �                         �                    �                         Q                    �                         ,                    �                                              �                         �                    �                         �                    �                         Y                    �                         3                    �                         &                    �                         �                    �                         �                    �                                             �                         b                    �                         <                    �                         7                    5�_�   
                       ����                                                                                                                                                                                                                                                                                                                               	          	       V       c���   	 �         "      			</>�         "      
				</div>�         "      					</div>�         "      						</div>�         "      2							<img src={pir} alt="Pir" className="pir" />�         "      %						<div className="pir-container">�         "      						</div>�         "      D							<Link to="/project-list" className="navbar-button"></Link>�         "      C							<Link to="/add-project" className="navbar-button"></Link>�         "      @							<Link to="/calendar" className="navbar-button"></Link>�         "      &						<div className="navbar-buttons">�         "      						</Link>�         "      @							<img src={logout_icon} alt="Logout" className="logout" />�         "      3						<Link to="/logout" className="navbar-button">�         "      4						<img src={logo} alt="Logo" className="logo" />�         "      					<div className="navbar">�         "      &				<div className="navbar-container">�         "      			<>5��                         �                    �                         �                    �                         �                    �                         �                    �                         Q                    �                         ,                    �                                              �                         �                    �                         �                    �                         Y                    �                         3                    �                         &                    �                         �                    �                         �                    �                                             �                         b                    �                         <                    �                         7                    5�_�                            ����                                                                                                                                                                                                                                                                                                                                                 V       c���     �              �             �                <div className="navbar-buttons">   ;  <Link to="/calendar" className="navbar-button"></Link>   >  <Link to="/add-project" className="navbar-button"></Link>   ?  <Link to="/project-list" className="navbar-button"></Link>   </div>   <div className="pir-container">   -  <img src={pir} alt="Pir" className="pir" />   </div>   4<Link to="/logout" className="navbar-button logout">   (  <img src={logout_icon} alt="Logout" />   </Link>5��                          =      x              �                          =              �      5�_�                             ����                                                                                                                                                                                                                                                                                                                                                 V       c���   
 �               				</Link>�               +					<img src={logout_icon} alt="Logout" />�               8				<Link to="/logout" className="navbar-button logout">�               
				</div>�               0					<img src={pir} alt="Pir" className="pir" />�               #				<div className="pir-container">�               
				</div>�               B					<Link to="/project-list" className="navbar-button"></Link>�               A					<Link to="/add-project" className="navbar-button"></Link>�               >					<Link to="/calendar" className="navbar-button"></Link>�               $				<div className="navbar-buttons">5��                          �                     �                         �                    �                          u                     �                          n                     �                         @                    �                                                �                                               �                         �                    �                         �                    �                         ^                    �                          =                     5�_�              
   	           ����                                                                                                                                                                                                                                                                                                                                                 V        c�ܹ    �   
           �             �   
             <div className="navbar-buttons">   ;  <Link to="/calendar" className="navbar-button"></Link>   >  <Link to="/add-project" className="navbar-button"></Link>   ?  <Link to="/project-list" className="navbar-button"></Link>   </div>   <div className="pir-container">   -  <img src={pir} alt="Pir" className="pir" />   </div>   4<Link to="/logout" className="navbar-button logout">   (  <img src={logout_icon} alt="Logout" />   </Link>5��    
                      2      s              �    
                      2              �      5��