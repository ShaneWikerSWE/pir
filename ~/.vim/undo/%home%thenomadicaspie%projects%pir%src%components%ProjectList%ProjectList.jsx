Vim�UnDo� ������@)�S�,�_ R s�x�.�1$�   *   #const ProjectList = ({ name }) => {                             c��    _�                             ����                                                                                                                                                                                                                                                                                                                                      2          V       c� �     �                   �               �              2   (import React, { useState } from 'react';   import './projectlist.css'           function ProjectTracker() {   *	const [status, setStatus] = useState('');   (	const [email, setEmail] = useState('');   %	const [days, setDays] = useState(0);       	const handleSubmit = (e) => {   		e.preventDefault();   8		// send an email to the client with the updated status   	};       		return (    		<form onSubmit={handleSubmit}>   
			<label>   				Project Status:   G				<select value={status} onChange={(e) => setStatus(e.target.value)}>   .					<option value="">Select a status</option>   5					<option value="in progress">In Progress</option>   -					<option value="pending">Pending</option>   1					<option value="completed">Completed</option>   				</select>   			</label>   				<br />   
			<label>   				Client Email:   
				<input   					type="email"   					value={email}   /					onChange={(e) => setEmail(e.target.value)}   				/>   			</label>   				<br />   
			<label>   				Days per stage:   
				<input   					type="number"   					value={days}   .					onChange={(e) => setDays(e.target.value)}   				/>   			</label>   				<br />   /			<button type="submit">Update Status</button>   			</form>   	);   }       export default ProjectTracker;5��            2                      `             �                    &                       �      5�_�                            ����                                                                                                                                                                                                                                                                                                                                       &          V       c� �    �         &        const projects = [�         &      .    { client: "Client 1", status: "pending" },�      	   &      2    { client: "Client 2", status: "in progress" },�      
   &      /    { client: "Client 3", status: "finished" },�   	      &      .    { client: "Client 4", status: "pending" },�   
      &        ];�         &      
  return (�         &      "    <div className="project-list">�         &            <Link to="/add-project">�         &      C        <button className="add-project-button">Add project</button>�         &            </Link>�         &            <table>�         &              <thead>�         &                <tr>�         &                  <th>Client</th>�         &                  <th>Status</th>�         &                </tr>�         &              </thead>�         &              <tbody>�         &      -          {projects.map((project, index) => (�         &                  <tr key={index}>�         &      '              <td>{project.client}</td>�         &      '              <td>{project.status}</td>�         &                  </tr>�          &                ))}�      !   &              </tbody>�       "   &            </table>�   !   #   &      
    </div>�   "   $   &        );5��    "                     t                    �    !                     i                    �                          Z                    �                         I                    �               
          ;      
              �                         )                    �                                             �                         �                    �                         �                    �               
          �      
              �                         ~                    �                         m                    �               
          ]      
              �                         A                    �                         %                    �               
                
              �                                             �                         �                    �                         �                    �                         �                    �                         �                    �                         d                    �                         Y                    �    
                     S                    �    	                     $                    �                         �                     �                         �                     �                         �                     �                         }                     5�_�                       
    ����                                                                                                                                                                                                                                                                                                                                       &          V       c�     �         &      import "./ProjectList.css";5��       
                 N                     5�_�                       
    ����                                                                                                                                                                                                                                                                                                                                       &          V       c�     �         &      import "./rrojectList.css";5��       
                 N                     5�_�                           ����                                                                                                                                                                                                                                                                                                                                       &          V       c�	    �         &      import "./projectList.css";5��                        U                     5�_�                            ����                                                                                                                                                                                                                                                                                                                                      &          V       c��     �                   �               �              &   import React from "react";   (import { Link } from "react-router-dom";   import "./projectlist.css";       const ProjectList = () => {   	const projects = [   ,		{ client: "Client 1", status: "pending" },   0		{ client: "Client 2", status: "in progress" },   -		{ client: "Client 3", status: "finished" },   ,		{ client: "Client 4", status: "pending" },   	];       		return (    		<div className="project-list">   			<Link to="/add-project">   ?				<button className="add-project-button">Add project</button>   
			</Link>   
			<table>   				<thead>   						<tr>   						<th>Client</th>   						<th>Status</th>   
					</tr>   				</thead>   				<tbody>   (					{projects.map((project, index) => (   						<tr key={index}>    							<td>{project.client}</td>    							<td>{project.status}</td>   						</tr>   					))}   				</tbody>   			</table>   		</div>   	);   };       export default ProjectList;5��            &                      /             �                    #                       �      5�_�                    #        ����                                                                                                                                                                                                                                                                                                                                       #           V       c��     �   #            �   #            5��    #                      �              /       5�_�      	              $       ����                                                                                                                                                                                                                                                                                                                                       #           V       c��     �   #              .        <div className="dashboard__container">5��    #          !           �      !               5�_�      
           	   $       ����                                                                                                                                                                                                                                                                                                                                       #           V       c��     �   #                      <div>5��    #                     �                     5�_�   	              
   $       ����                                                                                                                                                                                                                                                                                                                                       #           V       c��    �         $      �  const projects = [    { client: "Acme Inc", status: "pending" },    { client: "Foo Corp", status: "in progress" },    { client: "Bar Ltd", status: "finished" },    { client: "Baz Co", status: "pending" },  ];�      	   $      
  return (�      
   $      "    <div className="project-list">�   	      $      F      <h1 style={{ marginTop: "100px", textAlign: "center" }}>PIR</h1>�   
      $            <Link to="/add-project">�         $      C        <button className="add-project-button">Add project</button>�         $            </Link>�         $            <table>�         $              <thead>�         $                <tr>�         $                  <th>Client</th>�         $                  <th>Status</th>�         $                </tr>�         $              </thead>�         $              <tbody>�         $      -          {projects.map((project, index) => (�         $                  <tr key={index}>�         $      '              <td>{project.client}</td>�         $      '              <td>{project.status}</td>�         $                  </tr>�         $                ))}�         $              </tbody>�         $            </table>�         $      !      <div className="dashboard">�          $      .        <div className="dashboard__container">�      !   $                Logged in as�       "   $                <div>{name}</div>�   !   #   $      "          <div>{user?.email}</div>�   "   $   $      !          <button className="dash5��    "           
          e      
              �    !           
          B      
              �                
          &      
              �               
                
              �                         �                    �                         �                    �                         �                    �                         �                    �               
          �      
              �                         ~                    �                         V                    �                         .                    �                                             �               
          �      
              �                         �                    �                         �                    �               
          �      
              �                         �                    �                         z                    �               
          k      
              �                         [                    �                         M                    �                         ?                    �                         �                    �    
                     �                    �    	                     �                    �                         r                    �                         g                    �       �                  a                     �       �                 5                    �       t                                     �       B                 �                     �                         �                      �                         �                     5�_�   
                 $       ����                                                                                                                                                                                                                                                                                                                                       #           V       c��    �   $            �   $            5��    $                                           5�_�                    %       ����                                                                                                                                                                                                                                                                                                                                       #           V       c��    �   %            �   %            5��    %                                           5�_�                    &       ����                                                                                                                                                                                                                                                                                                                                       #           V       c��    �   &              		�   &            5��    &                      ,                     �    &                     .                     �    &                    .                    �    &                    .                    �    &                     ,                    5�_�                    '       ����                                                                                                                                                                                                                                                                                                                                       #           V       c��    �   '              	�   '            5��    '                      /                     �    '                     /                    5�_�                            ����                                                                                                                                                                                                                                                                                                                                      (          V       c�T     �                   �               �              (   import React from "react";   (import { Link } from "react-router-dom";   import "./ProjectList.css";       1const ProjectList = ({ name, user, logout }) => {   �	const projects = [{ client: "Acme Inc", status: "pending" }, { client: "Foo Corp", status: "in progress" }, { client: "Bar Ltd", status: "finished" }, { client: "Baz Co", status: "pending" },];       		return (    		<div className="project-list">   C			<h1 style={{ marginTop: "100px", textAlign: "center" }}>PIR</h1>   			<Link to="/add-project">   ?				<button className="add-project-button">Add project</button>   
			</Link>   
			<table>   				<thead>   						<tr>   						<th>Client</th>   						<th>Status</th>   
					</tr>   				</thead>   				<tbody>   (					{projects.map((project, index) => (   						<tr key={index}>    							<td>{project.client}</td>    							<td>{project.status}</td>   						</tr>   					))}   				</tbody>   			</table>   			<div className="dashboard">   *				<div className="dashboard__container">   					Logged in as   					<div>{name}</div>   					<div>{user?.email}</div>   					<button className="dash           <div />           <div />           <div />   	)   }5��            (                      1             �                    '                       �      5�_�                            ����                                                                                                                                                                                                                                                                                                                                       '          V       c�V    �         '        const projects = [�         '      /    { client: "ACME Inc.", status: "pending" },�      	   '      3    { client: "ABC Corp.", status: "in progress" },�      
   '      .    { client: "XYZ LLC", status: "finished" },�   	      '      8    { client: "EcoGreen Solutions", status: "pending" },�   
      '        ];�         '      
  return (�         '      "    <div className="project-list">�         '      &      <div className="title">PIR</div>�         '            <Link to="/add-project">�         '      \        <button style={{ top: "100px" }} className="add-project-button">Add project</button>�         '            </Link>�         '            <table>�         '              <thead>�         '                <tr>�         '                  <th>Client</th>�         '                  <th>Status</th>�         '                </tr>�         '              </thead>�         '              <tbody>�         '      -          {projects.map((project, index) => (�         '                  <tr key={index}>�         '      '              <td>{project.client}</td>�         '      '              <td>{project.status}</td>�          '                  </tr>�      !   '                ))}�       "   '              </tbody>�   !   #   '            </table>�   "   $   '      
    </div>�   #   %   '        );5��    #                     �                    �    "                     �                    �    !                     �                    �                          �                    �               
          �      
              �                         |                    �                         T                    �                         ,                    �                                             �               
          �      
              �                         �                    �                         �                    �               
          �      
              �                         �                    �                         x                    �               
          i      
              �                         Y                    �                         K                    �                         =                    �                         �                    �                         �                    �                         �                    �                         w                    �                         l                    �    
                     f                    �    	                     -                    �                         �                     �                         �                     �                         �                     �                         �                     5�_�                       
    ����                                                                                                                                                                                                                                                                                                                                       '          V       c�_     �         '      import "./ProjectList.css";5��       
                 N                     5�_�                           ����                                                                                                                                                                                                                                                                                                                                       '          V       c�`   	 �         '      import "./projectList.css";5��                        U                     5�_�                    "        ����                                                                                                                                                                                                                                                                                                                                                             c�i   
 �   "   &   '    �   "   #   '    5��    "                      R              P       5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             c��    �         *    �         *    5��                          D               /       5�_�                       #    ����                                                                                                                                                                                                                                                                                                                                                             c��    �         +      .import { auth, db, logout } from "./firebase";5��       #                  g                      5�_�                       $    ����                                                                                                                                                                                                                                                                                                                                                             c��    �         +      0import { auth, db, logout } from ".../firebase";5��       $                  h                      5�_�                       #    ����                                                                                                                                                                                                                                                                                                                                                             c��     �         +      1import { auth, db, logout } from "..../firebase";5��       #                  g                      5�_�                       #    ����                                                                                                                                                                                                                                                                                                                                                             c��     �         +      0import { auth, db, logout } from ".../firebase";5��       #                  g                      5�_�                       #    ����                                                                                                                                                                                                                                                                                                                                                             c��    �         +      /import { auth, db, logout } from "../firebase";5��       #                  g                      5�_�                    	   	    ����                                                                                                                                                                                                                                                                                                                                                             c��     �      
   +      1		{ client: "ABC Corp.", status: "in progress" },5�5�_�                    	   	    ����                                                                                                                                                                                                                                                                                                                                                             c��     �      
   +      1		{ client: "ABC Corp.", status: "in progress" },5�5�_�                    	   	    ����                                                                                                                                                                                                                                                                                                                                                             c��     �      
   +      1		{ client: "ABC Corp.", status: "in progress" },5�5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             c��    �                .import { auth, db, logout } from "./firebase";5��                          D       /               5�_�                           ����                                                                                                                                                                                                                                                                                                                                      *          V   =    c��    �         *      #const ProjectList = ({ name }) => {5��                         |                      �                        |                     �                        |                     �                        |                     �                        �                     5�_�                           ����                                                                                                                                                                                                                                                                                                                                      )          V   =    c��     �              5��                          a       $               5��