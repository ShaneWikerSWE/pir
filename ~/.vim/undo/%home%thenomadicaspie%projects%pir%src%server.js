Vim�UnDo� ٜ��Ѻd*\���%�Ӻ��8�Et�W4�&o��   =   D			res.status(201).send(`Entry added for user email: ${userEmail}`);             9       9   9   9    c�3�    _�                            ����                                                                                                                                                                                                                                                                                                                               "       /          V   6    c��    �         /      const port = 4000;5��                        �                     5�_�                           ����                                                                                                                                                                                                                                                                                                                               "       /          V   6    c��9    �         /      const port = 4001;5��                        �                     5�_�                           ����                                                                                                                                                                                                                                                                                                                               "       /          V   6    c��;    �         /      const port = 4003;5��                        �                     5�_�                       7    ����                                                                                                                                                                                                                                                                                                                               "       /          V   6    c��L     �         /      D			res.status(201).send(`Entry added for user email: ${userEmail}`);5��       7                  �                     5�_�                       7    ����                                                                                                                                                                                                                                                                                                                               "       /          V   6    c��L     �         /      C			res.status(201).send(`Entry added for user email: ${serEmail}`);5��       7                  �                     5�_�                       7    ����                                                                                                                                                                                                                                                                                                                               "       /          V   6    c��L     �         /      B			res.status(201).send(`Entry added for user email: ${erEmail}`);5��       7                  �                     5�_�                       7    ����                                                                                                                                                                                                                                                                                                                               "       /          V   6    c��L     �         /      A			res.status(201).send(`Entry added for user email: ${rEmail}`);5��       7                  �                     5�_�      	                 7    ����                                                                                                                                                                                                                                                                                                                               "       /          V   6    c��N    �         /      @			res.status(201).send(`Entry added for user email: ${Email}`);5��       7                 �                    5�_�      
           	      	    ����                                                                                                                                                                                                                                                                                                                                       /           V        c��     �         /      e	const { email, clientName, clientEmail, stageName, stageNumber, days, hours, isCurrent } = req.body;5��       	                                       5�_�   	              
          ����                                                                                                                                                                                                                                                                                                                                       /           V        c��     �         /      i	const { useremail, clientName, clientEmail, stageName, stageNumber, days, hours, isCurrent } = req.body;5��                                            5�_�   
                        ����                                                                                                                                                                                                                                                                                                                                       /           V        c��     �         /      �		'INSERT INTO users (email, clientName, clientEmail, stageName, stageNumber, days, hours, isCurrent) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)',5��                         �                     5�_�                           ����                                                                                                                                                                                                                                                                                                                                       /           V        c��    �         /      �		'INSERT INTO users (useremail, clientName, clientEmail, stageName, stageNumber, days, hours, isCurrent) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)',5��                        �                    5�_�                           ����                                                                                                                                                                                                                                                                                                                                       /           V        c��     �         /      S		[email, clientName, clientEmail, stageName, stageNumber, days, hours, isCurrent],5��                         "                     5�_�                           ����                                                                                                                                                                                                                                                                                                                                       /           V        c��    �         /      W		[useremail, clientName, clientEmail, stageName, stageNumber, days, hours, isCurrent],5��                        &                    5�_�                           ����                                                                                                                                                                                                                                                                                                                                       /           V        c��     �          /      	email: 'example@email.com',5��                         f                     5�_�                           ����                                                                                                                                                                                                                                                                                                                                       /           V        c��    �          /       	useremail: 'example@email.com',5��                        j                    5�_�                       7    ����                                                                                                                                                                                                                                                                                                                                       /           V        c���     �         /      @			res.status(201).send(`Entry added for user email: ${email}`);5��       7                  �                     �       8                 �                    5�_�                       ;    ����                                                                                                                                                                                                                                                                                                                                       /           V        c���   	 �         /      D			res.status(201).send(`Entry added for user email: ${useremail}`);5��       ;                 �                    5�_�                    /        ����                                                                                                                                                                                                                                                                                                                                                             c�,4     �   1               �   0              con�   /               �   /            5��    /                      �                     �    /                      �                     �    /                      �                     �    0                      �                     �    0                     �                    �    0                     �                    �    0                     �                    �    0                     �                    �    0                     �                     �    1                       �                      5�_�                    1       ����                                                                                                                                                                                                                                                                                                                            1   	       1          v       c�,8     �   1   3   3    �   0   3          const saveProject = () => {   }�   0   3   2      const NAME = 5��    0                    �                    �    0                     �                     �    0                     �                     �    1                      �                     �    1                      �                     �    1                      �                     5�_�                    2        ����                                                                                                                                                                                                                                                                                                                            1   	       1          v       c�,K     �   2   :   4    �   2   3   4    5��    2                      �              �       5�_�                    2        ����                                                                                                                                                                                                                                                                                                                            1   	       1          v       c�,L     �   1   2           5��    1                      �                     5�_�                    2        ����                                                                                                                                                                                                                                                                                                                            1   	       1          v       c�,M   
 �   1   3   :      4axios.post('http://localhost:4000/users', stageData)�   2   4   :      	.then(res => {�   3   5   :      		console.log(res.data);�   4   6   :      	})�   5   7   :      	.catch(error => {�   6   8   :      		console.error(error);�   7   9   :      	});5��    7                     ]                    �    6                     E                    �    5                     2                    �    4                     .                    �    3                                         �    2                                         �    1                      �                     5�_�                    1       ����                                                                                                                                                                                                                                                                                                                            1   	       1          v       c�,O    �   0   2   :      const saveProject = () => {5��    0                     �                     �    0                     �                     �    0                     �                     �    0                     �                     �    0                 	   �             	       �    0                     �                     �    0                     �                     �    0                     �                     �    0                     �                     �    0                     �                     �    0                     �                     �    0                     �                     �    0                     �                     �    0                 	   �             	       �    0          	          �      	              �    0                 	   �             	       5�_�                    1        ����                                                                                                                                                                                                                                                                                                                            1   	       1          v       c�,R    �   0   2   :      $const saveProject = (stageData) => {5��    0                      �                     �    0                     �                     5�_�                    1        ����                                                                                                                                                                                                                                                                                                                               "       :           V   \    c�.      �   0   2   :      +export const saveProject = (stageData) => {5��    0                      �                     5�_�                    1        ����                                                                                                                                                                                                                                                                                                                               "       :           V   \    c�.     �   0   2   :      % const saveProject = (stageData) => {5��    0                      �                     5�_�                    1        ����                                                                                                                                                                                                                                                                                                                               "       :           V   \    c�.     �   0   2   :      $const saveProject = (stageData) => {5��    0                      �                     �    0                     �                     �    0                    �                    �    0                     �                     �    0                    �                    5�_�                    1       ����                                                                                                                                                                                                                                                                                                                               "       :           V   \    c�.     �   0   2   :      3module.exports.const saveProject = (stageData) => {5��    0                     �                     5�_�                    1       ����                                                                                                                                                                                                                                                                                                                               "       :           V   \    c�.     �   0   2   :      2module.exportsconst saveProject = (stageData) => {5��    0                     �                     5�_�                     1       ����                                                                                                                                                                                                                                                                                                                               "       :           V   \    c�.     �   0   2   :      1module.exportsonst saveProject = (stageData) => {5��    0                     �                     5�_�      !               1       ����                                                                                                                                                                                                                                                                                                                               "       :           V   \    c�.     �   0   2   :      0module.exportsnst saveProject = (stageData) => {5��    0                     �                     5�_�       "           !   1       ����                                                                                                                                                                                                                                                                                                                               "       :           V   \    c�.     �   0   2   :      /module.exportsst saveProject = (stageData) => {5��    0                     �                     5�_�   !   #           "   1       ����                                                                                                                                                                                                                                                                                                                               "       :           V   \    c�.     �   0   2   :      .module.exportst saveProject = (stageData) => {5��    0                     �                     5�_�   "   $           #   1       ����                                                                                                                                                                                                                                                                                                                               "       :           V   \    c�.     �   0   2   :      -module.exports saveProject = (stageData) => {5��    0                     �                     5�_�   #   %           $   1       ����                                                                                                                                                                                                                                                                                                                               "       :           V   \    c�.    �   0   2   :      ,module.exportssaveProject = (stageData) => {5��    0                     �                     5�_�   $   &           %   1        ����                                                                                                                                                                                                                                                                                                                            1          8          V       c�/z     �   0   1          -module.exports.saveProject = (stageData) => {   5	axios.post('http://localhost:4000/users', stageData)   		.then(res => {   			console.log(res.data);   		})   		.catch(error => {   			console.error(error);   		});5��    0                      �      �               5�_�   %   '           &   1        ����                                                                                                                                                                                                                                                                                                                            1          1          V       c�/{     �   0   1          }5��    0                      �                     5�_�   &   )           '   1        ����                                                                                                                                                                                                                                                                                                                            1          1          V       c�/{    �   0   1           5��    0                      �                     5�_�   '   *   (       )          ����                                                                                                                                                                                                                                                                                                                               "       0           V   O    c�0     �         1       �         0    5��                          �                     �                          �                     5�_�   )   +           *           ����                                                                                                                                                                                                                                                                                                                               "       2           V   O    c�0     �         2       �         2    5��                         �              �       5�_�   *   ,           +           ����                                                                                                                                                                                                                                                                                                                               "       6           V   O    c�0    �         6      #app.use(function (req, res, next) {�         6      1  res.header("Access-Control-Allow-Origin", "*");�         6      _  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");�         6      	  next();5��                         �                    �                         T                    �                         "                    �                                              5�_�   +   -           ,          ����                                                                                                                                                                                                                                                                                                                                       6           V        c�1�     �         6    5��                          d                      5�_�   ,   .           -           ����                                                                                                                                                                                                                                                                                                                                       7           V        c�1�     �         7    �         7    5��                          e                      5�_�   -   /           .           ����                                                                                                                                                                                                                                                                                                                                       8           V        c�1�    �                 5��                          d                      5�_�   .   0           /          ����                                                                                                                                                                                                                                                                                                                                       7           V        c�1�     �      	   7    5��                          �                      5�_�   /   1           0           ����                                                                                                                                                                                                                                                                                                                                       8           V        c�1�     �      
   8    �      	   8    5��                          �               4       5�_�   0   2           1           ����                                                                                                                                                                                                                                                                                                                                       9           V        c�1�     �                 5��                          �                      5�_�   1   3           2           ����                                                                                                                                                                                                                                                                                                                                       8           V        c�1�    �      
   8    5��                          �                      5�_�   2   4           3          ����                                                                                                                                                                                                                                                                                                                                       9           V        c�3p     �         ;    �                			try {   			}�         :      			�         9    5��                          �                     �                                              �                                             �                                               �                                             �                                              �                         
                     �                         	                     �                                               5�_�   3   5           4           ����                                                                                                                                                                                                                                                                                                                                       <           V        c�3u     �                D			res.status(201).send(`Entry added for user email: ${userEmail}`);5��                                E               5�_�   4   6           5           ����                                                                                                                                                                                                                                                                                                                                       ;           V        c�3u     �         ;    �         ;    5��                          	              E       5�_�   5   7           6           ����                                                                                                                                                                                                                                                                                                                                       <           V        c�3v     �                 5��                                               5�_�   6   8           7          ����                                                                                                                                                                                                                                                                                                                                       ;           V        c�3x     �         =      				�         <    �                			} catch (e) {   			}�         ;      			}5��                         Q                     �                         T                     �                         S                     �                        R                    �                         U                     �                         T                     �                         S                     �                        R                    �                         S                     �                        R                    �                        ]                     �                          ^                     �                         ^                    �                         l                     �                         k                     �                        j                    �                        m                    �                         p                     �                        p                    5�_�   7   9           8          ����                                                                                                                                                                                                                                                                                                                                       =           V        c�3�     �         =      				console.error (e)5��                         o                     5�_�   8               9          ����                                                                                                                                                                                                                                                                                                                                       =           V        c�3�    �         =      D			res.status(201).send(`Entry added for user email: ${userEmail}`);5��                                             5�_�   '           )   (   )        ����                                                                                                                                                                                                                                                                                                                            )           )           V        c�/�    �   (   1        5��    (                            �               5��